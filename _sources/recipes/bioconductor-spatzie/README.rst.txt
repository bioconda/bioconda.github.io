:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatzie'
.. highlight: bash

bioconductor-spatzie
====================

.. conda:recipe:: bioconductor-spatzie
   :replaces_section_title:
   :noindex:

   Identification of enriched motif pairs from chromatin interaction data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spatzie.html
   :license: GPL-3
   :recipe: /`bioconductor-spatzie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatzie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatzie/meta.yaml>`_

   Identifies motifs that are significantly co\-enriched from enhancer\-promoter interaction data. While enhancer\-promoter annotation is commonly used to define groups of interaction anchors\, spatzie also supports co\-enrichment analysis between preprocessed interaction anchors.  Supports BEDPE interaction data derived from genome\-wide assays such as HiC\, ChIA\-PET\, and HiChIP. Can also be used to look for differentially enriched motif pairs between two interaction experiments.


.. conda:package:: bioconductor-spatzie

   |downloads_bioconductor-spatzie| |docker_bioconductor-spatzie|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicinteractions: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-motifmatchr: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-tfbstools: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-spatzie

to add into an existing workspace instead, run::

    pixi add bioconductor-spatzie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spatzie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spatzie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spatzie:<tag>

(see `bioconductor-spatzie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spatzie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatzie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatzie
   :alt:   (downloads)
.. |docker_bioconductor-spatzie| image:: https://quay.io/repository/biocontainers/bioconductor-spatzie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatzie
.. _`bioconductor-spatzie/tags`: https://quay.io/repository/biocontainers/bioconductor-spatzie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatzie";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatzie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatzie/README.html