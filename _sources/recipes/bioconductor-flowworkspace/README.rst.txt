:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspace'
.. highlight: bash

bioconductor-flowworkspace
==========================

.. conda:recipe:: bioconductor-flowworkspace
   :replaces_section_title:
   :noindex:

   Infrastructure for representing and interacting with gated and ungated cytometry data sets.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowWorkspace.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-flowworkspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspace/meta.yaml>`_
   :links: biotools: :biotools:`flowworkspace`, doi: :doi:`10.1186/1471-2105-13-252`

   This package is designed to facilitate comparison of automated gating methods against manual gating done in flowJo. This package allows you to import basic flowJo workspaces into BioConductor and replicate the gating from flowJo using the flowCore functionality. Gating hierarchies\, groups of samples\, compensation\, and transformation are performed so that the output matches the flowJo analysis.


.. conda:package:: bioconductor-flowworkspace

   |downloads_bioconductor-flowworkspace| |docker_bioconductor-flowworkspace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.22.1-0</code>,  <code>4.18.0-1</code>,  <code>4.18.0-0</code>,  <code>4.14.0-0</code>,  <code>4.12.0-0</code>,  <code>4.10.0-1</code>,  <code>4.10.0-0</code>,  <code>4.6.0-2</code>,  <code>4.6.0-1</code>,  </span></summary>
      

      ``4.22.1-0``,  ``4.18.0-1``,  ``4.18.0-0``,  ``4.14.0-0``,  ``4.12.0-0``,  ``4.10.0-1``,  ``4.10.0-0``,  ``4.6.0-2``,  ``4.6.0-1``,  ``4.6.0-0``,  ``4.4.0-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.0.1-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.30.2-0``,  ``3.30.1-0``,  ``3.28.2-0``,  ``3.26.2-0``,  ``3.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-cytolib: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-cytolib: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowcore: ``>=2.22.1,<2.23.0a0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-ncdfflow: ``>=2.56.0,<2.57.0``
   :depends on bioconductor-ncdfflow: ``>=2.56.0,<2.57.0a0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0a0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0a0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-rprotobuflib: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-rprotobuflib: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.62.0-1``
   :depends on r-cpp11: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 
   :depends on r-scales: ``>=1.3.0``
   :depends on r-xml: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-flowworkspace

to add into an existing workspace instead, run::

    pixi add bioconductor-flowworkspace

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowworkspace

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowworkspace

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowworkspace:<tag>

(see `bioconductor-flowworkspace/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowworkspace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowworkspace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowworkspace
   :alt:   (downloads)
.. |docker_bioconductor-flowworkspace| image:: https://quay.io/repository/biocontainers/bioconductor-flowworkspace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowworkspace
.. _`bioconductor-flowworkspace/tags`: https://quay.io/repository/biocontainers/bioconductor-flowworkspace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowworkspace";
        var versions = ["4.22.1","4.18.0","4.18.0","4.14.0","4.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspace/README.html