:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cmapr'
.. highlight: bash

bioconductor-cmapr
==================

.. conda:recipe:: bioconductor-cmapr
   :replaces_section_title:
   :noindex:

   CMap Tools in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cmapR.html
   :license: file LICENSE
   :recipe: /`bioconductor-cmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmapr/meta.yaml>`_

   The Connectivity Map \(CMap\) is a massive resource of perturbational gene expression profiles built by researchers at the Broad Institute and funded by the NIH Library of Integrated Network\-Based Cellular Signatures \(LINCS\) program. Please visit https\:\/\/clue.io for more information. The cmapR package implements methods to parse\, manipulate\, and write common CMap data objects\, such as annotated matrices and collections of gene sets.


.. conda:package:: bioconductor-cmapr

   |downloads_bioconductor-cmapr| |docker_bioconductor-cmapr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cmapr

   and update with::

      mamba update bioconductor-cmapr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cmapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cmapr:<tag>

   (see `bioconductor-cmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cmapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cmapr
   :alt:   (downloads)
.. |docker_bioconductor-cmapr| image:: https://quay.io/repository/biocontainers/bioconductor-cmapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cmapr
.. _`bioconductor-cmapr/tags`: https://quay.io/repository/biocontainers/bioconductor-cmapr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cmapr";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cmapr/README.html