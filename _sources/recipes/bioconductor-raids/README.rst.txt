:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-raids'
.. highlight: bash

bioconductor-raids
==================

.. conda:recipe:: bioconductor-raids
   :replaces_section_title:
   :noindex:

   Accurate Inference of Genetic Ancestry from Cancer Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RAIDS.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-raids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raids/meta.yaml>`_

   This package implements specialized algorithms that enable genetic ancestry inference from various cancer sequences sources \(RNA\, Exome and Whole\-Genome sequences\). This package also implements a simulation algorithm that generates synthetic cancer\-derived data. This code and analysis pipeline was designed and developed for the following publication\: Belleau\, P et al. Genetic Ancestry Inference from Cancer\-Derived Molecular Data across Genomic and Transcriptomic Platforms. Cancer Res 1 January 2023\; 83 \(1\)\: 49–58.


.. conda:package:: bioconductor-raids

   |downloads_bioconductor-raids| |docker_bioconductor-raids|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationfilter: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genesis: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-snprelate: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-class: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-proc: 
   :depends on r-rlang: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-raids

to add into an existing workspace instead, run::

    pixi add bioconductor-raids

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-raids

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-raids

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-raids:<tag>

(see `bioconductor-raids/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-raids| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-raids.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-raids
   :alt:   (downloads)
.. |docker_bioconductor-raids| image:: https://quay.io/repository/biocontainers/bioconductor-raids/status
   :target: https://quay.io/repository/biocontainers/bioconductor-raids
.. _`bioconductor-raids/tags`: https://quay.io/repository/biocontainers/bioconductor-raids?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-raids";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-raids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-raids/README.html