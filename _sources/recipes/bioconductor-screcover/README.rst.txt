:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screcover'
.. highlight: bash

bioconductor-screcover
======================

.. conda:recipe:: bioconductor-screcover
   :replaces_section_title:
   :noindex:

   scRecover for imputation of single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scRecover.html
   :license: GPL
   :recipe: /`bioconductor-screcover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screcover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screcover/meta.yaml>`_

   scRecover is an R package for imputation of single\-cell RNA\-seq \(scRNA\-seq\) data. It will detect and impute dropout values in a scRNA\-seq raw read counts matrix while keeping the real zeros unchanged\, since there are both dropout zeros and real zeros in scRNA\-seq data. By combination with scImpute\, SAVER and MAGIC\, scRecover not only detects dropout and real zeros at higher accuracy\, but also improve the downstream clustering and visualization results.


.. conda:package:: bioconductor-screcover

   |downloads_bioconductor-screcover| |docker_bioconductor-screcover|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bbmle: ``>=1.0.18``
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-gamlss: ``>=4.4-0``
   :depends on r-kernlab: 
   :depends on r-mass: ``>=7.3-45``
   :depends on r-matrix: ``>=1.2-14``
   :depends on r-penalized: 
   :depends on r-preseqr: ``>=4.0.0``
   :depends on r-pscl: ``>=1.4.9``
   :depends on r-rsvd: 
   :depends on r-saver: ``>=1.1.1``

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

    pixi global install bioconductor-screcover

to add into an existing workspace instead, run::

    pixi add bioconductor-screcover

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-screcover

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-screcover

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-screcover:<tag>

(see `bioconductor-screcover/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-screcover| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screcover.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screcover
   :alt:   (downloads)
.. |docker_bioconductor-screcover| image:: https://quay.io/repository/biocontainers/bioconductor-screcover/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screcover
.. _`bioconductor-screcover/tags`: https://quay.io/repository/biocontainers/bioconductor-screcover?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screcover";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screcover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screcover/README.html