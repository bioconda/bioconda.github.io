:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qpgraph'
.. highlight: bash

bioconductor-qpgraph
====================

.. conda:recipe:: bioconductor-qpgraph
   :replaces_section_title:
   :noindex:

   Estimation of genetic and molecular regulatory networks from high\-throughput genomics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/qpgraph.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-qpgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpgraph/meta.yaml>`_
   :links: biotools: :biotools:`qpgraph`

   Estimate gene and eQTL networks from high\-throughput expression and genotyping assays.


.. conda:package:: bioconductor-qpgraph

   |downloads_bioconductor-qpgraph| |docker_bioconductor-qpgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-1</code>,  <code>2.36.0-0</code>,  <code>2.34.2-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.2-0</code>,  <code>2.28.1-0</code>,  </span></summary>
      

      ``2.44.0-0``,  ``2.40.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.2-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.2-0``,  ``2.28.1-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.3-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotate: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-annotate: ``>=1.88.0,<1.89.0a0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: ``>=1.5-0``
   :depends on r-mvtnorm: 
   :depends on r-qtl: 

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

    pixi global install bioconductor-qpgraph

to add into an existing workspace instead, run::

    pixi add bioconductor-qpgraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qpgraph

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qpgraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qpgraph:<tag>

(see `bioconductor-qpgraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qpgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qpgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qpgraph
   :alt:   (downloads)
.. |docker_bioconductor-qpgraph| image:: https://quay.io/repository/biocontainers/bioconductor-qpgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qpgraph
.. _`bioconductor-qpgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-qpgraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qpgraph";
        var versions = ["2.44.0","2.40.0","2.36.0","2.36.0","2.34.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qpgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qpgraph/README.html