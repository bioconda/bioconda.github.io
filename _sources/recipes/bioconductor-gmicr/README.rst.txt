:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmicr'
.. highlight: bash

bioconductor-gmicr
==================

.. conda:recipe:: bioconductor-gmicr
   :replaces_section_title:
   :noindex:

   Combines WGCNA and xCell readouts with bayesian network learrning to generate a Gene\-Module Immune\-Cell network \(GMIC\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GmicR.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-gmicr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmicr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmicr/meta.yaml>`_

   This package uses bayesian network learning to detect relationships between Gene Modules detected by WGCNA and immune cell signatures defined by xCell. It is a hypothesis generating tool.


.. conda:package:: bioconductor-gmicr

   |downloads_bioconductor-gmicr| |docker_bioconductor-gmicr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-category: ``>=2.76.0,<2.77.0``
   :depends on bioconductor-gostats: ``>=2.76.0,<2.77.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bnlearn: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dt: 
   :depends on r-foreach: 
   :depends on r-grain: 
   :depends on r-grbase: 
   :depends on r-reshape2: 
   :depends on r-shiny: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-gmicr

to add into an existing workspace instead, run::

    pixi add bioconductor-gmicr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gmicr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gmicr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gmicr:<tag>

(see `bioconductor-gmicr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gmicr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmicr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmicr
   :alt:   (downloads)
.. |docker_bioconductor-gmicr| image:: https://quay.io/repository/biocontainers/bioconductor-gmicr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmicr
.. _`bioconductor-gmicr/tags`: https://quay.io/repository/biocontainers/bioconductor-gmicr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gmicr";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmicr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmicr/README.html