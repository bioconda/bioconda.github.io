:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicfeatures'
.. highlight: bash

bioconductor-genomicfeatures
============================

.. conda:recipe:: bioconductor-genomicfeatures
   :replaces_section_title:
   :noindex:

   Query the gene models of a given organism\/assembly

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GenomicFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfeatures/meta.yaml>`_
   :links: biotools: :biotools:`genomicfeatures`

   Extract the genomic locations of genes\, transcripts\, exons\, introns\, and CDS\, for the gene models stored in a TxDb object. A TxDb object is a small database that contains the gene models of a given organism\/assembly. Bioconductor provides a small collection of TxDb objects in the form of ready\-to\-install TxDb packages for the most commonly studied organisms. Additionally\, the user can easily make a TxDb object \(or package\) for the organism\/assembly of their choice by using the tools from the txdbmaker package.


.. conda:package:: bioconductor-genomicfeatures

   |downloads_bioconductor-genomicfeatures| |docker_bioconductor-genomicfeatures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.1-0</code>,  <code>1.52.1-0</code>,  <code>1.50.2-0</code>,  <code>1.46.1-0</code>,  <code>1.44.0-0</code>,  <code>1.42.2-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.1-0``,  ``1.52.1-0``,  ``1.50.2-0``,  ``1.46.1-0``,  ``1.44.0-0``,  ``1.42.2-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.4-0``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.3-0``,  ``1.30.3-0``,  ``1.30.0-0``,  ``1.28.5-0``,  ``1.26.4-0``,  ``1.26.0-2``,  ``1.24.5-2``,  ``1.24.5-1``,  ``1.24.5-0``,  ``1.22.13-0``,  ``1.22.6-0``,  ``1.22.4-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-genomicfeatures

   and update with::

      mamba update bioconductor-genomicfeatures

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicfeatures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicfeatures:<tag>

   (see `bioconductor-genomicfeatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicfeatures
   :alt:   (downloads)
.. |docker_bioconductor-genomicfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-genomicfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicfeatures
.. _`bioconductor-genomicfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicfeatures";
        var versions = ["1.58.0","1.54.1","1.52.1","1.50.2","1.46.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicfeatures/README.html