:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-herper'
.. highlight: bash

bioconductor-herper
===================

.. conda:recipe:: bioconductor-herper
   :replaces_section_title:
   :noindex:

   The Herper package is a simple toolset to install and manage conda packages and environments from R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Herper.html
   :license: GPL-3
   :recipe: /`bioconductor-herper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-herper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-herper/meta.yaml>`_

   Many tools for data analysis are not available in R\, but are present in public repositories like conda. The Herper package provides a comprehensive set of functions to interact with the conda package managament system. With Herper users can install\, manage and run conda packages from the comfort of their R session. Herper also provides an ad\-hoc approach to handling external system requirements for R packages. For people developing packages with python conda dependencies we recommend using basilisk \(https\:\/\/bioconductor.org\/packages\/release\/bioc\/html\/basilisk.html\) to internally support these system requirments pre\-hoc.


.. conda:package:: bioconductor-herper

   |downloads_bioconductor-herper| |docker_bioconductor-herper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.7.2-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.7.2-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.2-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-reticulate: 
   :depends on r-rjson: 
   :depends on r-withr: 

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

    pixi global install bioconductor-herper

to add into an existing workspace instead, run::

    pixi add bioconductor-herper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-herper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-herper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-herper:<tag>

(see `bioconductor-herper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-herper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-herper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-herper
   :alt:   (downloads)
.. |docker_bioconductor-herper| image:: https://quay.io/repository/biocontainers/bioconductor-herper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-herper
.. _`bioconductor-herper/tags`: https://quay.io/repository/biocontainers/bioconductor-herper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-herper";
        var versions = ["1.20.0","1.16.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-herper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-herper/README.html