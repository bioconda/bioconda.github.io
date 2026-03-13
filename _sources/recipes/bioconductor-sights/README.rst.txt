:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sights'
.. highlight: bash

bioconductor-sights
===================

.. conda:recipe:: bioconductor-sights
   :replaces_section_title:
   :noindex:

   Statistics and dIagnostic Graphs for HTS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sights.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-sights <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sights>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sights/meta.yaml>`_
   :links: biotools: :biotools:`sights`, doi: :doi:`10.1177/1087057114548853`

   SIGHTS is a suite of normalization methods\, statistical tests\, and diagnostic graphical tools for high throughput screening \(HTS\) assays. HTS assays use microtitre plates to screen large libraries of compounds for their biological\, chemical\, or biochemical activity.


.. conda:package:: bioconductor-sights

   |downloads_bioconductor-sights| |docker_bioconductor-sights|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=2.0``
   :depends on r-lattice: ``>=0.2``
   :depends on r-mass: ``>=7.3``
   :depends on r-reshape2: ``>=1.4``

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

    pixi global install bioconductor-sights

to add into an existing workspace instead, run::

    pixi add bioconductor-sights

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sights

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sights

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sights:<tag>

(see `bioconductor-sights/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sights| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sights.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sights
   :alt:   (downloads)
.. |docker_bioconductor-sights| image:: https://quay.io/repository/biocontainers/bioconductor-sights/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sights
.. _`bioconductor-sights/tags`: https://quay.io/repository/biocontainers/bioconductor-sights?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sights";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sights/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sights/README.html