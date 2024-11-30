:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intact'
.. highlight: bash

bioconductor-intact
===================

.. conda:recipe:: bioconductor-intact
   :replaces_section_title:
   :noindex:

   Integrate TWAS and Colocalization Analysis for Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/INTACT.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-intact <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intact>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intact/meta.yaml>`_

   This package integrates colocalization probabilities from colocalization analysis with transcriptome\-wide association study \(TWAS\) scan summary statistics to implicate genes that may be biologically relevant to a complex trait. The probabilistic framework implemented in this package constrains the TWAS scan z\-score\-based likelihood using a gene\-level colocalization probability. Given gene set annotations\, this package can estimate gene set enrichment using posterior probabilities from the TWAS\-colocalization integration step.


.. conda:package:: bioconductor-intact

   |downloads_bioconductor-intact| |docker_bioconductor-intact|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bdsmatrix: 
   :depends r-numderiv: 
   :depends r-squarem: 
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

      mamba install bioconductor-intact

   and update with::

      mamba update bioconductor-intact

  To create a new environment, run::

      mamba create --name myenvname bioconductor-intact

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intact:<tag>

   (see `bioconductor-intact/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intact| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intact.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intact
   :alt:   (downloads)
.. |docker_bioconductor-intact| image:: https://quay.io/repository/biocontainers/bioconductor-intact/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intact
.. _`bioconductor-intact/tags`: https://quay.io/repository/biocontainers/bioconductor-intact?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intact";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intact/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intact/README.html