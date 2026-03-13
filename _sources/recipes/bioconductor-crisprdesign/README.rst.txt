:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprdesign'
.. highlight: bash

bioconductor-crisprdesign
=========================

.. conda:recipe:: bioconductor-crisprdesign
   :replaces_section_title:
   :noindex:

   Comprehensive design of CRISPR gRNAs for nucleases and base editors

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprDesign.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprdesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprdesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprdesign/meta.yaml>`_

   Provides a comprehensive suite of functions to design and annotate CRISPR guide RNA \(gRNAs\) sequences. This includes on\- and off\-target search\, on\-target efficiency scoring\, off\-target scoring\, full gene and TSS contextual annotations\, and SNP annotation \(human only\). It currently support five types of CRISPR modalities \(modes of perturbations\)\: CRISPR knockout\, CRISPR activation\, CRISPR inhibition\, CRISPR base editing\, and CRISPR knockdown. All types of CRISPR nucleases are supported\, including DNA\- and RNA\-target nucleases such as Cas9\, Cas12a\, and Cas13d. All types of base editors are also supported. gRNA design can be performed on reference genomes\, transcriptomes\, and custom DNA and RNA sequences. Both unpaired and paired gRNA designs are enabled.


.. conda:package:: bioconductor-crisprdesign

   |downloads_bioconductor-crisprdesign| |docker_bioconductor-crisprdesign|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-crisprbase: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-crisprbowtie: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-crisprscore: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-crisprdesign

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprdesign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprdesign

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprdesign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprdesign:<tag>

(see `bioconductor-crisprdesign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprdesign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprdesign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprdesign
   :alt:   (downloads)
.. |docker_bioconductor-crisprdesign| image:: https://quay.io/repository/biocontainers/bioconductor-crisprdesign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprdesign
.. _`bioconductor-crisprdesign/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprdesign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprdesign";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprdesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprdesign/README.html