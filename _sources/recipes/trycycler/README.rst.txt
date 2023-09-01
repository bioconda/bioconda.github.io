:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trycycler'
.. highlight: bash

trycycler
=========

.. conda:recipe:: trycycler
   :replaces_section_title:
   :noindex:

   Trycycler is a tool for generating consensus long\-read assemblies for bacterial genomes

   :homepage: https://github.com/rrwick/Trycycler
   :license: GPLv3
   :recipe: /`trycycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trycycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trycycler/meta.yaml>`_

   


.. conda:package:: trycycler

   |downloads_trycycler| |docker_trycycler|

   :versions:
      
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``

      

   
   :depends mash: 
   :depends miniasm: 
   :depends minimap2: 
   :depends muscle: ``<4``
   :depends numpy: 
   :depends pillow: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-phangorn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install trycycler

   and update with::

      mamba update trycycler

  To create a new environment, run::

      mamba create --name myenvname trycycler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trycycler:<tag>

   (see `trycycler/tags`_ for valid values for ``<tag>``)


.. |downloads_trycycler| image:: https://img.shields.io/conda/dn/bioconda/trycycler.svg?style=flat
   :target: https://anaconda.org/bioconda/trycycler
   :alt:   (downloads)
.. |docker_trycycler| image:: https://quay.io/repository/biocontainers/trycycler/status
   :target: https://quay.io/repository/biocontainers/trycycler
.. _`trycycler/tags`: https://quay.io/repository/biocontainers/trycycler?tab=tags


.. raw:: html

    <script>
        var package = "trycycler";
        var versions = ["0.5.4","0.5.3","0.5.1","0.5.0","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trycycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trycycler/README.html