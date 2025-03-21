:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asafe'
.. highlight: bash

bioconductor-asafe
==================

.. conda:recipe:: bioconductor-asafe
   :replaces_section_title:
   :noindex:

   Ancestry Specific Allele Frequency Estimation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASAFE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-asafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asafe/meta.yaml>`_
   :links: biotools: :biotools:`asafe`, doi: :doi:`10.1093/bioinformatics/btw220`

   Given admixed individuals\' bi\-allelic SNP genotypes and ancestry pairs \(where each ancestry can take one of three values\) for multiple SNPs\, perform an EM algorithm to deal with the fact that SNP genotypes are unphased with respect to ancestry pairs\, in order to estimate ancestry\-specific allele frequencies for all SNPs.


.. conda:package:: bioconductor-asafe

   |downloads_bioconductor-asafe| |docker_bioconductor-asafe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-asafe

   and update with::

      mamba update bioconductor-asafe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-asafe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asafe:<tag>

   (see `bioconductor-asafe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asafe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asafe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asafe
   :alt:   (downloads)
.. |docker_bioconductor-asafe| image:: https://quay.io/repository/biocontainers/bioconductor-asafe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asafe
.. _`bioconductor-asafe/tags`: https://quay.io/repository/biocontainers/bioconductor-asafe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asafe";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asafe/README.html