:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deeppincs'
.. highlight: bash

bioconductor-deeppincs
======================

.. conda:recipe:: bioconductor-deeppincs
   :replaces_section_title:
   :noindex:

   Protein Interactions and Networks with Compounds based on Sequences using Deep Learning

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DeepPINCS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-deeppincs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deeppincs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deeppincs/meta.yaml>`_

   The identification of novel compound\-protein interaction \(CPI\) is important in drug discovery. Revealing unknown compound\-protein interactions is useful to design a new drug for a target protein by screening candidate compounds. The accurate CPI prediction assists in effective drug discovery process. To identify potential CPI effectively\, prediction methods based on machine learning and deep learning have been developed. Data for sequences are provided as discrete symbolic data. In the data\, compounds are represented as SMILES \(simplified molecular\-input line\-entry system\) strings and proteins are sequences in which the characters are amino acids. The outcome is defined as a variable that indicates how strong two molecules interact with each other or whether there is an interaction between them. In this package\, a deep\-learning based model that takes only sequence information of both compounds and proteins as input and the outcome as output is used to predict CPI. The model is implemented by using compound and protein encoders with useful features. The CPI model also supports other modeling tasks\, including protein\-protein interaction \(PPI\)\, chemical\-chemical interaction \(CCI\)\, or single compounds and proteins. Although the model is designed for proteins\, DNA and RNA can be used if they are represented as sequences.


.. conda:package:: bioconductor-deeppincs

   |downloads_bioconductor-deeppincs| |docker_bioconductor-deeppincs|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ttgsea: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-catencoders: 
   :depends r-keras: 
   :depends r-matlab: 
   :depends r-prroc: 
   :depends r-purrr: 
   :depends r-rcdk: 
   :depends r-reticulate: 
   :depends r-stringdist: 
   :depends r-tensorflow: 
   :depends r-tokenizers: 
   :depends r-webchem: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-deeppincs

   and update with::

      mamba update bioconductor-deeppincs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deeppincs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deeppincs:<tag>

   (see `bioconductor-deeppincs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deeppincs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deeppincs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deeppincs
   :alt:   (downloads)
.. |docker_bioconductor-deeppincs| image:: https://quay.io/repository/biocontainers/bioconductor-deeppincs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deeppincs
.. _`bioconductor-deeppincs/tags`: https://quay.io/repository/biocontainers/bioconductor-deeppincs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deeppincs";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
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