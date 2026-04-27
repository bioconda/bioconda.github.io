:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phylomeasures'
.. highlight: bash

r-phylomeasures
===============

.. conda:recipe:: r-phylomeasures
   :replaces_section_title:
   :noindex:

   Given a phylogenetic tree T and an assemblage S of species represented as  a subset of tips in T\, we want to compute a measure of the diversity  of the species in S with respect to T. The current package offers  efficient algorithms that can process large phylogenetic data for several such measures.  Most importantly\, the package includes algorithms for computing  efficiently the standardized versions of phylogenetic measures and their p\-values\, which are  essential for null model comparisons. Among other functions\,  the package provides efficient computation of richness\-standardized versions  for indices such as the net relatedness index \(NRI\)\,  nearest taxon index \(NTI\)\, phylogenetic diversity index \(PDI\)\, and the corresponding indices of two\-sample measures.  The package also introduces a new single\-sample measure\, the Core Ancestor Cost \(CAC\)\; the package provides functions for computing the value and the standardised index of the CAC and\, more than that\, there is an extra function available that can compute exactly  any statistical moment of the measure. The package supports computations under different null models\, including abundance\-weighted models.

   :homepage: https://CRAN.R-project.org/package=PhyloMeasures
   :license: GPL3 / GPL-3
   :recipe: /`r-phylomeasures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylomeasures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylomeasures/meta.yaml>`_

   


.. conda:package:: r-phylomeasures

   |downloads_r-phylomeasures| |docker_r-phylomeasures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-10</code>,  <code>2.1-9</code>,  <code>2.1-8</code>,  <code>2.1-7</code>,  <code>2.1-6</code>,  <code>2.1-5</code>,  <code>2.1-4</code>,  <code>2.1-3</code>,  <code>2.1-2</code>,  </span></summary>
      

      ``2.1-10``,  ``2.1-9``,  ``2.1-8``,  ``2.1-7``,  ``2.1-6``,  ``2.1-5``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-phylomeasures

to add into an existing workspace instead, run::

    pixi add r-phylomeasures

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-phylomeasures

Alternatively, to install into a new environment, run::

    conda create -n envname r-phylomeasures

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-phylomeasures:<tag>

(see `r-phylomeasures/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-phylomeasures| image:: https://img.shields.io/conda/dn/bioconda/r-phylomeasures.svg?style=flat
   :target: https://anaconda.org/bioconda/r-phylomeasures
   :alt:   (downloads)
.. |docker_r-phylomeasures| image:: https://quay.io/repository/biocontainers/r-phylomeasures/status
   :target: https://quay.io/repository/biocontainers/r-phylomeasures
.. _`r-phylomeasures/tags`: https://quay.io/repository/biocontainers/r-phylomeasures?tab=tags


.. raw:: html

    <script>
        var package = "r-phylomeasures";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phylomeasures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phylomeasures/README.html