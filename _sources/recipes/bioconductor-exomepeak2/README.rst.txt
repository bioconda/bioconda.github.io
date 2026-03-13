:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomepeak2'
.. highlight: bash

bioconductor-exomepeak2
=======================

.. conda:recipe:: bioconductor-exomepeak2
   :replaces_section_title:
   :noindex:

   Peak Calling and differential analysis for MeRIP\-Seq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/exomePeak2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-exomepeak2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2/meta.yaml>`_

   exomePeak2 provides peak detection and differential methylation for Methylated RNA Immunoprecipitation Sequencing \(MeRIP\-Seq\) data. MeRIP\-Seq is a commonly applied sequencing assay that measures the location and abundance of RNA modification sites under specific cellular conditions. The technique is sensitive to PCR amplification biases commonly found in NGS data. In addition\, the efficiency of immunoprecipitation often varies between different IP samples. exomePeak2 can perform peak calling and differential analysis independent of GC content bias and IP efficiency changes.


.. conda:package:: bioconductor-exomepeak2

   |downloads_bioconductor-exomepeak2| |docker_bioconductor-exomepeak2|

   :versions:
      
      

      ``1.14.3-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-mclust: 
   :depends on r-speedglm: 

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

    pixi global install bioconductor-exomepeak2

to add into an existing workspace instead, run::

    pixi add bioconductor-exomepeak2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-exomepeak2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-exomepeak2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-exomepeak2:<tag>

(see `bioconductor-exomepeak2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-exomepeak2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exomepeak2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-exomepeak2
   :alt:   (downloads)
.. |docker_bioconductor-exomepeak2| image:: https://quay.io/repository/biocontainers/bioconductor-exomepeak2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exomepeak2
.. _`bioconductor-exomepeak2/tags`: https://quay.io/repository/biocontainers/bioconductor-exomepeak2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-exomepeak2";
        var versions = ["1.14.3","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exomepeak2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exomepeak2/README.html