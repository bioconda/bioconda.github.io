:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metacyto'
.. highlight: bash

bioconductor-metacyto
=====================

.. conda:recipe:: bioconductor-metacyto
   :replaces_section_title:
   :noindex:

   MetaCyto\: A package for meta\-analysis of cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetaCyto.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metacyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metacyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metacyto/meta.yaml>`_

   This package provides functions for preprocessing\, automated gating and meta\-analysis of cytometry data. It also provides functions that facilitate the collection of cytometry data from the ImmPort database.


.. conda:package:: bioconductor-metacyto

   |downloads_bioconductor-metacyto| |docker_bioconductor-metacyto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowsom: ``>=2.18.0,<2.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-fastcluster: 
   :depends on r-ggplot2: 
   :depends on r-metafor: 
   :depends on r-tidyr: ``>=0.7``

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

    pixi global install bioconductor-metacyto

to add into an existing workspace instead, run::

    pixi add bioconductor-metacyto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metacyto

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metacyto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metacyto:<tag>

(see `bioconductor-metacyto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metacyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metacyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metacyto
   :alt:   (downloads)
.. |docker_bioconductor-metacyto| image:: https://quay.io/repository/biocontainers/bioconductor-metacyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metacyto
.. _`bioconductor-metacyto/tags`: https://quay.io/repository/biocontainers/bioconductor-metacyto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metacyto";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metacyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metacyto/README.html