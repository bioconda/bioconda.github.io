:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgmql'
.. highlight: bash

bioconductor-rgmql
==================

.. conda:recipe:: bioconductor-rgmql
   :replaces_section_title:
   :noindex:

   GenoMetric Query Language for R\/Bioconductor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RGMQL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgmql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgmql/meta.yaml>`_

   This package brings the GenoMetric Query Language \(GMQL\) functionalities into the R environment. GMQL is a high\-level\, declarative language to manage heterogeneous genomic datasets for biomedical purposes\, using simple queries to process genomic regions and their metadata and properties. GMQL adopts algorithms efficiently designed for big data using cloud\-computing technologies \(like Apache Hadoop and Spark\) allowing GMQL to run on modern infrastructures\, in order to achieve scalability and high performance. It allows to create\, manipulate and extract genomic data from different data sources both locally and remotely. Our RGMQL functions allow complex queries and processing leveraging on the R idiomatic paradigm. The RGMQL package also provides a rich set of ancillary classes that allow sophisticated input\/output management and sorting\, such as\: ASC\, DESC\, BAG\, MIN\, MAX\, SUM\, AVG\, MEDIAN\, STD\, Q1\, Q2\, Q3 \(and many others\). Note that many RGMQL functions are not directly executed in R environment\, but are deferred until real execution is issued.


.. conda:package:: bioconductor-rgmql

   |downloads_bioconductor-rgmql| |docker_bioconductor-rgmql|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-1</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rgmqllib: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-glue: 
   :depends r-httr: 
   :depends r-plyr: 
   :depends r-rjava: 
   :depends r-xml2: 
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

      mamba install bioconductor-rgmql

   and update with::

      mamba update bioconductor-rgmql

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgmql

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgmql:<tag>

   (see `bioconductor-rgmql/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgmql| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgmql.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgmql
   :alt:   (downloads)
.. |docker_bioconductor-rgmql| image:: https://quay.io/repository/biocontainers/bioconductor-rgmql/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgmql
.. _`bioconductor-rgmql/tags`: https://quay.io/repository/biocontainers/bioconductor-rgmql?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgmql";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgmql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgmql/README.html