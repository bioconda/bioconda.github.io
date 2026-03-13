:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcanr'
.. highlight: bash

bioconductor-dcanr
==================

.. conda:recipe:: bioconductor-dcanr
   :replaces_section_title:
   :noindex:

   Differential co\-expression\/association network analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dcanr.html
   :license: GPL-3
   :recipe: /`bioconductor-dcanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcanr/meta.yaml>`_

   This package implements methods and an evaluation framework to infer differential co\-expression\/association networks. Various methods are implemented and can be evaluated using simulated datasets. Inference of differential co\-expression networks can allow identification of networks that are altered between two conditions \(e.g.\, health and disease\).


.. conda:package:: bioconductor-dcanr

   |downloads_bioconductor-dcanr| |docker_bioconductor-dcanr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dorng: 
   :depends on r-foreach: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
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

    pixi global install bioconductor-dcanr

to add into an existing workspace instead, run::

    pixi add bioconductor-dcanr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dcanr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dcanr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dcanr:<tag>

(see `bioconductor-dcanr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dcanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcanr
   :alt:   (downloads)
.. |docker_bioconductor-dcanr| image:: https://quay.io/repository/biocontainers/bioconductor-dcanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcanr
.. _`bioconductor-dcanr/tags`: https://quay.io/repository/biocontainers/bioconductor-dcanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dcanr";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcanr/README.html