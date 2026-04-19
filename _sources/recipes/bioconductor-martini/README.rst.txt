:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-martini'
.. highlight: bash

bioconductor-martini
====================

.. conda:recipe:: bioconductor-martini
   :replaces_section_title:
   :noindex:

   GWAS Incorporating Networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/martini.html
   :license: GPL-3
   :recipe: /`bioconductor-martini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini/meta.yaml>`_
   :links: biotools: :biotools:`martini`, usegalaxy-eu: :usegalaxy-eu:`martini`

   martini deals with the low power inherent to GWAS studies by using prior knowledge represented as a network. SNPs are the vertices of the network\, and the edges represent biological relationships between them \(genomic adjacency\, belonging to the same gene\, physical interaction between protein products\). The network is scanned using SConES\, which looks for groups of SNPs maximally associated with the phenotype\, that form a close subnetwork.


.. conda:package:: bioconductor-martini

   |downloads_bioconductor-martini| |docker_bioconductor-martini|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-snpstats: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-snpstats: ``>=1.60.0,<1.61.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: ``>=1.0.1``
   :depends on r-matrix: 
   :depends on r-memoise: ``>=2.0.0``
   :depends on r-rcpp: ``>=0.12.8``
   :depends on r-rcppeigen: ``>=0.3.3.5.0``

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

    pixi global install bioconductor-martini

to add into an existing workspace instead, run::

    pixi add bioconductor-martini

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-martini

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-martini

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-martini:<tag>

(see `bioconductor-martini/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-martini| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-martini.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-martini
   :alt:   (downloads)
.. |docker_bioconductor-martini| image:: https://quay.io/repository/biocontainers/bioconductor-martini/status
   :target: https://quay.io/repository/biocontainers/bioconductor-martini
.. _`bioconductor-martini/tags`: https://quay.io/repository/biocontainers/bioconductor-martini?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-martini";
        var versions = ["1.30.0","1.26.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-martini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-martini/README.html