:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gostag'
.. highlight: bash

bioconductor-gostag
===================

.. conda:recipe:: bioconductor-gostag
   :replaces_section_title:
   :noindex:

   A tool to use GO Subtrees to Tag and Annotate Genes within a set

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/goSTAG.html
   :license: GPL-3
   :recipe: /`bioconductor-gostag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gostag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gostag/meta.yaml>`_

   Gene lists derived from the results of genomic analyses are rich in biological information. For instance\, differentially expressed genes \(DEGs\) from a microarray or RNA\-Seq analysis are related functionally in terms of their response to a treatment or condition. Gene lists can vary in size\, up to several thousand genes\, depending on the robustness of the perturbations or how widely different the conditions are biologically. Having a way to associate biological relatedness between hundreds and thousands of genes systematically is impractical by manually curating the annotation and function of each gene. Over\-representation analysis \(ORA\) of genes was developed to identify biological themes. Given a Gene Ontology \(GO\) and an annotation of genes that indicate the categories each one fits into\, significance of the over\-representation of the genes within the ontological categories is determined by a Fisher\'s exact test or modeling according to a hypergeometric distribution. Comparing a small number of enriched biological categories for a few samples is manageable using Venn diagrams or other means for assessing overlaps. However\, with hundreds of enriched categories and many samples\, the comparisons are laborious. Furthermore\, if there are enriched categories that are shared between samples\, trying to represent a common theme across them is highly subjective. goSTAG uses GO subtrees to tag and annotate genes within a set. goSTAG visualizes the similarities between the over\-representation of DEGs by clustering the p\-values from the enrichment statistical tests and labels clusters with the GO term that has the most paths to the root within the subtree generated from all the GO terms in the cluster.


.. conda:package:: bioconductor-gostag

   |downloads_bioconductor-gostag| |docker_bioconductor-gostag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.2-0</code>,  <code>1.14.1-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.2-0``,  ``1.14.1-0``,  ``1.13.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-memoise: 

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

    pixi global install bioconductor-gostag

to add into an existing workspace instead, run::

    pixi add bioconductor-gostag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gostag

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gostag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gostag:<tag>

(see `bioconductor-gostag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gostag| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gostag.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gostag
   :alt:   (downloads)
.. |docker_bioconductor-gostag| image:: https://quay.io/repository/biocontainers/bioconductor-gostag/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gostag
.. _`bioconductor-gostag/tags`: https://quay.io/repository/biocontainers/bioconductor-gostag?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gostag";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gostag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gostag/README.html