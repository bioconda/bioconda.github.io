:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-norce'
.. highlight: bash

bioconductor-norce
==================

.. conda:recipe:: bioconductor-norce
   :replaces_section_title:
   :noindex:

   NoRCE\: Noncoding RNA Sets Cis Annotation and Enrichment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NoRCE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-norce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norce/meta.yaml>`_

   While some non\-coding RNAs \(ncRNAs\) are assigned critical regulatory roles\, most remain functionally uncharacterized. This presents a challenge whenever an interesting set of ncRNAs needs to be analyzed in a functional context. Transcripts located close\-by on the genome are often regulated together. This genomic proximity on the sequence can hint to a functional association. We present a tool\, NoRCE\, that performs cis enrichment analysis for a given set of ncRNAs. Enrichment is carried out using the functional annotations of the coding genes located proximal to the input ncRNAs. Other biologically relevant information such as topologically associating domain \(TAD\) boundaries\, co\-expression patterns\, and miRNA target prediction information can be incorporated to conduct a richer enrichment analysis. To this end\, NoRCE includes several relevant datasets as part of its data repository\, including cell\-line specific TAD boundaries\, functional gene sets\, and expression data for coding \& ncRNAs specific to cancer. Additionally\, the users can utilize custom data files in their investigation. Enrichment results can be retrieved in a tabular format or visualized in several different ways. NoRCE is currently available for the following species\: human\, mouse\, rat\, zebrafish\, fruit fly\, worm\, and yeast.


.. conda:package:: bioconductor-norce

   |downloads_bioconductor-norce| |docker_bioconductor-norce|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-reactome.db: ``>=1.95.0,<1.96.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rwikipathways: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-dbplyr: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-png: 
   :depends on r-rcurl: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-rsqlite: 
   :depends on r-stringr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-norce

to add into an existing workspace instead, run::

    pixi add bioconductor-norce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-norce

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-norce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-norce:<tag>

(see `bioconductor-norce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-norce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-norce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-norce
   :alt:   (downloads)
.. |docker_bioconductor-norce| image:: https://quay.io/repository/biocontainers/bioconductor-norce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-norce
.. _`bioconductor-norce/tags`: https://quay.io/repository/biocontainers/bioconductor-norce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-norce";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-norce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-norce/README.html