:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprscore'
.. highlight: bash

bioconductor-crisprscore
========================

.. conda:recipe:: bioconductor-crisprscore
   :replaces_section_title:
   :noindex:

   On\-Target and Off\-Target Scoring Algorithms for CRISPR gRNAs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprScore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprscore/meta.yaml>`_

   Provides R wrappers of several on\-target and off\-target scoring methods for CRISPR guide RNAs \(gRNAs\). The following nucleases are supported\: SpCas9\, AsCas12a\, enAsCas12a\, and RfxCas13d \(CasRx\). The available on\-target cutting efficiency scoring methods are RuleSet1\, Azimuth\, DeepHF\, DeepCpf1\, enPAM\+GB\, and CRISPRscan. Both the CFD and MIT scoring methods are available for off\-target specificity prediction. The package also provides a Lindel\-derived score to predict the probability of a gRNA to produce indels inducing a frameshift for the Cas9 nuclease. Note that DeepHF\, DeepCpf1 and enPAM\+GB are not available on Windows machines.


.. conda:package:: bioconductor-crisprscore

   |downloads_bioconductor-crisprscore| |docker_bioconductor-crisprscore|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-crisprscoredata: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-randomforest: 
   :depends on r-reticulate: 
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

    pixi global install bioconductor-crisprscore

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprscore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprscore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprscore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprscore:<tag>

(see `bioconductor-crisprscore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprscore
   :alt:   (downloads)
.. |docker_bioconductor-crisprscore| image:: https://quay.io/repository/biocontainers/bioconductor-crisprscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprscore
.. _`bioconductor-crisprscore/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprscore";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprscore/README.html