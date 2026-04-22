:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-taxsea'
.. highlight: bash

bioconductor-taxsea
===================

.. conda:recipe:: bioconductor-taxsea
   :replaces_section_title:
   :noindex:

   Taxon Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/TaxSEA.html
   :license: GPL-3
   :recipe: /`bioconductor-taxsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-taxsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-taxsea/meta.yaml>`_

   TaxSEA is an R package for Taxon Set Enrichment Analysis\, which utilises a Kolmogorov\-Smirnov test analyses to investigate differential abundance analysis output for whether there are alternations in a\-priori defined sets of taxa from public databases \(BugSigDB\, MiMeDB\, GutMGene\, mBodyMap\, BacDive and GMRepoV2\) and collated from the literature. TaxSEA takes as input a list of taxonomic identifiers \(e.g. species names\, NCBI IDs etc.\) and a rank \(E.g. fold change\, correlation coefficient\). TaxSEA be applied to any microbiota taxonomic profiling technology \(array\-based\, 16S rRNA gene sequencing\, shotgun metagenomics \& metatranscriptomics etc.\) and enables researchers to rapidly contextualize their findings within the broader literature to accelerate interpretation of results.


.. conda:package:: bioconductor-taxsea

   |downloads_bioconductor-taxsea| |docker_bioconductor-taxsea|

   :versions:
      
      

      ``1.2.0-0``

      

   
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

    pixi global install bioconductor-taxsea

to add into an existing workspace instead, run::

    pixi add bioconductor-taxsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-taxsea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-taxsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-taxsea:<tag>

(see `bioconductor-taxsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-taxsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-taxsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-taxsea
   :alt:   (downloads)
.. |docker_bioconductor-taxsea| image:: https://quay.io/repository/biocontainers/bioconductor-taxsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-taxsea
.. _`bioconductor-taxsea/tags`: https://quay.io/repository/biocontainers/bioconductor-taxsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-taxsea";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-taxsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-taxsea/README.html