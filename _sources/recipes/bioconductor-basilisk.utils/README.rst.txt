:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basilisk.utils'
.. highlight: bash

bioconductor-basilisk.utils
===========================

.. conda:recipe:: bioconductor-basilisk.utils
   :replaces_section_title:
   :noindex:

   Basilisk Installation Utilities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/basilisk.utils.html
   :license: GPL-3
   :recipe: /`bioconductor-basilisk.utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basilisk.utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basilisk.utils/meta.yaml>`_

   Implements utilities for installation of the basilisk package\, primarily for creation of the underlying Conda instance. This allows us to avoid re\-writing the same R code in both the configure script \(for centrally administered R installations\) and in the lazy installation mechanism \(for distributed package binaries\). It is highly unlikely that developers \- or\, heaven forbid\, end\-users\! \- will need to interact with this package directly\; they should be using the basilisk package instead.


.. conda:package:: bioconductor-basilisk.utils

   |downloads_bioconductor-basilisk.utils| |docker_bioconductor-basilisk.utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.2-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.1-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dir.expiry: ``>=1.18.0,<1.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-basilisk.utils

to add into an existing workspace instead, run::

    pixi add bioconductor-basilisk.utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-basilisk.utils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-basilisk.utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-basilisk.utils:<tag>

(see `bioconductor-basilisk.utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-basilisk.utils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basilisk.utils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basilisk.utils
   :alt:   (downloads)
.. |docker_bioconductor-basilisk.utils| image:: https://quay.io/repository/biocontainers/bioconductor-basilisk.utils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basilisk.utils
.. _`bioconductor-basilisk.utils/tags`: https://quay.io/repository/biocontainers/bioconductor-basilisk.utils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basilisk.utils";
        var versions = ["1.22.0","1.18.0","1.14.1","1.12.1","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basilisk.utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basilisk.utils/README.html