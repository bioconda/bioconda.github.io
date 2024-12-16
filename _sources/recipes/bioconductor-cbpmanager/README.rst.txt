:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbpmanager'
.. highlight: bash

bioconductor-cbpmanager
=======================

.. conda:recipe:: bioconductor-cbpmanager
   :replaces_section_title:
   :noindex:

   Generate\, manage\, and edit data and metadata files suitable for the import in cBioPortal for Cancer Genomics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cbpManager.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-cbpmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbpmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbpmanager/meta.yaml>`_

   This R package provides an R Shiny application that enables the user to generate\, manage\, and edit data and metadata files suitable for the import in cBioPortal for Cancer Genomics. Create cancer studies and edit its metadata. Upload mutation data of a patient that will be concatenated to the data\_mutation\_extended.txt file of the study. Create and edit clinical patient data\, sample data\, and timeline data. Create custom timeline tracks for patients.


.. conda:package:: bioconductor-cbpmanager

   |downloads_bioconductor-cbpmanager| |docker_bioconductor-cbpmanager|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-markdown: 
   :depends r-plyr: 
   :depends r-rapportools: 
   :depends r-reticulate: 
   :depends r-rintrojs: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-vroom: 
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

      mamba install bioconductor-cbpmanager

   and update with::

      mamba update bioconductor-cbpmanager

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cbpmanager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cbpmanager:<tag>

   (see `bioconductor-cbpmanager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cbpmanager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbpmanager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbpmanager
   :alt:   (downloads)
.. |docker_bioconductor-cbpmanager| image:: https://quay.io/repository/biocontainers/bioconductor-cbpmanager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbpmanager
.. _`bioconductor-cbpmanager/tags`: https://quay.io/repository/biocontainers/bioconductor-cbpmanager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbpmanager";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbpmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbpmanager/README.html