:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenet'
.. highlight: bash

bioconductor-tenet
==================

.. conda:recipe:: bioconductor-tenet
   :replaces_section_title:
   :noindex:

   R package for TENET \(Tracing regulatory Element Networks using Epigenetic Traits\) to identify key transcription factors

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/TENET.html
   :license: GPL-2
   :recipe: /`bioconductor-tenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenet/meta.yaml>`_

   TENET identifies key transcription factors \(TFs\) and regulatory elements \(REs\) linked to a specific cell type by finding significantly correlated differences in gene expression and RE DNA methylation between case and control input datasets\, and identifying the top genes by number of significant RE DNA methylation site links. It also includes many tools for visualization and analysis of the results\, including plots displaying and comparing methylation and expression data and methylation site link counts\, survival analysis\, TF motif searching in the vicinity of linked RE DNA methylation sites\, custom TAD and peak overlap analysis\, and UCSC Genome Browser track file generation. A utility function is also provided to download methylation\, expression\, and patient survival data from The Cancer Genome Atlas \(TCGA\) for use in TENET or other analyses.


.. conda:package:: bioconductor-tenet

   |downloads_bioconductor-tenet| |docker_bioconductor-tenet|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-motifdb: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqlogo: ``>=1.76.0,<1.77.0``
   :depends on bioconductor-sesame: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-sesamedata: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tcgabiolinks: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-tenet.experimenthub: ``>=1.2.0,<1.3.0``
   :depends on r-bammtools: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=4.0``
   :depends on r-matlab: 
   :depends on r-pastecs: 
   :depends on r-r.utils: 
   :depends on r-rcircos: 
   :depends on r-survival: 
   :depends on r-survminer: 

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

    pixi global install bioconductor-tenet

to add into an existing workspace instead, run::

    pixi add bioconductor-tenet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tenet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tenet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tenet:<tag>

(see `bioconductor-tenet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tenet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenet
   :alt:   (downloads)
.. |docker_bioconductor-tenet| image:: https://quay.io/repository/biocontainers/bioconductor-tenet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenet
.. _`bioconductor-tenet/tags`: https://quay.io/repository/biocontainers/bioconductor-tenet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenet";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenet/README.html