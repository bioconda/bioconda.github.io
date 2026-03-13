:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gigsea'
.. highlight: bash

bioconductor-gigsea
===================

.. conda:recipe:: bioconductor-gigsea
   :replaces_section_title:
   :noindex:

   Genotype Imputed Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GIGSEA.html
   :license: LGPL-3
   :recipe: /`bioconductor-gigsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigsea/meta.yaml>`_

   We presented the Genotype\-imputed Gene Set Enrichment Analysis \(GIGSEA\)\, a novel method that uses GWAS\-and\-eQTL\-imputed trait\-associated differential gene expression to interrogate gene set enrichment for the trait\-associated SNPs. By incorporating eQTL from large gene expression studies\, e.g. GTEx\, GIGSEA appropriately addresses such challenges for SNP enrichment as gene size\, gene boundary\, SNP distal regulation\, and multiple\-marker regulation. The weighted linear regression model\, taking as weights both imputation accuracy and model completeness\, was used to perform the enrichment test\, properly adjusting the bias due to redundancy in different gene sets. The permutation test\, furthermore\, is used to evaluate the significance of enrichment\, whose efficiency can be largely elevated by expressing the computational intensive part in terms of large matrix operation. We have shown the appropriate type I error rates for GIGSEA \(\<5\%\)\, and the preliminary results also demonstrate its good performance to uncover the real signal.


.. conda:package:: bioconductor-gigsea

   |downloads_bioconductor-gigsea| |docker_bioconductor-gigsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-locfdr: 
   :depends on r-mass: 
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

    pixi global install bioconductor-gigsea

to add into an existing workspace instead, run::

    pixi add bioconductor-gigsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gigsea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gigsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gigsea:<tag>

(see `bioconductor-gigsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gigsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gigsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gigsea
   :alt:   (downloads)
.. |docker_bioconductor-gigsea| image:: https://quay.io/repository/biocontainers/bioconductor-gigsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gigsea
.. _`bioconductor-gigsea/tags`: https://quay.io/repository/biocontainers/bioconductor-gigsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gigsea";
        var versions = ["1.28.0","1.24.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gigsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gigsea/README.html