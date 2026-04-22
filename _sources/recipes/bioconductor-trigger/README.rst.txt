:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trigger'
.. highlight: bash

bioconductor-trigger
====================

.. conda:recipe:: bioconductor-trigger
   :replaces_section_title:
   :noindex:

   Transcriptional Regulatory Inference from Genetics of Gene ExpRession

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/trigger.html
   :license: GPL-3
   :recipe: /`bioconductor-trigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trigger/meta.yaml>`_
   :links: biotools: :biotools:`trigger`, doi: :doi:`10.1038/nmeth.3252`

   This R package provides tools for the statistical analysis of integrative genomic data that involve some combination of\: genotypes\, high\-dimensional intermediate traits \(e.g.\, gene expression\, protein abundance\)\, and higher\-order traits \(phenotypes\). The package includes functions to\: \(1\) construct global linkage maps between genetic markers and gene expression\; \(2\) analyze multiple\-locus linkage \(epistasis\) for gene expression\; \(3\) quantify the proportion of genome\-wide variation explained by each locus and identify eQTL hotspots\; \(4\) estimate pair\-wise causal gene regulatory probabilities and construct gene regulatory networks\; and \(5\) identify causal genes for a quantitative trait of interest.


.. conda:package:: bioconductor-trigger

   |downloads_bioconductor-trigger| |docker_bioconductor-trigger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends on bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends on bioconductor-sva: ``>=3.54.0,<3.55.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-corpcor: 
   :depends on r-qtl: 

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

    pixi global install bioconductor-trigger

to add into an existing workspace instead, run::

    pixi add bioconductor-trigger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-trigger

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-trigger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-trigger:<tag>

(see `bioconductor-trigger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-trigger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trigger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trigger
   :alt:   (downloads)
.. |docker_bioconductor-trigger| image:: https://quay.io/repository/biocontainers/bioconductor-trigger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trigger
.. _`bioconductor-trigger/tags`: https://quay.io/repository/biocontainers/bioconductor-trigger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trigger";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trigger/README.html