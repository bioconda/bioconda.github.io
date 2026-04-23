:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicpotts'
.. highlight: bash

bioconductor-hicpotts
=====================

.. conda:recipe:: bioconductor-hicpotts
   :replaces_section_title:
   :noindex:

   HiCPotts\: Hierarchical Modeling to Identify and Correct Genomic Biases in Hi\-C

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/HiCPotts.html
   :license: GPL-3
   :recipe: /`bioconductor-hicpotts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicpotts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicpotts/meta.yaml>`_

   The HiCPotts package provides a comprehensive Bayesian framework for analyzing Hi\-C interaction data\, integrating both spatial and genomic biases within a probabilistic modeling framework. At its core\, HiCPotts leverages the Potts model \(Wu\, 1982\)—a well\-established graphical model—to capture and quantify spatial dependencies across interaction loci arranged on a genomic lattice. By treating each interaction as a spatially correlated random variable\, the Potts model enables robust segmentation of the genomic landscape into meaningful components\, such as noise\, true signals\, and false signals. To model the influence of various genomic biases\, HiCPotts employs a regression\-based approach incorporating multiple covariates\: Genomic distance \(D\)\: The distance between interacting loci\, recognized as a fundamental driver of contact frequency. GC\-content \(GC\)\: The local GC composition around the interacting loci\, which can influence chromatin structure and interaction patterns. Transposable elements \(TEs\)\: The presence and abundance of repetitive elements that may shape contact probability through chromatin organization. Accessibility score \(Acc\)\: A measure of chromatin openness\, informing how accessible certain genomic regions are to interaction. By embedding these covariates into a hierarchical mixture model\, HiCPotts characterizes each interaction’s probability of belonging to one of several latent components. The model parameters\, including regression coefficients\, zero\-inflation parameters \(for ZIP\/ZINB distributions\)\, and dispersion terms \(for NB\/ZINB distributions\)\, are inferred via a MCMC sampler. This algorithm draws samples from the joint posterior distribution\, allowing for flexible posterior inference on model parameters and hidden states. From these posterior samples\, HiCPotts computes posterior means of regression parameters and other quantities of interest. These posterior estimates are then used to calculate the posterior probabilities that assign each interaction to a specific component. The resulting classification sheds light on the underlying structure\: distinguishing genuine high\-confidence interactions \(signal\) from background noise and potential false signals\, while simultaneously quantifying the impact of genomic biases on observed interaction frequencies. In summary\, HiCPotts seamlessly integrates spatial modeling\, bias correction\, and probabilistic classification into a unified Bayesian inference framework. It provides rich posterior summaries and interpretable\, model\-based assignments of interaction states\, enabling researchers to better understand the interplay between genomic organization\, biases\, and spatial correlation in Hi\-C data.


.. conda:package:: bioconductor-hicpotts

   |downloads_bioconductor-hicpotts| |docker_bioconductor-hicpotts|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-bsgenome.dmelanogaster.ucsc.dm6: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.dmelanogaster.ucsc.dm6: ``>=1.4.1,<1.5.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: ``>=0.11.0``
   :depends on r-rcpparmadillo: 
   :depends on r-strawr: 

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

    pixi global install bioconductor-hicpotts

to add into an existing workspace instead, run::

    pixi add bioconductor-hicpotts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hicpotts

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hicpotts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hicpotts:<tag>

(see `bioconductor-hicpotts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hicpotts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicpotts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicpotts
   :alt:   (downloads)
.. |docker_bioconductor-hicpotts| image:: https://quay.io/repository/biocontainers/bioconductor-hicpotts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicpotts
.. _`bioconductor-hicpotts/tags`: https://quay.io/repository/biocontainers/bioconductor-hicpotts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicpotts";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicpotts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicpotts/README.html