:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-schex'
.. highlight: bash

bioconductor-schex
==================

.. conda:recipe:: bioconductor-schex
   :replaces_section_title:
   :noindex:

   Hexbin plots for single cell omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/schex.html
   :license: GPL-3
   :recipe: /`bioconductor-schex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schex/meta.yaml>`_

   Builds hexbin plots for variables and dimension reduction stored in single cell omics data such as SingleCellExperiment. The ideas used in this package are based on the excellent work of Dan Carr\, Nicholas Lewin\-Koh\, Martin Maechler and Thomas Lumley.


.. conda:package:: bioconductor-schex

   |downloads_bioconductor-schex| |docker_bioconductor-schex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-concaveman: 
   :depends on r-dplyr: 
   :depends on r-entropy: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: ``>=3.2.1``
   :depends on r-hexbin: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-schex

to add into an existing workspace instead, run::

    pixi add bioconductor-schex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-schex

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-schex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-schex:<tag>

(see `bioconductor-schex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-schex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-schex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-schex
   :alt:   (downloads)
.. |docker_bioconductor-schex| image:: https://quay.io/repository/biocontainers/bioconductor-schex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-schex
.. _`bioconductor-schex/tags`: https://quay.io/repository/biocontainers/bioconductor-schex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-schex";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-schex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-schex/README.html