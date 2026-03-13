:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgraph2js'
.. highlight: bash

bioconductor-rgraph2js
======================

.. conda:recipe:: bioconductor-rgraph2js
   :replaces_section_title:
   :noindex:

   Convert a Graph into a D3js Script

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RGraph2js.html
   :license: GPL-2
   :recipe: /`bioconductor-rgraph2js <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraph2js>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraph2js/meta.yaml>`_
   :links: biotools: :biotools:`rgraph2js`, doi: :doi:`10.1038/nmeth.3252`

   Generator of web pages which display interactive network\/graph visualizations with D3js\, jQuery and Raphael.


.. conda:package:: bioconductor-rgraph2js

   |downloads_bioconductor-rgraph2js| |docker_bioconductor-rgraph2js|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on jquery: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-digest: 
   :depends on r-rjson: 
   :depends on r-whisker: 

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

    pixi global install bioconductor-rgraph2js

to add into an existing workspace instead, run::

    pixi add bioconductor-rgraph2js

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgraph2js

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgraph2js

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgraph2js:<tag>

(see `bioconductor-rgraph2js/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgraph2js| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraph2js.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgraph2js
   :alt:   (downloads)
.. |docker_bioconductor-rgraph2js| image:: https://quay.io/repository/biocontainers/bioconductor-rgraph2js/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraph2js
.. _`bioconductor-rgraph2js/tags`: https://quay.io/repository/biocontainers/bioconductor-rgraph2js?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgraph2js";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraph2js/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraph2js/README.html