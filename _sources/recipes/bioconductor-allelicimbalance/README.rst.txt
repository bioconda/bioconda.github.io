:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-allelicimbalance'
.. highlight: bash

bioconductor-allelicimbalance
=============================

.. conda:recipe:: bioconductor-allelicimbalance
   :replaces_section_title:
   :noindex:

   Investigates Allele Specific Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AllelicImbalance.html
   :license: GPL-3
   :recipe: /`bioconductor-allelicimbalance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allelicimbalance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allelicimbalance/meta.yaml>`_

   Provides a framework for allelic specific expression investigation using RNA\-seq data.


.. conda:package:: bioconductor-allelicimbalance

   |downloads_bioconductor-allelicimbalance| |docker_bioconductor-allelicimbalance|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-nlme: 
   :depends r-seqinr: 
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

      mamba install bioconductor-allelicimbalance

   and update with::

      mamba update bioconductor-allelicimbalance

  To create a new environment, run::

      mamba create --name myenvname bioconductor-allelicimbalance

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-allelicimbalance:<tag>

   (see `bioconductor-allelicimbalance/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-allelicimbalance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-allelicimbalance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-allelicimbalance
   :alt:   (downloads)
.. |docker_bioconductor-allelicimbalance| image:: https://quay.io/repository/biocontainers/bioconductor-allelicimbalance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-allelicimbalance
.. _`bioconductor-allelicimbalance/tags`: https://quay.io/repository/biocontainers/bioconductor-allelicimbalance?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-allelicimbalance";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-allelicimbalance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-allelicimbalance/README.html