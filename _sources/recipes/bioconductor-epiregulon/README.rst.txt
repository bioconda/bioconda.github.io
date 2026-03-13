:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epiregulon'
.. highlight: bash

bioconductor-epiregulon
=======================

.. conda:recipe:: bioconductor-epiregulon
   :replaces_section_title:
   :noindex:

   Gene regulatory network inference from single cell epigenomic data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epiregulon.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epiregulon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon/meta.yaml>`_

   Gene regulatory networks model the underlying gene regulation hierarchies that drive gene expression and observed phenotypes. Epiregulon infers TF activity in single cells by constructing a gene regulatory network \(regulons\). This is achieved through integration of scATAC\-seq and scRNA\-seq data and incorporation of public bulk TF ChIP\-seq data. Links between regulatory elements and their target genes are established by computing correlations between chromatin accessibility and gene expressions.


.. conda:package:: bioconductor-epiregulon

   |downloads_bioconductor-epiregulon| |docker_bioconductor-epiregulon|

   :versions:
      
      

      ``2.0.2-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.3,<1.5.0a0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.5,<1.5.0a0``
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.3,<1.5.0a0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-motifmatchr: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-motifmatchr: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-scrapper: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-scrapper: ``>=1.4.0,<1.5.0a0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-entropy: 
   :depends on r-lifecycle: 
   :depends on r-matrix: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-epiregulon

to add into an existing workspace instead, run::

    pixi add bioconductor-epiregulon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epiregulon

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epiregulon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epiregulon:<tag>

(see `bioconductor-epiregulon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epiregulon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epiregulon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epiregulon
   :alt:   (downloads)
.. |docker_bioconductor-epiregulon| image:: https://quay.io/repository/biocontainers/bioconductor-epiregulon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epiregulon
.. _`bioconductor-epiregulon/tags`: https://quay.io/repository/biocontainers/bioconductor-epiregulon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epiregulon";
        var versions = ["2.0.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epiregulon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epiregulon/README.html