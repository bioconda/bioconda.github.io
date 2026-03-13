:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deeppincs'
.. highlight: bash

bioconductor-deeppincs
======================

.. conda:recipe:: bioconductor-deeppincs
   :replaces_section_title:
   :noindex:

   Protein Interactions and Networks with Compounds based on Sequences using Deep Learning

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DeepPINCS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-deeppincs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deeppincs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deeppincs/meta.yaml>`_

   The identification of novel compound\-protein interaction \(CPI\) is important in drug discovery. Revealing unknown compound\-protein interactions is useful to design a new drug for a target protein by screening candidate compounds. The accurate CPI prediction assists in effective drug discovery process. To identify potential CPI effectively\, prediction methods based on machine learning and deep learning have been developed. Data for sequences are provided as discrete symbolic data. In the data\, compounds are represented as SMILES \(simplified molecular\-input line\-entry system\) strings and proteins are sequences in which the characters are amino acids. The outcome is defined as a variable that indicates how strong two molecules interact with each other or whether there is an interaction between them. In this package\, a deep\-learning based model that takes only sequence information of both compounds and proteins as input and the outcome as output is used to predict CPI. The model is implemented by using compound and protein encoders with useful features. The CPI model also supports other modeling tasks\, including protein\-protein interaction \(PPI\)\, chemical\-chemical interaction \(CCI\)\, or single compounds and proteins. Although the model is designed for proteins\, DNA and RNA can be used if they are represented as sequences.


.. conda:package:: bioconductor-deeppincs

   |downloads_bioconductor-deeppincs| |docker_bioconductor-deeppincs|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-ttgsea: ``>=1.18.0,<1.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-catencoders: 
   :depends on r-keras: 
   :depends on r-matlab: 
   :depends on r-prroc: 
   :depends on r-purrr: 
   :depends on r-rcdk: 
   :depends on r-reticulate: 
   :depends on r-stringdist: 
   :depends on r-tensorflow: 
   :depends on r-tokenizers: 
   :depends on r-webchem: 

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

    pixi global install bioconductor-deeppincs

to add into an existing workspace instead, run::

    pixi add bioconductor-deeppincs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-deeppincs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-deeppincs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-deeppincs:<tag>

(see `bioconductor-deeppincs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-deeppincs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deeppincs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deeppincs
   :alt:   (downloads)
.. |docker_bioconductor-deeppincs| image:: https://quay.io/repository/biocontainers/bioconductor-deeppincs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deeppincs
.. _`bioconductor-deeppincs/tags`: https://quay.io/repository/biocontainers/bioconductor-deeppincs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deeppincs";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deeppincs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deeppincs/README.html