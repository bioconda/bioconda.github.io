:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rpx'
.. highlight: bash

bioconductor-rpx
================

.. conda:recipe:: bioconductor-rpx
   :replaces_section_title:
   :noindex:

   R Interface to the ProteomeXchange Repository

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rpx.html
   :license: GPL-2
   :recipe: /`bioconductor-rpx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpx/meta.yaml>`_
   :links: biotools: :biotools:`rpx`, doi: :doi:`10.1038/nbt.2839`

   The rpx package implements an interface to proteomics data submitted to the ProteomeXchange consortium.


.. conda:package:: bioconductor-rpx

   |downloads_bioconductor-rpx| |docker_bioconductor-rpx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.1.12-0</code>,  <code>2.0.0-0</code>,  <code>1.26.2-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.1.12-0``,  ``2.0.0-0``,  ``1.26.2-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-jsonlite: 
   :depends on r-rcurl: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-rpx

to add into an existing workspace instead, run::

    pixi add bioconductor-rpx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rpx

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rpx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rpx:<tag>

(see `bioconductor-rpx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rpx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rpx
   :alt:   (downloads)
.. |docker_bioconductor-rpx| image:: https://quay.io/repository/biocontainers/bioconductor-rpx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpx
.. _`bioconductor-rpx/tags`: https://quay.io/repository/biocontainers/bioconductor-rpx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rpx";
        var versions = ["2.18.0","2.14.0","2.10.0","2.8.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpx/README.html