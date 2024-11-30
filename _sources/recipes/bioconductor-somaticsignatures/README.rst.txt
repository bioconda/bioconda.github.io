:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-somaticsignatures'
.. highlight: bash

bioconductor-somaticsignatures
==============================

.. conda:recipe:: bioconductor-somaticsignatures
   :replaces_section_title:
   :noindex:

   Somatic Signatures

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SomaticSignatures.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somaticsignatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somaticsignatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somaticsignatures/meta.yaml>`_
   :links: biotools: :biotools:`somaticsignatures`

   The SomaticSignatures package identifies mutational signatures of single nucleotide variants \(SNVs\).  It provides a infrastructure related to the methodology described in Nik\-Zainal \(2012\, Cell\)\, with flexibility in the matrix decomposition algorithms.


.. conda:package:: bioconductor-somaticsignatures

   |downloads_bioconductor-somaticsignatures| |docker_bioconductor-somaticsignatures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-ggbio: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-nmf: 
   :depends r-proxy: 
   :depends r-reshape2: 
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

      mamba install bioconductor-somaticsignatures

   and update with::

      mamba update bioconductor-somaticsignatures

  To create a new environment, run::

      mamba create --name myenvname bioconductor-somaticsignatures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-somaticsignatures:<tag>

   (see `bioconductor-somaticsignatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-somaticsignatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somaticsignatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-somaticsignatures
   :alt:   (downloads)
.. |docker_bioconductor-somaticsignatures| image:: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures
.. _`bioconductor-somaticsignatures/tags`: https://quay.io/repository/biocontainers/bioconductor-somaticsignatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-somaticsignatures";
        var versions = ["2.38.0","2.36.0","2.34.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somaticsignatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somaticsignatures/README.html