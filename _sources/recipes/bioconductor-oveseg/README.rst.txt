:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oveseg'
.. highlight: bash

bioconductor-oveseg
===================

.. conda:recipe:: bioconductor-oveseg
   :replaces_section_title:
   :noindex:

   OVESEG\-test to detect tissue\/cell\-specific markers

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/OVESEG.html
   :license: GPL-2
   :recipe: /`bioconductor-oveseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oveseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oveseg/meta.yaml>`_

   An R package for multiple\-group comparison to detect tissue\/cell\-specific marker genes among subtypes. It provides functions to compute OVESEG\-test statistics\, derive component weights in the mixture null distribution model and estimate p\-values from weightedly aggregated permutations. Obtained posterior probabilities of component null hypotheses can also portrait all kinds of upregulation patterns among subtypes.


.. conda:package:: bioconductor-oveseg

   |downloads_bioconductor-oveseg| |docker_bioconductor-oveseg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
   :depends r-rcpp: 
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

      mamba install bioconductor-oveseg

   and update with::

      mamba update bioconductor-oveseg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oveseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oveseg:<tag>

   (see `bioconductor-oveseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oveseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oveseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oveseg
   :alt:   (downloads)
.. |docker_bioconductor-oveseg| image:: https://quay.io/repository/biocontainers/bioconductor-oveseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oveseg
.. _`bioconductor-oveseg/tags`: https://quay.io/repository/biocontainers/bioconductor-oveseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oveseg";
        var versions = ["1.16.0","1.14.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oveseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oveseg/README.html