:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spicey'
.. highlight: bash

bioconductor-spicey
===================

.. conda:recipe:: bioconductor-spicey
   :replaces_section_title:
   :noindex:

   Calculates cell type specificity from single cell data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SPICEY.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spicey <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicey>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spicey/meta.yaml>`_

   SPICEY \(SPecificity Index for Coding and Epigenetic activitY\) is an R package designed to quantify cell\-type specificity in single\-cell transcriptomic and epigenomic data\, particularly scRNA\-seq and scATAC\-seq. It introduces two complementary indices\: the Gene Expression Tissue Specificity Index \(GETSI\) and the Regulatory Element Tissue Specificity Index \(RETSI\)\, both based on entropy to provide continuous\, interpretable measures of specificity. By integrating gene expression and chromatin accessibility\, SPICEY enables standardized analysis of cell\-type\-specific regulatory programs across diverse tissues and conditions.


.. conda:package:: bioconductor-spicey

   |downloads_bioconductor-spicey| |docker_bioconductor-spicey|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-scales: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-spicey

to add into an existing workspace instead, run::

    pixi add bioconductor-spicey

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spicey

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spicey

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spicey:<tag>

(see `bioconductor-spicey/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spicey| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spicey.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spicey
   :alt:   (downloads)
.. |docker_bioconductor-spicey| image:: https://quay.io/repository/biocontainers/bioconductor-spicey/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spicey
.. _`bioconductor-spicey/tags`: https://quay.io/repository/biocontainers/bioconductor-spicey?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spicey";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spicey/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spicey/README.html