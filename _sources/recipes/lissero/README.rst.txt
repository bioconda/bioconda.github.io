:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lissero'
.. highlight: bash

lissero
=======

.. conda:recipe:: lissero
   :replaces_section_title:
   :noindex:

   In silico serotyping of Listeria monocytogenes

   :homepage: https://github.com/MDU-PHL/lissero
   :documentation: https://github.com/MDU-PHL/LisSero/blob/master/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`lissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lissero/meta.yaml>`_

   


.. conda:package:: lissero

   |downloads_lissero| |docker_lissero|

   :versions:
      
      

      ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.5-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.10``
   :depends click: 
   :depends ispcr: 
   :depends loguru: 
   :depends python: ``>=3.6``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install lissero

   and update with::

      mamba update lissero

  To create a new environment, run::

      mamba create --name myenvname lissero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lissero:<tag>

   (see `lissero/tags`_ for valid values for ``<tag>``)


.. |downloads_lissero| image:: https://img.shields.io/conda/dn/bioconda/lissero.svg?style=flat
   :target: https://anaconda.org/bioconda/lissero
   :alt:   (downloads)
.. |docker_lissero| image:: https://quay.io/repository/biocontainers/lissero/status
   :target: https://quay.io/repository/biocontainers/lissero
.. _`lissero/tags`: https://quay.io/repository/biocontainers/lissero?tab=tags


.. raw:: html

    <script>
        var package = "lissero";
        var versions = ["0.4.9","0.4.8","0.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lissero/README.html