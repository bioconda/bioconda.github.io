:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-evaluomer'
.. highlight: bash

bioconductor-evaluomer
======================

.. conda:recipe:: bioconductor-evaluomer
   :replaces_section_title:
   :noindex:

   Evaluation of Bioinformatics Metrics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/evaluomeR.html
   :license: GPL-3
   :recipe: /`bioconductor-evaluomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-evaluomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-evaluomer/meta.yaml>`_

   Evaluating the reliability of your own metrics and the measurements done on your own datasets by analysing the stability and goodness of the classifications of such metrics.


.. conda:package:: bioconductor-evaluomer

   |downloads_bioconductor-evaluomer| |docker_bioconductor-evaluomer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.5-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.5-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-class: 
   :depends on r-cluster: ``>=2.0.9``
   :depends on r-corrplot: ``>=0.84``
   :depends on r-flexmix: ``>=2.3.15``
   :depends on r-fpc: ``>=2.2-3``
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-kableextra: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-mclust: 
   :depends on r-plotrix: 
   :depends on r-prabclus: 
   :depends on r-randomforest: ``>=4.6.14``
   :depends on r-rdpack: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-evaluomer

to add into an existing workspace instead, run::

    pixi add bioconductor-evaluomer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-evaluomer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-evaluomer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-evaluomer:<tag>

(see `bioconductor-evaluomer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-evaluomer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-evaluomer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-evaluomer
   :alt:   (downloads)
.. |docker_bioconductor-evaluomer| image:: https://quay.io/repository/biocontainers/bioconductor-evaluomer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-evaluomer
.. _`bioconductor-evaluomer/tags`: https://quay.io/repository/biocontainers/bioconductor-evaluomer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-evaluomer";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-evaluomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-evaluomer/README.html