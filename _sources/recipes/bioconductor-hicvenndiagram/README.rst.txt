:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicvenndiagram'
.. highlight: bash

bioconductor-hicvenndiagram
===========================

.. conda:recipe:: bioconductor-hicvenndiagram
   :replaces_section_title:
   :noindex:

   Venn Diagram for genomic interaction data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hicVennDiagram.html
   :license: GPL-3
   :recipe: /`bioconductor-hicvenndiagram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicvenndiagram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicvenndiagram/meta.yaml>`_

   A package to generate high\-resolution Venn and Upset plots for genomic interaction data from HiC\, ChIA\-PET\, HiChIP\, PLAC\-Seq\, Hi\-TrAC\, HiCAR and etc. The package generates plots specifically crafted to eliminate the deceptive visual representation caused by the counts method.


.. conda:package:: bioconductor-hicvenndiagram

   |downloads_bioconductor-hicvenndiagram| |docker_bioconductor-hicvenndiagram|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-complexupset: 
   :depends on r-eulerr: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-reshape2: 
   :depends on r-svglite: 

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

    pixi global install bioconductor-hicvenndiagram

to add into an existing workspace instead, run::

    pixi add bioconductor-hicvenndiagram

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hicvenndiagram

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hicvenndiagram

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hicvenndiagram:<tag>

(see `bioconductor-hicvenndiagram/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hicvenndiagram| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicvenndiagram.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicvenndiagram
   :alt:   (downloads)
.. |docker_bioconductor-hicvenndiagram| image:: https://quay.io/repository/biocontainers/bioconductor-hicvenndiagram/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicvenndiagram
.. _`bioconductor-hicvenndiagram/tags`: https://quay.io/repository/biocontainers/bioconductor-hicvenndiagram?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicvenndiagram";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicvenndiagram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicvenndiagram/README.html