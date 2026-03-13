:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayesase'
.. highlight: bash

bayesase
========

.. conda:recipe:: bayesase
   :replaces_section_title:
   :noindex:

   Bayesian analysis of allele specific expression

   :homepage: https://github.com/McIntyre-Lab/BayesASE
   :license: MIT / MIT License
   :recipe: /`bayesase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayesase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayesase/meta.yaml>`_

   Allelic imbalance \(AI\) indicates the presence of functional variation in cis regulatory regions. Detecting cis regulatory differences using AI is widespread\, yet there is no formal statistical methodology that tests whether AI differs between conditions. The testing for AI involves several complex bioinformatics steps. BayesASE is a complete bioinformatics pipeline that incorporates state\-of\-the\-art error reduction techniques and a flexible Bayesian approach to estimating AI and formally comparing levels of AI between conditions \(https\:\/\/www.g3journal.org\/content\/8\/2\/447.long\). The modular structure of BayeASE has been packaged as a python package \(https\:\/\/pypi.org\/project\/BayesASE\/\)\, bioconda package \(https\:\/\/anaconda.org\/bioconda\/bayesase\)\, Galaxy toolkit\, made available in Nextflow and as a collection of scripts for the SLURM workload manager in the BayesASE project repository on github\(https\:\/\/github.com\/McIntyre\-Lab\/BayesASE\).
   The model included with the package can formally test AI within one condition for three or more replicates and can statistically compare differences in AI across conditions. This includes reciprocal crosses\, test\-crosses\, and comparisons of GxE for the same genotype in replicated experiments. As gene expression affects power for detection of AI\, and as expression may vary between conditions\, the model explicitly takes coverage into account. The proposed model has low type I and II error under several scenarios\, and is robust to large differences in coverage between conditions. The model included with the package reports estimates of AI for each condition\, and the corresponding Bayesian evidence as well as a formal statistical evaluation of AI between conditions. The package is completely modular and the bioinformatics steps needed to map reads in a genotype specific manner can be used as input for other statistical models of AI and other methods for read counting can be used and the model described in Novelo et al. 2018 deployed. This model represents an update to the R code provided with the publication as the MCMC algorithm is now implemented in RSTAN \(Stan Development Team \(2020\). \"RStan\: the R interface to Stan.\" R package \(http\:\/\/mc\-stan.org\/\) and bias is allowed to vary between conditions and more than 2 conditions can be compared. This is a very general implementation.


.. conda:package:: bayesase

   |downloads_bayesase| |docker_bayesase|

   :versions:
      
      

      ``21.1.13.1-0``,  ``21.1.7-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on importlib_resources: 
   :depends on numpy: ``>=1.18.1``
   :depends on pandas: ``>=1.0.3``
   :depends on python: ``>=3.6``
   :depends on r-bh: 
   :depends on r-here: 
   :depends on r-rstan: 

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

    pixi global install bayesase

to add into an existing workspace instead, run::

    pixi add bayesase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bayesase

Alternatively, to install into a new environment, run::

    conda create -n envname bayesase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bayesase:<tag>

(see `bayesase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bayesase| image:: https://img.shields.io/conda/dn/bioconda/bayesase.svg?style=flat
   :target: https://anaconda.org/bioconda/bayesase
   :alt:   (downloads)
.. |docker_bayesase| image:: https://quay.io/repository/biocontainers/bayesase/status
   :target: https://quay.io/repository/biocontainers/bayesase
.. _`bayesase/tags`: https://quay.io/repository/biocontainers/bayesase?tab=tags


.. raw:: html

    <script>
        var package = "bayesase";
        var versions = ["21.1.13.1","21.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayesase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayesase/README.html