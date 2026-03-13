:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edger'
.. highlight: bash

bioconductor-edger
==================

.. conda:recipe:: bioconductor-edger
   :replaces_section_title:
   :noindex:

   Empirical Analysis of Digital Gene Expression Data in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/edgeR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-edger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edger/meta.yaml>`_
   :links: biotools: :biotools:`edger`, usegalaxy-eu: :usegalaxy-eu:`edger`

   Differential expression analysis of RNA\-seq expression profiles with biological replication. Implements a range of statistical methodology based on the negative binomial distributions\, including empirical Bayes estimation\, exact tests\, generalized linear models and quasi\-likelihood tests. As well as RNA\-seq\, it be applied to differential signal analysis of other types of genomic data that produce read counts\, including ChIP\-seq\, ATAC\-seq\, Bisulfite\-seq\, SAGE and CAGE.


.. conda:package:: bioconductor-edger

   |downloads_bioconductor-edger| |docker_bioconductor-edger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.8.2-0</code>,  <code>4.4.0-0</code>,  <code>4.0.16-1</code>,  <code>4.0.2-0</code>,  <code>3.42.4-0</code>,  <code>3.40.0-1</code>,  <code>3.40.0-0</code>,  <code>3.36.0-2</code>,  <code>3.36.0-1</code>,  </span></summary>
      

      ``4.8.2-0``,  ``4.4.0-0``,  ``4.0.16-1``,  ``4.0.2-0``,  ``3.42.4-0``,  ``3.40.0-1``,  ``3.40.0-0``,  ``3.36.0-2``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.1-0``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-1``,  ``3.28.0-0``,  ``3.26.5-0``,  ``3.26.0-0``,  ``3.24.3-0``,  ``3.24.1-0``,  ``3.22.5-0``,  ``3.20.7-0``,  ``3.20.1-0``,  ``3.20.0-0``,  ``3.18.1-0``,  ``3.16.5-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.1-1``,  ``3.12.1-0``,  ``3.12.0-0``,  ``3.10.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-locfit: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-edger

to add into an existing workspace instead, run::

    pixi add bioconductor-edger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-edger

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-edger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-edger:<tag>

(see `bioconductor-edger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-edger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edger
   :alt:   (downloads)
.. |docker_bioconductor-edger| image:: https://quay.io/repository/biocontainers/bioconductor-edger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edger
.. _`bioconductor-edger/tags`: https://quay.io/repository/biocontainers/bioconductor-edger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edger";
        var versions = ["4.8.2","4.4.0","4.0.16","4.0.2","3.42.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edger/README.html