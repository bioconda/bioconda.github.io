:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmetabolights'
.. highlight: bash

bioconductor-msbackendmetabolights
==================================

.. conda:recipe:: bioconductor-msbackendmetabolights
   :replaces_section_title:
   :noindex:

   Retrieve Mass Spectrometry Data from MetaboLights

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsBackendMetaboLights.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmetabolights <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmetabolights>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmetabolights/meta.yaml>`_

   MetaboLights is one of the main public repositories for storage of metabolomics experiments\, which includes analysis results as well as raw data. The MsBackendMetaboLights package provides functionality to retrieve and represent mass spectrometry \(MS\) data from MetaboLights. Data files are downloaded and cached locally avoiding repetitive downloads. MS data from metabolomics experiments can thus be directly and seamlessly integrated into R\-based analysis workflows with the Spectra and MsBackendMetaboLights package.


.. conda:package:: bioconductor-msbackendmetabolights

   |downloads_bioconductor-msbackendmetabolights| |docker_bioconductor-msbackendmetabolights|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-spectra: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
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

      mamba install bioconductor-msbackendmetabolights

   and update with::

      mamba update bioconductor-msbackendmetabolights

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msbackendmetabolights

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendmetabolights:<tag>

   (see `bioconductor-msbackendmetabolights/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendmetabolights| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmetabolights.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmetabolights
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmetabolights| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmetabolights/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmetabolights
.. _`bioconductor-msbackendmetabolights/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmetabolights?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmetabolights";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmetabolights/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmetabolights/README.html