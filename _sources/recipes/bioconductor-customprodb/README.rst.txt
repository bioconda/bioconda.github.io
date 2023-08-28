:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-customprodb'
.. highlight: bash

bioconductor-customprodb
========================

.. conda:recipe:: bioconductor-customprodb
   :replaces_section_title:
   :noindex:

   Generate customized protein database from NGS data\, with a focus on RNA\-Seq data\, for proteomics search

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/customProDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-customprodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-customprodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-customprodb/meta.yaml>`_

   Database search is the most widely used approach for peptide and protein identification in mass spectrometry\-based proteomics studies. Our previous study showed that sample\-specific protein databases derived from RNA\-Seq data can better approximate the real protein pools in the samples and thus improve protein identification. More importantly\, single nucleotide variations\, short insertion and deletions and novel junctions identified from RNA\-Seq data make protein database more complete and sample\-specific. Here\, we report an R package customProDB that enables the easy generation of customized databases from RNA\-Seq data for proteomics search. This work bridges genomics and proteomics studies and facilitates cross\-omics data integration.


.. conda:package:: bioconductor-customprodb

   |downloads_bioconductor-customprodb| |docker_bioconductor-customprodb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-ahocorasicktrie: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-plyr: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-stringr: 
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

      mamba install bioconductor-customprodb

   and update with::

      mamba update bioconductor-customprodb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-customprodb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-customprodb:<tag>

   (see `bioconductor-customprodb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-customprodb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-customprodb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-customprodb
   :alt:   (downloads)
.. |docker_bioconductor-customprodb| image:: https://quay.io/repository/biocontainers/bioconductor-customprodb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-customprodb
.. _`bioconductor-customprodb/tags`: https://quay.io/repository/biocontainers/bioconductor-customprodb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-customprodb";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-customprodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-customprodb/README.html