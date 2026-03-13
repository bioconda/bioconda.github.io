:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rarevariantvis'
.. highlight: bash

bioconductor-rarevariantvis
===========================

.. conda:recipe:: bioconductor-rarevariantvis
   :replaces_section_title:
   :noindex:

   A suite for analysis of rare genomic variants in whole genome sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RareVariantVis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rarevariantvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis/meta.yaml>`_
   :links: biotools: :biotools:`rarevariantvis`, doi: :doi:`10.1093/bioinformatics/btw359`

   Second version of RareVariantVis package aims to provide comprehensive information about rare variants for your genome data. It annotates\, filters and presents genomic variants \(especially rare ones\) in a global\, per chromosome way. For discovered rare variants CRISPR guide RNAs are designed\, so the user can plan further functional studies. Large structural variants\, including copy number variants are also supported. Package accepts variants directly from variant caller \- for example GATK or Speedseq. Output of package are lists of variants together with adequate visualization. Visualization of variants is performed in two ways \- standard that outputs png figures and interactive that uses JavaScript d3 package. Interactive visualization allows to analyze trio\/family data\, for example in search for causative variants in rare Mendelian diseases\, in point\-and\-click interface. The package includes homozygous region caller and allows to analyse whole human genomes in less than 30 minutes on a desktop computer. RareVariantVis disclosed novel causes of several rare monogenic disorders\, including one with non\-coding causative variant \- keratolythic winter erythema.


.. conda:package:: bioconductor-rarevariantvis

   |downloads_bioconductor-rarevariantvis| |docker_bioconductor-rarevariantvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicscores: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-phastcons100way.ucsc.hg19: ``>=3.7.0,<3.8.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-googlevis: 
   :depends on r-gtools: 

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

    pixi global install bioconductor-rarevariantvis

to add into an existing workspace instead, run::

    pixi add bioconductor-rarevariantvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rarevariantvis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rarevariantvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rarevariantvis:<tag>

(see `bioconductor-rarevariantvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rarevariantvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rarevariantvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rarevariantvis
   :alt:   (downloads)
.. |docker_bioconductor-rarevariantvis| image:: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis
.. _`bioconductor-rarevariantvis/tags`: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rarevariantvis";
        var versions = ["2.38.0","2.30.0","2.28.0","2.26.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html