:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmp2data'
.. highlight: bash

bioconductor-hmp2data
=====================

.. conda:recipe:: bioconductor-hmp2data
   :replaces_section_title:
   :noindex:

   16s rRNA sequencing data from the Human Microbiome Project 2

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/HMP2Data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmp2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp2data/meta.yaml>`_

   HMP2Data is a Bioconductor package of the Human Microbiome Project 2 \(HMP2\) 16S rRNA sequencing data. Processed data is provided as phyloseq\, SummarizedExperiment\, and MultiAssayExperiment class objects. Individual matrices and data.frames used for building these S4 class objects are also provided in the package.


.. conda:package:: bioconductor-hmp2data

   |downloads_bioconductor-hmp2data| |docker_bioconductor-hmp2data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-readr: 
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

      mamba install bioconductor-hmp2data

   and update with::

      mamba update bioconductor-hmp2data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hmp2data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmp2data:<tag>

   (see `bioconductor-hmp2data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmp2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmp2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmp2data
   :alt:   (downloads)
.. |docker_bioconductor-hmp2data| image:: https://quay.io/repository/biocontainers/bioconductor-hmp2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmp2data
.. _`bioconductor-hmp2data/tags`: https://quay.io/repository/biocontainers/bioconductor-hmp2data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hmp2data";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmp2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmp2data/README.html