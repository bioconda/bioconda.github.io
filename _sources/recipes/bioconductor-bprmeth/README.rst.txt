:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bprmeth'
.. highlight: bash

bioconductor-bprmeth
====================

.. conda:recipe:: bioconductor-bprmeth
   :replaces_section_title:
   :noindex:

   Model higher\-order methylation profiles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BPRMeth.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-bprmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bprmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bprmeth/meta.yaml>`_

   The BPRMeth package is a probabilistic method to quantify explicit features of methylation profiles\, in a way that would make it easier to formally use such profiles in downstream modelling efforts\, such as predicting gene expression levels or clustering genomic regions or cells according to their methylation profiles.


.. conda:package:: bioconductor-bprmeth

   |downloads_bioconductor-bprmeth| |docker_bioconductor-bprmeth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.1-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-e1071: 
   :depends on r-earth: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-kernlab: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrixcalc: 
   :depends on r-mvtnorm: 
   :depends on r-randomforest: 
   :depends on r-rcpp: ``>=0.12.14``
   :depends on r-rcpparmadillo: 
   :depends on r-truncnorm: 

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

    pixi global install bioconductor-bprmeth

to add into an existing workspace instead, run::

    pixi add bioconductor-bprmeth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bprmeth

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bprmeth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bprmeth:<tag>

(see `bioconductor-bprmeth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bprmeth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bprmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bprmeth
   :alt:   (downloads)
.. |docker_bioconductor-bprmeth| image:: https://quay.io/repository/biocontainers/bioconductor-bprmeth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bprmeth
.. _`bioconductor-bprmeth/tags`: https://quay.io/repository/biocontainers/bioconductor-bprmeth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bprmeth";
        var versions = ["1.32.0","1.28.0","1.26.1","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bprmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bprmeth/README.html