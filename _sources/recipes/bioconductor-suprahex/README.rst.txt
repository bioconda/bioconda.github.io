:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-suprahex'
.. highlight: bash

bioconductor-suprahex
=====================

.. conda:recipe:: bioconductor-suprahex
   :replaces_section_title:
   :noindex:

   supraHex\: a supra\-hexagonal map for analysing tabular omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/supraHex.html
   :license: GPL-2
   :recipe: /`bioconductor-suprahex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suprahex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suprahex/meta.yaml>`_
   :links: biotools: :biotools:`suprahex`

   A supra\-hexagonal map is a giant hexagon on a 2\-dimensional grid seamlessly consisting of smaller hexagons. It is supposed to train\, analyse and visualise a high\-dimensional omics input data. The supraHex is able to carry out gene clustering\/meta\-clustering and sample correlation\, plus intuitive visualisations to facilitate exploratory analysis. More importantly\, it allows for overlaying additional data onto the trained map to explore relations between input and additional data. So with supraHex\, it is also possible to carry out multilayer omics data comparisons. Newly added utilities are advanced heatmap visualisation and tree\-based analysis of sample relationships. Uniquely to this package\, users can ultrafastly understand any tabular omics data\, both scientifically and artistically\, especially in a sample\-specific fashion but without loss of information on large genes.


.. conda:package:: bioconductor-suprahex

   |downloads_bioconductor-suprahex| |docker_bioconductor-suprahex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-ape: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: 
   :depends on r-hexbin: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-suprahex

to add into an existing workspace instead, run::

    pixi add bioconductor-suprahex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-suprahex

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-suprahex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-suprahex:<tag>

(see `bioconductor-suprahex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-suprahex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-suprahex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-suprahex
   :alt:   (downloads)
.. |docker_bioconductor-suprahex| image:: https://quay.io/repository/biocontainers/bioconductor-suprahex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-suprahex
.. _`bioconductor-suprahex/tags`: https://quay.io/repository/biocontainers/bioconductor-suprahex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-suprahex";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-suprahex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-suprahex/README.html