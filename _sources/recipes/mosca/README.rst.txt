:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosca'
.. highlight: bash

mosca
=====

.. conda:recipe:: mosca
   :replaces_section_title:
   :noindex:

   MOSCA \- Meta\-Omics Software for Community Analysis

   :homepage: https://github.com/iquasere/MOSCA
   :documentation: https://github.com/iquasere/MOSCA/wiki
   
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`mosca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosca/meta.yaml>`_

   MOSCA \(portuguese for fly\) is a pipeline designed for performing metagenomics \(MG\)\,
   metatranscriptomics \(MT\) and metaproteomics \(MP\) integrated data analysis\, 
   in a mostly local and fully automated workflow. Metagenomics is used to build 
   a reference database for MT and MP\, beginning with preprocessing of data for
   removal of Illumina adapters and lower quality regions\, folowed by assembly
   of reads into contigs\, gene calling on the contigs and homology\-based and 
   domain\-based annotation of identified proteins\, using the UniProt and COG 
   databases\, respectively. If available\, MT reads are then aligned to the ORFs 
   for gene expression quantification\, and MP spectra are submitted for
   Peptide\-to\-Spectrum matching\, with the annotated ORFs as reference database.
   Final steps include differential expression analysis for both MT and MP\, and
   metabolic pathways analysis through KEGG Pathways.



.. conda:package:: mosca

   |downloads_mosca| |docker_mosca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.9``
   :depends snakemake: 
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

      mamba install mosca

   and update with::

      mamba update mosca

  To create a new environment, run::

      mamba create --name myenvname mosca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mosca:<tag>

   (see `mosca/tags`_ for valid values for ``<tag>``)


.. |downloads_mosca| image:: https://img.shields.io/conda/dn/bioconda/mosca.svg?style=flat
   :target: https://anaconda.org/bioconda/mosca
   :alt:   (downloads)
.. |docker_mosca| image:: https://quay.io/repository/biocontainers/mosca/status
   :target: https://quay.io/repository/biocontainers/mosca
.. _`mosca/tags`: https://quay.io/repository/biocontainers/mosca?tab=tags


.. raw:: html

    <script>
        var package = "mosca";
        var versions = ["2.1.0","1.3.5","1.3.4","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosca/README.html