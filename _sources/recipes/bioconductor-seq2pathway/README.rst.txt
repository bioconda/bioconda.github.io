:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seq2pathway'
.. highlight: bash

bioconductor-seq2pathway
========================

.. conda:recipe:: bioconductor-seq2pathway
   :replaces_section_title:
   :noindex:

   a novel tool for functional gene\-set \(or termed as pathway\) analysis of next\-generation sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/seq2pathway.html
   :license: GPL-2
   :recipe: /`bioconductor-seq2pathway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway/meta.yaml>`_
   :links: biotools: :biotools:`seq2pathway`

   Seq2pathway is a novel tool for functional gene\-set \(or termed as pathway\) analysis of next\-generation sequencing data\, consisting of \"seq2gene\" and \"gene2path\" components. The seq2gene links sequence\-level measurements of genomic regions \(including SNPs or point mutation coordinates\) to gene\-level scores\, and the gene2pathway summarizes gene scores to pathway\-scores for each sample. The seq2gene has the feasibility to assign both coding and non\-exon regions to a broader range of neighboring genes than only the nearest one\, thus facilitating the study of functional non\-coding regions. The gene2pathway takes into account the quantity of significance for gene members within a pathway compared those outside a pathway. The output of seq2pathway is a general structure of quantitative pathway\-level scores\, thus allowing one to functional interpret such datasets as RNA\-seq\, ChIP\-seq\, GWAS\, and derived from other next generational sequencing experiments.


.. conda:package:: bioconductor-seq2pathway

   |downloads_bioconductor-seq2pathway| |docker_bioconductor-seq2pathway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-seq2pathway.data: ``>=1.34.0,<1.35.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-gsa: 
   :depends on r-nnet: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-seq2pathway

to add into an existing workspace instead, run::

    pixi add bioconductor-seq2pathway

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seq2pathway

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seq2pathway

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seq2pathway:<tag>

(see `bioconductor-seq2pathway/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seq2pathway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seq2pathway.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seq2pathway
   :alt:   (downloads)
.. |docker_bioconductor-seq2pathway| image:: https://quay.io/repository/biocontainers/bioconductor-seq2pathway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seq2pathway
.. _`bioconductor-seq2pathway/tags`: https://quay.io/repository/biocontainers/bioconductor-seq2pathway?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seq2pathway";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seq2pathway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seq2pathway/README.html