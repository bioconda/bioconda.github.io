:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-npgsea'
.. highlight: bash

bioconductor-npgsea
===================

.. conda:recipe:: bioconductor-npgsea
   :replaces_section_title:
   :noindex:

   Permutation approximation methods for gene set enrichment analysis \(non\-permutation GSEA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/npGSEA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-npgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-npgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-npgsea/meta.yaml>`_
   :links: biotools: :biotools:`npgsea`

   Current gene set enrichment methods rely upon permutations for inference.  These approaches are computationally expensive and have minimum achievable p\-values based on the number of permutations\, not on the actual observed statistics.  We have derived three parametric approximations to the permutation distributions of two gene set enrichment test statistics.  We are able to reduce the computational burden and granularity issues of permutation testing with our method\, which is implemented in this package. npGSEA calculates gene set enrichment statistics and p\-values without the computational cost of permutations.  It is applicable in settings where one or many gene sets are of interest.  There are also built\-in plotting functions to help users visualize results.


.. conda:package:: bioconductor-npgsea

   |downloads_bioconductor-npgsea| |docker_bioconductor-npgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
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

    pixi global install bioconductor-npgsea

to add into an existing workspace instead, run::

    pixi add bioconductor-npgsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-npgsea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-npgsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-npgsea:<tag>

(see `bioconductor-npgsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-npgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-npgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-npgsea
   :alt:   (downloads)
.. |docker_bioconductor-npgsea| image:: https://quay.io/repository/biocontainers/bioconductor-npgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-npgsea
.. _`bioconductor-npgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-npgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-npgsea";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-npgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-npgsea/README.html