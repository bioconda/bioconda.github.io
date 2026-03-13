:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tscr'
.. highlight: bash

bioconductor-tscr
=================

.. conda:recipe:: bioconductor-tscr
   :replaces_section_title:
   :noindex:

   A time series clustering package combining slope and Frechet distances

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tscR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tscr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr/meta.yaml>`_

   Clustering for time series data using slope distance and\/or shape distance.


.. conda:package:: bioconductor-tscr

   |downloads_bioconductor-tscr| |docker_bioconductor-tscr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.11.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-class: 
   :depends on r-cluster: 
   :depends on r-dplyr: 
   :depends on r-dtw: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-kmlshape: 
   :depends on r-knitr: 
   :depends on r-latex2exp: 
   :depends on r-prettydoc: 
   :depends on r-rcolorbrewer: 
   :depends on r-rmarkdown: 

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

    pixi global install bioconductor-tscr

to add into an existing workspace instead, run::

    pixi add bioconductor-tscr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tscr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tscr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tscr:<tag>

(see `bioconductor-tscr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tscr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tscr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tscr
   :alt:   (downloads)
.. |docker_bioconductor-tscr| image:: https://quay.io/repository/biocontainers/bioconductor-tscr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tscr
.. _`bioconductor-tscr/tags`: https://quay.io/repository/biocontainers/bioconductor-tscr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tscr";
        var versions = ["1.11.0","1.10.0","1.10.0","1.6.1","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tscr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tscr/README.html