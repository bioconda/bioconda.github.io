:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprvariants'
.. highlight: bash

bioconductor-crisprvariants
===========================

.. conda:recipe:: bioconductor-crisprvariants
   :replaces_section_title:
   :noindex:

   Tools for counting and visualising mutations in a target location

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CrispRVariants.html
   :license: GPL-2
   :recipe: /`bioconductor-crisprvariants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprvariants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprvariants/meta.yaml>`_
   :links: biotools: :biotools:`crisprvariants`

   CrispRVariants provides tools for analysing the results of a CRISPR\-Cas9 mutagenesis sequencing experiment\, or other sequencing experiments where variants within a given region are of interest. These tools allow users to localize variant allele combinations with respect to any genomic location \(e.g. the Cas9 cut site\)\, plot allele combinations and calculate mutation rates with flexible filtering of unrelated variants.


.. conda:package:: bioconductor-crisprvariants

   |downloads_bioconductor-crisprvariants| |docker_bioconductor-crisprvariants|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-gridextra: 
   :depends r-reshape2: 
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

      mamba install bioconductor-crisprvariants

   and update with::

      mamba update bioconductor-crisprvariants

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprvariants

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprvariants:<tag>

   (see `bioconductor-crisprvariants/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprvariants| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprvariants.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprvariants
   :alt:   (downloads)
.. |docker_bioconductor-crisprvariants| image:: https://quay.io/repository/biocontainers/bioconductor-crisprvariants/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprvariants
.. _`bioconductor-crisprvariants/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprvariants?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprvariants";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprvariants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprvariants/README.html