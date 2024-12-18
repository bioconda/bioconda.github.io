:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse159526'
.. highlight: bash

bioconductor-gse159526
======================

.. conda:recipe:: bioconductor-gse159526
   :replaces_section_title:
   :noindex:

   Placental cell DNA methylation data from GEO accession GSE159526

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/GSE159526.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gse159526 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse159526>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse159526/meta.yaml>`_

   19 term and 9 first trimester placental chorionic villi and matched cell\-sorted samples ran on Illumina HumanMethylationEPIC DNA methylation microarrays. This data was made available on GEO accession \[GSE159526\]\(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE159526\). Both the raw and processed data has been made available on \\code\{ExperimentHub\}. Raw unprocessed data formatted as an RGChannelSet object for integration and normalization using minfi and other existing Bioconductor packages. Processed normalized data is also available as a DNA methylation \\code\{matrix\}\, with a corresponding phenotype information as a \\code\{data.frame\} object.


.. conda:package:: bioconductor-gse159526

   |downloads_bioconductor-gse159526| |docker_bioconductor-gse159526|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.3.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-gse159526

   and update with::

      mamba update bioconductor-gse159526

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gse159526

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gse159526:<tag>

   (see `bioconductor-gse159526/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gse159526| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse159526.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse159526
   :alt:   (downloads)
.. |docker_bioconductor-gse159526| image:: https://quay.io/repository/biocontainers/bioconductor-gse159526/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse159526
.. _`bioconductor-gse159526/tags`: https://quay.io/repository/biocontainers/bioconductor-gse159526?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gse159526";
        var versions = ["1.12.0","1.8.0","1.6.0","1.3.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse159526/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse159526/README.html