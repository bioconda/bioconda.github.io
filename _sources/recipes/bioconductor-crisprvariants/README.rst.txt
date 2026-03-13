:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprvariants'
.. highlight: bash

bioconductor-crisprvariants
===========================

.. conda:recipe:: bioconductor-crisprvariants
   :replaces_section_title:
   :noindex:

   Tools for counting and visualising mutations in a target location

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CrispRVariants.html
   :license: GPL-2
   :recipe: /`bioconductor-crisprvariants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprvariants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprvariants/meta.yaml>`_
   :links: biotools: :biotools:`crisprvariants`

   CrispRVariants provides tools for analysing the results of a CRISPR\-Cas9 mutagenesis sequencing experiment\, or other sequencing experiments where variants within a given region are of interest. These tools allow users to localize variant allele combinations with respect to any genomic location \(e.g. the Cas9 cut site\)\, plot allele combinations and calculate mutation rates with flexible filtering of unrelated variants.


.. conda:package:: bioconductor-crisprvariants

   |downloads_bioconductor-crisprvariants| |docker_bioconductor-crisprvariants|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=2.2.0``
   :depends on r-gridextra: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-crisprvariants

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprvariants

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprvariants

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprvariants

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprvariants:<tag>

(see `bioconductor-crisprvariants/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprvariants| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprvariants.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprvariants
   :alt:   (downloads)
.. |docker_bioconductor-crisprvariants| image:: https://quay.io/repository/biocontainers/bioconductor-crisprvariants/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprvariants
.. _`bioconductor-crisprvariants/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprvariants?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprvariants";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprvariants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprvariants/README.html