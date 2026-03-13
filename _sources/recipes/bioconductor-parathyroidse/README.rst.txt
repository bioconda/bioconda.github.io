:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-parathyroidse'
.. highlight: bash

bioconductor-parathyroidse
==========================

.. conda:recipe:: bioconductor-parathyroidse
   :replaces_section_title:
   :noindex:

   RangedSummarizedExperiment for RNA\-Seq of primary cultures of parathyroid tumors by Haglund et al.\, J Clin Endocrinol Metab 2012.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/parathyroidSE.html
   :license: LGPL
   :recipe: /`bioconductor-parathyroidse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parathyroidse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parathyroidse/meta.yaml>`_

   This package provides RangedSummarizedExperiment objects of read counts in genes and exonic parts for paired\-end RNA\-Seq data from experiments on primary cultures of parathyroid tumors.  The data were presented in the article \"Evidence of a Functional Estrogen Receptor in Parathyroid Adenomas\" by Haglund F\, Ma R\, Huss M\, Sulaiman L\, Lu M\, Nilsson IL\, Hoog A\, Juhlin CC\, Hartman J\, Larsson C\, J Clin Endocrinol Metab. jc.2012\-2484\, Epub 2012 Sep 28\, PMID\: 23024189.  The sequencing was performed on tumor cultures from 4 patients at 2 time points over 3 conditions \(DPN\, OHT and control\).  One control sample was omitted by the paper authors due to low quality. The package vignette describes the creation of the object from raw sequencing data provided by NCBI Gene Expression Omnibus under accession number GSE37211.  The gene and exon features are the GRCh37 Ensembl annotations.


.. conda:package:: bioconductor-parathyroidse

   |downloads_bioconductor-parathyroidse| |docker_bioconductor-parathyroidse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-parathyroidse

to add into an existing workspace instead, run::

    pixi add bioconductor-parathyroidse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-parathyroidse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-parathyroidse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-parathyroidse:<tag>

(see `bioconductor-parathyroidse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-parathyroidse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-parathyroidse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-parathyroidse
   :alt:   (downloads)
.. |docker_bioconductor-parathyroidse| image:: https://quay.io/repository/biocontainers/bioconductor-parathyroidse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-parathyroidse
.. _`bioconductor-parathyroidse/tags`: https://quay.io/repository/biocontainers/bioconductor-parathyroidse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-parathyroidse";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html