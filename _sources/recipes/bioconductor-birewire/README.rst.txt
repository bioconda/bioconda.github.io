:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-birewire'
.. highlight: bash

bioconductor-birewire
=====================

.. conda:recipe:: bioconductor-birewire
   :replaces_section_title:
   :noindex:

   High\-performing routines for the randomization of a bipartite graph \(or a binary event matrix\)\, undirected and directed signed graph preserving degree distribution \(or marginal totals\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiRewire.html
   :license: GPL-3
   :recipe: /`bioconductor-birewire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birewire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birewire/meta.yaml>`_
   :links: biotools: :biotools:`birewire`

   Fast functions for bipartite network rewiring through N consecutive switching steps \(See References\) and for the computation of the minimal number of switching steps to be performed in order to maximise the dissimilarity with respect to the original network. Includes functions for the analysis of the introduced randomness across the switching steps and several other routines to analyse the resulting networks and their natural projections. Extension to undirected networks and directed signed networks is also provided. Starting from version 1.9.7 a more precise bound \(especially for small network\) has been implemented. Starting from version 2.2.0 the analysis routine is more complete and a visual montioring of the underlying Markov Chain has been implemented. Starting from 3.6.0 the library can handle also matrices with NA \(not for the directed signed graphs\). Since version 3.27.1 it is possible to add a constraint for dsg generation\: usually positive and negative arc between two nodes could be not accepted.


.. conda:package:: bioconductor-birewire

   |downloads_bioconductor-birewire| |docker_bioconductor-birewire|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.41.0-0</code>,  <code>3.38.0-0</code>,  <code>3.34.0-0</code>,  <code>3.32.0-0</code>,  <code>3.30.0-2</code>,  <code>3.30.0-1</code>,  <code>3.30.0-0</code>,  <code>3.26.5-0</code>,  <code>3.26.2-0</code>,  </span></summary>
      

      ``3.41.0-0``,  ``3.38.0-0``,  ``3.34.0-0``,  ``3.32.0-0``,  ``3.30.0-2``,  ``3.30.0-1``,  ``3.30.0-0``,  ``3.26.5-0``,  ``3.26.2-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.22.0-1``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-rtsne: 
   :depends on r-slam: 

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

    pixi global install bioconductor-birewire

to add into an existing workspace instead, run::

    pixi add bioconductor-birewire

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-birewire

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-birewire

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-birewire:<tag>

(see `bioconductor-birewire/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-birewire| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-birewire.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-birewire
   :alt:   (downloads)
.. |docker_bioconductor-birewire| image:: https://quay.io/repository/biocontainers/bioconductor-birewire/status
   :target: https://quay.io/repository/biocontainers/bioconductor-birewire
.. _`bioconductor-birewire/tags`: https://quay.io/repository/biocontainers/bioconductor-birewire?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-birewire";
        var versions = ["3.41.0","3.38.0","3.34.0","3.32.0","3.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-birewire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-birewire/README.html