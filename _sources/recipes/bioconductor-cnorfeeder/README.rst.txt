:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnorfeeder'
.. highlight: bash

bioconductor-cnorfeeder
=======================

.. conda:recipe:: bioconductor-cnorfeeder
   :replaces_section_title:
   :noindex:

   Integration of CellNOptR to add missing links

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CNORfeeder.html
   :license: GPL-3
   :recipe: /`bioconductor-cnorfeeder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder/meta.yaml>`_

   This package integrates literature\-constrained and data\-driven methods to infer signalling networks from perturbation experiments. It permits to extends a given network with links derived from the data via various inference methods and uses information on physical interactions of proteins to guide and validate the integration of links.


.. conda:package:: bioconductor-cnorfeeder

   |downloads_bioconductor-cnorfeeder| |docker_bioconductor-cnorfeeder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-cellnoptr: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
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

    pixi global install bioconductor-cnorfeeder

to add into an existing workspace instead, run::

    pixi add bioconductor-cnorfeeder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cnorfeeder

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cnorfeeder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cnorfeeder:<tag>

(see `bioconductor-cnorfeeder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cnorfeeder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnorfeeder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnorfeeder
   :alt:   (downloads)
.. |docker_bioconductor-cnorfeeder| image:: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder
.. _`bioconductor-cnorfeeder/tags`: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnorfeeder";
        var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html