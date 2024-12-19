:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-imputelcmd'
.. highlight: bash

r-imputelcmd
============

.. conda:recipe:: r-imputelcmd
   :replaces_section_title:
   :noindex:

   The package contains a collection of functions for left\-censored missing data imputation. Left\-censoring is a special case of missing not at random \(MNAR\)  mechanism that generates non\-responses in proteomics experiments. The package also contains functions to artificially generate peptide\/protein expression data \(log\-transformed\) as random draws from a multivariate Gaussian distribution as well as a function to generate missing data \(both randomly and non\-randomly\). For comparison reasons\, the package also contains several wrapper functions for the imputation of non\-responses that are missing at random. \* New functionality has been added\: a hybrid method that allows the imputation of missing values in a more complex scenario where the missing data are both MAR and MNAR.

   :homepage: https://CRAN.R-project.org/package=imputeLCMD
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-imputelcmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imputelcmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imputelcmd/meta.yaml>`_

   


.. conda:package:: r-imputelcmd

   |downloads_r-imputelcmd| |docker_r-imputelcmd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-3</code>,  <code>2.1-2</code>,  <code>2.1-1</code>,  <code>2.1-0</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  </span></summary>
      

      ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: 
   :depends bioconductor-pcamethods: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-norm: 
   :depends r-tmvtnorm: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-imputelcmd

   and update with::

      mamba update r-imputelcmd

  To create a new environment, run::

      mamba create --name myenvname r-imputelcmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-imputelcmd:<tag>

   (see `r-imputelcmd/tags`_ for valid values for ``<tag>``)


.. |downloads_r-imputelcmd| image:: https://img.shields.io/conda/dn/bioconda/r-imputelcmd.svg?style=flat
   :target: https://anaconda.org/bioconda/r-imputelcmd
   :alt:   (downloads)
.. |docker_r-imputelcmd| image:: https://quay.io/repository/biocontainers/r-imputelcmd/status
   :target: https://quay.io/repository/biocontainers/r-imputelcmd
.. _`r-imputelcmd/tags`: https://quay.io/repository/biocontainers/r-imputelcmd?tab=tags


.. raw:: html

    <script>
        var package = "r-imputelcmd";
        var versions = ["2.1","2.1","2.1","2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-imputelcmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-imputelcmd/README.html