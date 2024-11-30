:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfa'
.. highlight: bash

bioconductor-scfa
=================

.. conda:recipe:: bioconductor-scfa
   :replaces_section_title:
   :noindex:

   SCFA\: Subtyping via Consensus Factor Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SCFA.html
   :license: LGPL
   :recipe: /`bioconductor-scfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfa/meta.yaml>`_

   Subtyping via Consensus Factor Analysis \(SCFA\) can efficiently remove noisy signals from consistent molecular patterns in multi\-omics data. SCFA first uses an autoencoder to select only important features and then repeatedly performs factor analysis to represent the data with different numbers of factors. Using these representations\, it can reliably identify cancer subtypes and accurately predict risk scores of patients.


.. conda:package:: bioconductor-scfa

   |downloads_bioconductor-scfa| |docker_bioconductor-scfa|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-coro: 
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-psych: 
   :depends r-rhpcblasctl: 
   :depends r-survival: 
   :depends r-torch: ``>=0.3.0``
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

      mamba install bioconductor-scfa

   and update with::

      mamba update bioconductor-scfa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scfa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scfa:<tag>

   (see `bioconductor-scfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scfa
   :alt:   (downloads)
.. |docker_bioconductor-scfa| image:: https://quay.io/repository/biocontainers/bioconductor-scfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfa
.. _`bioconductor-scfa/tags`: https://quay.io/repository/biocontainers/bioconductor-scfa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scfa";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfa/README.html