:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cageminer'
.. highlight: bash

bioconductor-cageminer
======================

.. conda:recipe:: bioconductor-cageminer
   :replaces_section_title:
   :noindex:

   Candidate Gene Miner

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cageminer.html
   :license: GPL-3
   :recipe: /`bioconductor-cageminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cageminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cageminer/meta.yaml>`_

   This package aims to integrate GWAS\-derived SNPs and coexpression networks to mine candidate genes associated with a particular phenotype. For that\, users must define a set of guide genes\, which are known genes involved in the studied phenotype. Additionally\, the mined candidates can be given a score that favor candidates that are hubs and\/or transcription factors. The scores can then be used to rank and select the top n most promising genes for downstream experiments.


.. conda:package:: bioconductor-cageminer

   |downloads_bioconductor-cageminer| |docker_bioconductor-cageminer|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bionero: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-ggbio: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggtext: 
   :depends on r-reshape2: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-cageminer

to add into an existing workspace instead, run::

    pixi add bioconductor-cageminer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cageminer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cageminer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cageminer:<tag>

(see `bioconductor-cageminer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cageminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cageminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cageminer
   :alt:   (downloads)
.. |docker_bioconductor-cageminer| image:: https://quay.io/repository/biocontainers/bioconductor-cageminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cageminer
.. _`bioconductor-cageminer/tags`: https://quay.io/repository/biocontainers/bioconductor-cageminer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cageminer";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cageminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cageminer/README.html