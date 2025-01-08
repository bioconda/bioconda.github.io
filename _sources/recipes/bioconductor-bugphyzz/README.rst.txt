:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bugphyzz'
.. highlight: bash

bioconductor-bugphyzz
=====================

.. conda:recipe:: bioconductor-bugphyzz
   :replaces_section_title:
   :noindex:

   A harmonized data resource and software for enrichment analysis of microbial physiologies

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/bugphyzz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bugphyzz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bugphyzz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bugphyzz/meta.yaml>`_

   bugphyzz is an electronic database of standardized microbial annotations. It facilitates the creation of microbial signatures based on shared attributes\, which are utilized for bug set enrichment analysis. The data also includes annotations imputed with ancestra state reconstruction methods.


.. conda:package:: bioconductor-bugphyzz

   |downloads_bioconductor-bugphyzz| |docker_bioconductor-bugphyzz|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr2: 
   :depends r-purrr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
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

      mamba install bioconductor-bugphyzz

   and update with::

      mamba update bioconductor-bugphyzz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bugphyzz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bugphyzz:<tag>

   (see `bioconductor-bugphyzz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bugphyzz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bugphyzz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bugphyzz
   :alt:   (downloads)
.. |docker_bioconductor-bugphyzz| image:: https://quay.io/repository/biocontainers/bioconductor-bugphyzz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bugphyzz
.. _`bioconductor-bugphyzz/tags`: https://quay.io/repository/biocontainers/bioconductor-bugphyzz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bugphyzz";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bugphyzz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bugphyzz/README.html