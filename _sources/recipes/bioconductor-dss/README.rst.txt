:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dss'
.. highlight: bash

bioconductor-dss
================

.. conda:recipe:: bioconductor-dss
   :replaces_section_title:
   :noindex:

   Dispersion shrinkage for sequencing data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DSS.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-dss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss/meta.yaml>`_
   :links: biotools: :biotools:`dss`

   DSS is an R library performing differntial analysis for count\-based sequencing data. It detectes differentially expressed genes \(DEGs\) from RNA\-seq\, and differentially methylated loci or regions \(DML\/DMRs\) from bisulfite sequencing \(BS\-seq\). The core of DSS is a new dispersion shrinkage method for estimating the dispersion parameter from Gamma\-Poisson or Beta\-Binomial distributions.


.. conda:package:: bioconductor-dss

   |downloads_bioconductor-dss| |docker_bioconductor-dss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.42.0-2</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  </span></summary>
      

      ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.42.0-2``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-bsseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-bsseq: ``>=1.38.0,<1.39.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-dss

   and update with::

      mamba update bioconductor-dss

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dss:<tag>

   (see `bioconductor-dss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dss
   :alt:   (downloads)
.. |docker_bioconductor-dss| image:: https://quay.io/repository/biocontainers/bioconductor-dss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dss
.. _`bioconductor-dss/tags`: https://quay.io/repository/biocontainers/bioconductor-dss?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dss";
        var versions = ["2.48.0","2.48.0","2.46.0","2.46.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dss/README.html