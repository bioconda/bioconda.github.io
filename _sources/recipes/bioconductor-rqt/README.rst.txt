:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rqt'
.. highlight: bash

bioconductor-rqt
================

.. conda:recipe:: bioconductor-rqt
   :replaces_section_title:
   :noindex:

   rqt\: utilities for gene\-level meta\-analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rqt.html
   :license: GPL
   :recipe: /`bioconductor-rqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqt/meta.yaml>`_

   Despite the recent advances of modern GWAS methods\, it still remains an important problem of addressing calculation an effect size and corresponding p\-value for the whole gene rather than for single variant. The R\- package rqt offers gene\-level GWAS meta\-analysis. For more information\, see\: \"Gene\-set association tests for next\-generation sequencing data\" by Lee et al \(2016\)\, Bioinformatics\, 32\(17\)\, i611\-i619\, \<doi\:10.1093\/bioinformatics\/btw429\>.


.. conda:package:: bioconductor-rqt

   |downloads_bioconductor-rqt| |docker_bioconductor-rqt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ropls: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-car: 
   :depends on r-compquadform: 
   :depends on r-glmnet: 
   :depends on r-matrix: 
   :depends on r-metap: 
   :depends on r-pls: 
   :depends on r-runit: 

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

    pixi global install bioconductor-rqt

to add into an existing workspace instead, run::

    pixi add bioconductor-rqt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rqt

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rqt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rqt:<tag>

(see `bioconductor-rqt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rqt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rqt
   :alt:   (downloads)
.. |docker_bioconductor-rqt| image:: https://quay.io/repository/biocontainers/bioconductor-rqt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqt
.. _`bioconductor-rqt/tags`: https://quay.io/repository/biocontainers/bioconductor-rqt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rqt";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqt/README.html