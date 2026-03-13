:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsutils'
.. highlight: bash

bioconductor-qsutils
====================

.. conda:recipe:: bioconductor-qsutils
   :replaces_section_title:
   :noindex:

   Quasispecies Diversity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/QSutils.html
   :license: GPL-2
   :recipe: /`bioconductor-qsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsutils/meta.yaml>`_

   Set of utility functions for viral quasispecies analysis with NGS data. Most functions are equally useful for metagenomic studies. There are three main types\: \(1\) data manipulation and exploration—functions useful for converting reads to haplotypes and frequencies\, repairing reads\, intersecting strand haplotypes\, and visualizing haplotype alignments. \(2\) diversity indices—functions to compute diversity and entropy\, in which incidence\, abundance\, and functional indices are considered. \(3\) data simulation—functions useful for generating random viral quasispecies data.


.. conda:package:: bioconductor-qsutils

   |downloads_bioconductor-qsutils| |docker_bioconductor-qsutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-psych: 

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

    pixi global install bioconductor-qsutils

to add into an existing workspace instead, run::

    pixi add bioconductor-qsutils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qsutils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qsutils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qsutils:<tag>

(see `bioconductor-qsutils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qsutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsutils
   :alt:   (downloads)
.. |docker_bioconductor-qsutils| image:: https://quay.io/repository/biocontainers/bioconductor-qsutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsutils
.. _`bioconductor-qsutils/tags`: https://quay.io/repository/biocontainers/bioconductor-qsutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsutils";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsutils/README.html