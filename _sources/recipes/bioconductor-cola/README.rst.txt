:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cola'
.. highlight: bash

bioconductor-cola
=================

.. conda:recipe:: bioconductor-cola
   :replaces_section_title:
   :noindex:

   A Framework for Consensus Partitioning

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cola.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cola <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cola>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cola/meta.yaml>`_

   Subgroup classification is a basic task in genomic data analysis\, especially for gene expression and DNA methylation data analysis. It can also be used to test the agreement to known clinical annotations\, or to test whether there exist significant batch effects. The cola package provides a general framework for subgroup classification by consensus partitioning. It has the following features\: 1. It modularizes the consensus partitioning processes that various methods can be easily integrated. 2. It provides rich visualizations for interpreting the results. 3. It allows running multiple methods at the same time and provides functionalities to straightforward compare results. 4. It provides a new method to extract features which are more efficient to separate subgroups. 5. It automatically generates detailed reports for the complete analysis. 6. It allows applying consensus partitioning in a hierarchical manner.


.. conda:package:: bioconductor-cola

   |downloads_bioconductor-cola| |docker_bioconductor-cola|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.1-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.16.1-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.1,<2.27.0a0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-brew: 
   :depends on r-circlize: ``>=0.4.7``
   :depends on r-clue: 
   :depends on r-cluster: 
   :depends on r-crayon: 
   :depends on r-digest: 
   :depends on r-doparallel: 
   :depends on r-dorng: 
   :depends on r-eulerr: 
   :depends on r-foreach: 
   :depends on r-getoptlong: 
   :depends on r-globaloptions: ``>=0.1.0``
   :depends on r-httr: 
   :depends on r-irlba: 
   :depends on r-knitr: ``>=1.4.0``
   :depends on r-markdown: ``>=1.6``
   :depends on r-matrixstats: ``>=1.2.0``
   :depends on r-mclust: 
   :depends on r-microbenchmark: 
   :depends on r-png: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=0.11.0``
   :depends on r-skmeans: 
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

    pixi global install bioconductor-cola

to add into an existing workspace instead, run::

    pixi add bioconductor-cola

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cola

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cola

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cola:<tag>

(see `bioconductor-cola/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cola| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cola.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cola
   :alt:   (downloads)
.. |docker_bioconductor-cola| image:: https://quay.io/repository/biocontainers/bioconductor-cola/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cola
.. _`bioconductor-cola/tags`: https://quay.io/repository/biocontainers/bioconductor-cola?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cola";
        var versions = ["2.16.1","2.12.0","2.8.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cola/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cola/README.html