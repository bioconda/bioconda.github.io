:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrforpairs'
.. highlight: bash

bioconductor-dmrforpairs
========================

.. conda:recipe:: bioconductor-dmrforpairs
   :replaces_section_title:
   :noindex:

   DMRforPairs\: identifying Differentially Methylated Regions between unique samples using array based methylation profiles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DMRforPairs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dmrforpairs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrforpairs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrforpairs/meta.yaml>`_

   DMRforPairs \(formerly DMR2\+\) allows researchers to compare n\>\=2 unique samples with regard to their methylation profile. The \(pairwise\) comparison of n unique single samples distinguishes DMRforPairs from other existing pipelines as these often compare groups of samples in either single CpG locus or region based analysis. DMRforPairs defines regions of interest as genomic ranges with sufficient probes located in close proximity to each other. Probes in one region are optionally annotated to the same functional class\(es\). Differential methylation is evaluated by comparing the methylation values within each region between individual samples and \(if the difference is sufficiently large\)\, testing this difference formally for statistical significance.


.. conda:package:: bioconductor-dmrforpairs

   |downloads_bioconductor-dmrforpairs| |docker_bioconductor-dmrforpairs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.35.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.35.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-r2html: ``>=2.2.1``

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

    pixi global install bioconductor-dmrforpairs

to add into an existing workspace instead, run::

    pixi add bioconductor-dmrforpairs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dmrforpairs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dmrforpairs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dmrforpairs:<tag>

(see `bioconductor-dmrforpairs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dmrforpairs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrforpairs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrforpairs
   :alt:   (downloads)
.. |docker_bioconductor-dmrforpairs| image:: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs
.. _`bioconductor-dmrforpairs/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrforpairs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmrforpairs";
        var versions = ["1.35.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrforpairs/README.html