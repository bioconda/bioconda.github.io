:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmcfb'
.. highlight: bash

bioconductor-dmcfb
==================

.. conda:recipe:: bioconductor-dmcfb
   :replaces_section_title:
   :noindex:

   Differentially Methylated Cytosines via a Bayesian Functional Approach

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DMCFB.html
   :license: GPL-3
   :recipe: /`bioconductor-dmcfb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmcfb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmcfb/meta.yaml>`_

   DMCFB is a pipeline for identifying differentially methylated cytosines using a Bayesian functional regression model in bisulfite sequencing data. By using a functional regression data model\, it tries to capture position\-specific\, group\-specific and other covariates\-specific methylation patterns as well as spatial correlation patterns and unknown underlying models of methylation data. It is robust and flexible with respect to the true underlying models and inclusion of any covariates\, and the missing values are imputed using spatial correlation between positions and samples. A Bayesian approach is adopted for estimation and inference in the proposed method.


.. conda:package:: bioconductor-dmcfb

   |downloads_bioconductor-dmcfb| |docker_bioconductor-dmcfb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-arm: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-benchmarkme: 
   :depends on r-data.table: 
   :depends on r-fastdummies: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-speedglm: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-dmcfb

to add into an existing workspace instead, run::

    pixi add bioconductor-dmcfb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dmcfb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dmcfb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dmcfb:<tag>

(see `bioconductor-dmcfb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dmcfb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmcfb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmcfb
   :alt:   (downloads)
.. |docker_bioconductor-dmcfb| image:: https://quay.io/repository/biocontainers/bioconductor-dmcfb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmcfb
.. _`bioconductor-dmcfb/tags`: https://quay.io/repository/biocontainers/bioconductor-dmcfb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmcfb";
        var versions = ["1.24.0","1.20.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmcfb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmcfb/README.html