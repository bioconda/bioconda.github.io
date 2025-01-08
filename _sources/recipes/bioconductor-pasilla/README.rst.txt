:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasilla'
.. highlight: bash

bioconductor-pasilla
====================

.. conda:recipe:: bioconductor-pasilla
   :replaces_section_title:
   :noindex:

   Data package with per\-exon and per\-gene read counts of RNA\-seq samples of Pasilla knock\-down by Brooks et al.\, Genome Research 2011.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/pasilla.html
   :license: LGPL
   :recipe: /`bioconductor-pasilla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasilla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasilla/meta.yaml>`_

   This package provides per\-exon and per\-gene read counts computed for selected genes from RNA\-seq data that were presented in the article \"Conservation of an RNA regulatory map between Drosophila and mammals\" by Brooks AN\, Yang L\, Duff MO\, Hansen KD\, Park JW\, Dudoit S\, Brenner SE\, Graveley BR\, Genome Res. 2011 Feb\;21\(2\)\:193\-202\, Epub 2010 Oct 4\, PMID\: 20921232. The experiment studied the effect of RNAi knockdown of Pasilla\, the Drosophila melanogaster ortholog of mammalian NOVA1 and NOVA2\, on the transcriptome.  The package vignette describes how the data provided here were derived from the RNA\-Seq read sequence data that are provided by NCBI Gene Expression Omnibus under accession numbers GSM461176 to GSM461181.


.. conda:package:: bioconductor-pasilla

   |downloads_bioconductor-pasilla| |docker_bioconductor-pasilla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241231``
   :depends bioconductor-dexseq: ``>=1.52.0,<1.53.0``
   :depends curl: 
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

      mamba install bioconductor-pasilla

   and update with::

      mamba update bioconductor-pasilla

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pasilla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pasilla:<tag>

   (see `bioconductor-pasilla/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pasilla| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasilla.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pasilla
   :alt:   (downloads)
.. |docker_bioconductor-pasilla| image:: https://quay.io/repository/biocontainers/bioconductor-pasilla/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasilla
.. _`bioconductor-pasilla/tags`: https://quay.io/repository/biocontainers/bioconductor-pasilla?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pasilla";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasilla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasilla/README.html