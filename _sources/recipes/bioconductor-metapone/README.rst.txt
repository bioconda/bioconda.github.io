:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metapone'
.. highlight: bash

bioconductor-metapone
=====================

.. conda:recipe:: bioconductor-metapone
   :replaces_section_title:
   :noindex:

   Conducts pathway test of metabolomics data using a weighted permutation test

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/metapone.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metapone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metapone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metapone/meta.yaml>`_

   The package conducts pathway testing from untargetted metabolomics data. It requires the user to supply feature\-level test results\, from case\-control testing\, regression\, or other suitable feature\-level tests for the study design. Weights are given to metabolic features based on how many metabolites they could potentially match to. The package can combine positive and negative mode results in pathway tests.


.. conda:package:: bioconductor-metapone

   |downloads_bioconductor-metapone| |docker_bioconductor-metapone|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-markdown: 
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

      mamba install bioconductor-metapone

   and update with::

      mamba update bioconductor-metapone

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metapone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metapone:<tag>

   (see `bioconductor-metapone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metapone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metapone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metapone
   :alt:   (downloads)
.. |docker_bioconductor-metapone| image:: https://quay.io/repository/biocontainers/bioconductor-metapone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metapone
.. _`bioconductor-metapone/tags`: https://quay.io/repository/biocontainers/bioconductor-metapone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metapone";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metapone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metapone/README.html