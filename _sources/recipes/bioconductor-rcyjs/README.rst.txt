:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcyjs'
.. highlight: bash

bioconductor-rcyjs
==================

.. conda:recipe:: bioconductor-rcyjs
   :replaces_section_title:
   :noindex:

   Display and manipulate graphs in cytoscape.js

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RCyjs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcyjs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcyjs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcyjs/meta.yaml>`_

   Interactive viewing and exploration of graphs\, connecting R to Cytoscape.js\, using websockets.


.. conda:package:: bioconductor-rcyjs

   |downloads_bioconductor-rcyjs| |docker_bioconductor-rcyjs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-browserviz: ``>=2.32.0,<2.33.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-base64enc: 
   :depends on r-httpuv: ``>=1.5.0``

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

    pixi global install bioconductor-rcyjs

to add into an existing workspace instead, run::

    pixi add bioconductor-rcyjs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcyjs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcyjs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcyjs:<tag>

(see `bioconductor-rcyjs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcyjs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcyjs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcyjs
   :alt:   (downloads)
.. |docker_bioconductor-rcyjs| image:: https://quay.io/repository/biocontainers/bioconductor-rcyjs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcyjs
.. _`bioconductor-rcyjs/tags`: https://quay.io/repository/biocontainers/bioconductor-rcyjs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcyjs";
        var versions = ["2.32.0","2.28.0","2.24.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcyjs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcyjs/README.html