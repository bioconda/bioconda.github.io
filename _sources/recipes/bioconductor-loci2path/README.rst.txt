:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-loci2path'
.. highlight: bash

bioconductor-loci2path
======================

.. conda:recipe:: bioconductor-loci2path
   :replaces_section_title:
   :noindex:

   Loci2path\: regulatory annotation of genomic intervals based on tissue\-specific expression QTLs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/loci2path.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-loci2path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loci2path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loci2path/meta.yaml>`_

   loci2path performs statistics\-rigorous enrichment analysis of eQTLs in genomic regions of interest. Using eQTL collections provided by the Genotype\-Tissue Expression \(GTEx\) project and pathway collections from MSigDB.


.. conda:package:: bioconductor-loci2path

   |downloads_bioconductor-loci2path| |docker_bioconductor-loci2path|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-wordcloud: 
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

      mamba install bioconductor-loci2path

   and update with::

      mamba update bioconductor-loci2path

  To create a new environment, run::

      mamba create --name myenvname bioconductor-loci2path

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-loci2path:<tag>

   (see `bioconductor-loci2path/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-loci2path| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-loci2path.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-loci2path
   :alt:   (downloads)
.. |docker_bioconductor-loci2path| image:: https://quay.io/repository/biocontainers/bioconductor-loci2path/status
   :target: https://quay.io/repository/biocontainers/bioconductor-loci2path
.. _`bioconductor-loci2path/tags`: https://quay.io/repository/biocontainers/bioconductor-loci2path?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-loci2path";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-loci2path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-loci2path/README.html