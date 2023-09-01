:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse103322'
.. highlight: bash

bioconductor-gse103322
======================

.. conda:recipe:: bioconductor-gse103322
   :replaces_section_title:
   :noindex:

   GEO accession data GSE103322 as a SingleCellExperiment

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/GSE103322.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gse103322 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse103322>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse103322/meta.yaml>`_

   Single cell RNA\-Seq data for 5902 cells from 18 patients with oral cavity head and neck squamous cell carcinoma available as GEO accession \[GSE103322\] \(http\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE103322\). GSE103322 data have been parsed into a SincleCellExperiment object available in ExperimentHub.


.. conda:package:: bioconductor-gse103322

   |downloads_bioconductor-gse103322| |docker_bioconductor-gse103322|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-gse103322

   and update with::

      mamba update bioconductor-gse103322

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gse103322

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gse103322:<tag>

   (see `bioconductor-gse103322/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gse103322| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse103322.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse103322
   :alt:   (downloads)
.. |docker_bioconductor-gse103322| image:: https://quay.io/repository/biocontainers/bioconductor-gse103322/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse103322
.. _`bioconductor-gse103322/tags`: https://quay.io/repository/biocontainers/bioconductor-gse103322?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gse103322";
        var versions = ["1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse103322/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse103322/README.html