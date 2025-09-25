:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mist_typing'
.. highlight: bash

mist_typing
===========

.. conda:recipe:: mist_typing
   :replaces_section_title:
   :noindex:

   MiST is a rapid\, accurate and flexible \(core\-genome\) multi\-locus sequence typing \(MLST\) allele caller.

   :homepage: https://github.com/BioinformaticsPlatformWIV-ISP/MiST
   :license: GPL / GPL-3.0-or-later
   :recipe: /`mist_typing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mist_typing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mist_typing/meta.yaml>`_

   


.. conda:package:: mist_typing

   |downloads_mist_typing| |docker_mist_typing|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends biopython: 
   :depends bs4: 
   :depends cd-hit: ``>=4.6.8``
   :depends click: 
   :depends furl: 
   :depends minimap2: ``>=2.26``
   :depends mummer4: 
   :depends pandas: ``>2``
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends rauth: 
   :depends requests: 
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

      mamba install mist_typing

   and update with::

      mamba update mist_typing

  To create a new environment, run::

      mamba create --name myenvname mist_typing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mist_typing:<tag>

   (see `mist_typing/tags`_ for valid values for ``<tag>``)


.. |downloads_mist_typing| image:: https://img.shields.io/conda/dn/bioconda/mist_typing.svg?style=flat
   :target: https://anaconda.org/bioconda/mist_typing
   :alt:   (downloads)
.. |docker_mist_typing| image:: https://quay.io/repository/biocontainers/mist_typing/status
   :target: https://quay.io/repository/biocontainers/mist_typing
.. _`mist_typing/tags`: https://quay.io/repository/biocontainers/mist_typing?tab=tags


.. raw:: html

    <script>
        var package = "mist_typing";
        var versions = ["0.0.3","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mist_typing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mist_typing/README.html