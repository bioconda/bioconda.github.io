:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-appreci8r'
.. highlight: bash

bioconductor-appreci8r
======================

.. conda:recipe:: bioconductor-appreci8r
   :replaces_section_title:
   :noindex:

   appreci8R\: an R\/Bioconductor package for filtering SNVs and short indels with high sensitivity and high PPV

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/appreci8R.html
   :license: LGPL-3
   :recipe: /`bioconductor-appreci8r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-appreci8r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-appreci8r/meta.yaml>`_

   The appreci8R is an R version of our appreci8\-algorithm \- A Pipeline for PREcise variant Calling Integrating 8 tools. Variant calling results of our standard appreci8\-tools \(GATK\, Platypus\, VarScan\, FreeBayes\, LoFreq\, SNVer\, samtools and VarDict\)\, as well as up to 5 additional tools is combined\, evaluated and filtered.


.. conda:package:: bioconductor-appreci8r

   |downloads_bioconductor-appreci8r| |docker_bioconductor-appreci8r|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-cosmic.67: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomicscores: ``>=2.10.0,<2.11.0``
   :depends on bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends on bioconductor-mafdb.1kgenomes.phase3.hs37d5: ``>=3.10.0,<3.11.0``
   :depends on bioconductor-mafdb.exac.r1.0.hs37d5: ``>=3.10.0,<3.11.0``
   :depends on bioconductor-mafdb.gnomadex.r2.1.hs37d5: ``>=3.10.0,<3.11.0``
   :depends on bioconductor-polyphen.hsapiens.dbsnp131: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-sift.hsapiens.dbsnp137: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-snplocs.hsapiens.dbsnp144.grch37: ``>=0.99.0,<0.100.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends on bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37: ``>=0.99.0,<0.100.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-dt: 
   :depends on r-openxlsx: 
   :depends on r-rentrez: 
   :depends on r-rsnps: 
   :depends on r-seqinr: 
   :depends on r-shiny: 
   :depends on r-shinyjs: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-appreci8r

to add into an existing workspace instead, run::

    pixi add bioconductor-appreci8r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-appreci8r

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-appreci8r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-appreci8r:<tag>

(see `bioconductor-appreci8r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-appreci8r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-appreci8r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-appreci8r
   :alt:   (downloads)
.. |docker_bioconductor-appreci8r| image:: https://quay.io/repository/biocontainers/bioconductor-appreci8r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-appreci8r
.. _`bioconductor-appreci8r/tags`: https://quay.io/repository/biocontainers/bioconductor-appreci8r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-appreci8r";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-appreci8r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-appreci8r/README.html