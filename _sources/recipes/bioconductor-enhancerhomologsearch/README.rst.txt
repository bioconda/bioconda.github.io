:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enhancerhomologsearch'
.. highlight: bash

bioconductor-enhancerhomologsearch
==================================

.. conda:recipe:: bioconductor-enhancerhomologsearch
   :replaces_section_title:
   :noindex:

   Identification of putative mammalian orthologs to given enhancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/enhancerHomologSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-enhancerhomologsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancerhomologsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancerhomologsearch/meta.yaml>`_

   Get ENCODE data of enhancer region via H3K4me1 peaks and search homolog regions for given sequences. The candidates of enhancer homolog regions can be filtered by distance to target TSS. The top candidates from human and mouse will be aligned to each other and then exported as multiple alignments with given enhancer.


.. conda:package:: bioconductor-enhancerhomologsearch

   |downloads_bioconductor-enhancerhomologsearch| |docker_bioconductor-enhancerhomologsearch|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.2-0``,  ``1.6.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-motifmatchr: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-motifmatchr: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-jsonlite: 
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

    pixi global install bioconductor-enhancerhomologsearch

to add into an existing workspace instead, run::

    pixi add bioconductor-enhancerhomologsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-enhancerhomologsearch

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-enhancerhomologsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-enhancerhomologsearch:<tag>

(see `bioconductor-enhancerhomologsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-enhancerhomologsearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enhancerhomologsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enhancerhomologsearch
   :alt:   (downloads)
.. |docker_bioconductor-enhancerhomologsearch| image:: https://quay.io/repository/biocontainers/bioconductor-enhancerhomologsearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enhancerhomologsearch
.. _`bioconductor-enhancerhomologsearch/tags`: https://quay.io/repository/biocontainers/bioconductor-enhancerhomologsearch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enhancerhomologsearch";
        var versions = ["1.16.0","1.12.0","1.8.2","1.6.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enhancerhomologsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enhancerhomologsearch/README.html