:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgnet'
.. highlight: bash

bioconductor-fgnet
==================

.. conda:recipe:: bioconductor-fgnet
   :replaces_section_title:
   :noindex:

   Functional Gene Networks derived from biological enrichment analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FGNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fgnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgnet/meta.yaml>`_

   Build and visualize functional gene and term networks from clustering of enrichment analyses in multiple annotation spaces. The package includes a graphical user interface \(GUI\) and functions to perform the functional enrichment analysis through DAVID\, GeneTerm Linker\, gage \(GSEA\) and topGO.


.. conda:package:: bioconductor-fgnet

   |downloads_bioconductor-fgnet| |docker_bioconductor-fgnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.44.0-0</code>,  <code>3.40.0-0</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.34.0-0</code>,  <code>3.32.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-1</code>,  </span></summary>
      

      ``3.44.0-0``,  ``3.40.0-0``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-1``,  ``3.24.0-0``,  ``3.23.1-0``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hwriter: 
   :depends on r-igraph: ``>=0.6``
   :depends on r-plotrix: 
   :depends on r-png: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-xml: 

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

    pixi global install bioconductor-fgnet

to add into an existing workspace instead, run::

    pixi add bioconductor-fgnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fgnet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fgnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fgnet:<tag>

(see `bioconductor-fgnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fgnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgnet
   :alt:   (downloads)
.. |docker_bioconductor-fgnet| image:: https://quay.io/repository/biocontainers/bioconductor-fgnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgnet
.. _`bioconductor-fgnet/tags`: https://quay.io/repository/biocontainers/bioconductor-fgnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fgnet";
        var versions = ["3.44.0","3.40.0","3.36.0","3.36.0","3.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgnet/README.html