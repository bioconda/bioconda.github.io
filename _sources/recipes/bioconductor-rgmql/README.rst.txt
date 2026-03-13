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
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-rgmqllib: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-glue: 
   :depends on r-httr: 
   :depends on r-plyr: 
   :depends on r-rjava: 
   :depends on r-xml2: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-rgmql

to add into an existing workspace instead, run::

    pixi add bioconductor-rgmql

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgmql

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgmql

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgmql:<tag>

(see `bioconductor-rgmql/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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