:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-organism.dplyr'
.. highlight: bash

bioconductor-organism.dplyr
===========================

.. conda:recipe:: bioconductor-organism.dplyr
   :replaces_section_title:
   :noindex:

   dplyr\-based Access to Bioconductor Annotation Resources

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Organism.dplyr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-organism.dplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organism.dplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organism.dplyr/meta.yaml>`_

   This package provides an alternative interface to Bioconductor \'annotation\' resources\, in particular the gene identifier mapping functionality of the \'org\' packages \(e.g.\, org.Hs.eg.db\) and the genome coordinate functionality of the \'TxDb\' packages \(e.g.\, TxDb.Hsapiens.UCSC.hg38.knownGene\).


.. conda:package:: bioconductor-organism.dplyr

   |downloads_bioconductor-organism.dplyr| |docker_bioconductor-organism.dplyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationfilter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dplyr: ``>=0.7.0``
   :depends r-rlang: 
   :depends r-rsqlite: 
   :depends r-tibble: 
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

      mamba install bioconductor-organism.dplyr

   and update with::

      mamba update bioconductor-organism.dplyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-organism.dplyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-organism.dplyr:<tag>

   (see `bioconductor-organism.dplyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-organism.dplyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-organism.dplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-organism.dplyr
   :alt:   (downloads)
.. |docker_bioconductor-organism.dplyr| image:: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr
.. _`bioconductor-organism.dplyr/tags`: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-organism.dplyr";
        var versions = ["1.30.1","1.28.0","1.26.0","1.22.1","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-organism.dplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-organism.dplyr/README.html