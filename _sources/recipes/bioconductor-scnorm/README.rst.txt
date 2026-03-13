:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scnorm'
.. highlight: bash

bioconductor-scnorm
===================

.. conda:recipe:: bioconductor-scnorm
   :replaces_section_title:
   :noindex:

   Normalization of single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SCnorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm/meta.yaml>`_

   This package implements SCnorm — a method to normalize single\-cell RNA\-seq data.


.. conda:package:: bioconductor-scnorm

   |downloads_bioconductor-scnorm| |docker_bioconductor-scnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.3-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-moments: 
   :depends on r-quantreg: 

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

    pixi global install bioconductor-scnorm

to add into an existing workspace instead, run::

    pixi add bioconductor-scnorm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scnorm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scnorm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scnorm:<tag>

(see `bioconductor-scnorm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scnorm
   :alt:   (downloads)
.. |docker_bioconductor-scnorm| image:: https://quay.io/repository/biocontainers/bioconductor-scnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scnorm
.. _`bioconductor-scnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-scnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scnorm";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scnorm/README.html