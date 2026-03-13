:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizrserver'
.. highlight: bash

bioconductor-epivizrserver
==========================

.. conda:recipe:: bioconductor-epivizrserver
   :replaces_section_title:
   :noindex:

   WebSocket server infrastructure for epivizr apps and packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epivizrServer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epivizrserver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrserver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrserver/meta.yaml>`_
   :links: biotools: :biotools:`epivizrserver`, doi: :doi:`10.1038/nmeth.3252`

   This package provides objects to manage WebSocket connections to epiviz apps. Other epivizr package use this infrastructure.


.. conda:package:: bioconductor-epivizrserver

   |downloads_bioconductor-epivizrserver| |docker_bioconductor-epivizrserver|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httpuv: ``>=1.3.0``
   :depends on r-mime: ``>=0.2``
   :depends on r-r6: ``>=2.0.0``
   :depends on r-rjson: 

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

    pixi global install bioconductor-epivizrserver

to add into an existing workspace instead, run::

    pixi add bioconductor-epivizrserver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epivizrserver

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epivizrserver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epivizrserver:<tag>

(see `bioconductor-epivizrserver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epivizrserver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrserver.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizrserver
   :alt:   (downloads)
.. |docker_bioconductor-epivizrserver| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrserver/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrserver
.. _`bioconductor-epivizrserver/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizrserver?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epivizrserver";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrserver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrserver/README.html