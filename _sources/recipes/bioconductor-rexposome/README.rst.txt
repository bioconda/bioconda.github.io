:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rexposome'
.. highlight: bash

bioconductor-rexposome
======================

.. conda:recipe:: bioconductor-rexposome
   :replaces_section_title:
   :noindex:

   Exposome exploration and outcome data analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome/meta.yaml>`_

   Package that allows to explore the exposome and to perform association analyses between exposures and health outcomes.


.. conda:package:: bioconductor-rexposome

   |downloads_bioconductor-rexposome| |docker_bioconductor-rexposome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.4-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.4-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-corrplot: 
   :depends on r-factominer: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggridges: 
   :depends on r-glmnet: 
   :depends on r-gplots: 
   :depends on r-gridextra: 
   :depends on r-gtools: 
   :depends on r-hmisc: 
   :depends on r-imputelcmd: 
   :depends on r-lme4: 
   :depends on r-lsr: 
   :depends on r-mice: 
   :depends on r-pryr: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-scatterplot3d: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-rexposome

to add into an existing workspace instead, run::

    pixi add bioconductor-rexposome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rexposome

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rexposome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rexposome:<tag>

(see `bioconductor-rexposome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rexposome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rexposome
   :alt:   (downloads)
.. |docker_bioconductor-rexposome| image:: https://quay.io/repository/biocontainers/bioconductor-rexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rexposome
.. _`bioconductor-rexposome/tags`: https://quay.io/repository/biocontainers/bioconductor-rexposome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rexposome";
        var versions = ["1.32.0","1.28.0","1.24.1","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rexposome/README.html