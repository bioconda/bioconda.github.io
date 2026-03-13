:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ttgsea'
.. highlight: bash

bioconductor-ttgsea
===================

.. conda:recipe:: bioconductor-ttgsea
   :replaces_section_title:
   :noindex:

   Tokenizing Text of Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ttgsea.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ttgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttgsea/meta.yaml>`_

   Functional enrichment analysis methods such as gene set enrichment analysis \(GSEA\) have been widely used for analyzing gene expression data. GSEA is a powerful method to infer results of gene expression data at a level of gene sets by calculating enrichment scores for predefined sets of genes. GSEA depends on the availability and accuracy of gene sets. There are overlaps between terms of gene sets or categories because multiple terms may exist for a single biological process\, and it can thus lead to redundancy within enriched terms. In other words\, the sets of related terms are overlapping. Using deep learning\, this pakage is aimed to predict enrichment scores for unique tokens or words from text in names of gene sets to resolve this overlapping set issue. Furthermore\, we can coin a new term by combining tokens and find its enrichment score by predicting such a combined tokens.


.. conda:package:: bioconductor-ttgsea

   |downloads_bioconductor-ttgsea| |docker_bioconductor-ttgsea|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-diagrammer: 
   :depends on r-keras: 
   :depends on r-purrr: 
   :depends on r-stopwords: 
   :depends on r-text2vec: 
   :depends on r-textstem: 
   :depends on r-tm: 
   :depends on r-tokenizers: 

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

    pixi global install bioconductor-ttgsea

to add into an existing workspace instead, run::

    pixi add bioconductor-ttgsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ttgsea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ttgsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ttgsea:<tag>

(see `bioconductor-ttgsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ttgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ttgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ttgsea
   :alt:   (downloads)
.. |docker_bioconductor-ttgsea| image:: https://quay.io/repository/biocontainers/bioconductor-ttgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ttgsea
.. _`bioconductor-ttgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-ttgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ttgsea";
        var versions = ["1.18.0","1.14.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ttgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ttgsea/README.html