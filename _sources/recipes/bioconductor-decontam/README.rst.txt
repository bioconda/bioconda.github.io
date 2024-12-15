:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decontam'
.. highlight: bash

bioconductor-decontam
=====================

.. conda:recipe:: bioconductor-decontam
   :replaces_section_title:
   :noindex:

   Identify Contaminants in Marker\-gene and Metagenomics Sequencing Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/decontam.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-decontam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decontam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decontam/meta.yaml>`_

   Simple statistical identification of contaminating sequence features in marker\-gene or metagenomics data. Works on any kind of feature derived from environmental sequencing data \(e.g. ASVs\, OTUs\, taxonomic groups\, MAGs\,...\). Requires DNA quantitation data or sequenced negative control samples.


.. conda:package:: bioconductor-decontam

   |downloads_bioconductor-decontam| |docker_bioconductor-decontam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-reshape2: ``>=1.4.1``
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

      mamba install bioconductor-decontam

   and update with::

      mamba update bioconductor-decontam

  To create a new environment, run::

      mamba create --name myenvname bioconductor-decontam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decontam:<tag>

   (see `bioconductor-decontam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decontam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decontam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decontam
   :alt:   (downloads)
.. |docker_bioconductor-decontam| image:: https://quay.io/repository/biocontainers/bioconductor-decontam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decontam
.. _`bioconductor-decontam/tags`: https://quay.io/repository/biocontainers/bioconductor-decontam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decontam";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decontam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decontam/README.html