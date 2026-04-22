:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gvenn'
.. highlight: bash

bioconductor-gvenn
==================

.. conda:recipe:: bioconductor-gvenn
   :replaces_section_title:
   :noindex:

   Proportional Venn and UpSet Diagrams for Gene Sets and Genomic Regions

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/gVenn.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gvenn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gvenn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gvenn/meta.yaml>`_

   Tools to compute and visualize overlaps between gene sets or genomic regions. Venn diagrams with proportional areas are provided\, while UpSet plots are recommended for larger numbers of sets. The package supports GRanges and GRangesList inputs\, and integrates with analysis workflows for ChIP\-seq\, ATAC\-seq\, and other genomic interval data. It generates clean\, interpretable\, and publication\-ready figures.


.. conda:package:: bioconductor-gvenn

   |downloads_bioconductor-gvenn| |docker_bioconductor-gvenn|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-eulerr: 
   :depends on r-lubridate: 
   :depends on r-stringr: 
   :depends on r-writexl: 

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

    pixi global install bioconductor-gvenn

to add into an existing workspace instead, run::

    pixi add bioconductor-gvenn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gvenn

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gvenn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gvenn:<tag>

(see `bioconductor-gvenn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gvenn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gvenn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gvenn
   :alt:   (downloads)
.. |docker_bioconductor-gvenn| image:: https://quay.io/repository/biocontainers/bioconductor-gvenn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gvenn
.. _`bioconductor-gvenn/tags`: https://quay.io/repository/biocontainers/bioconductor-gvenn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gvenn";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gvenn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gvenn/README.html