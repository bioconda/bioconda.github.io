:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-past'
.. highlight: bash

bioconductor-past
=================

.. conda:recipe:: bioconductor-past
   :replaces_section_title:
   :noindex:

   Pathway Association Study Tool \(PAST\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PAST.html
   :license: GPL (>=3) + file LICENSE
   :recipe: /`bioconductor-past <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-past>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-past/meta.yaml>`_

   PAST takes GWAS output and assigns SNPs to genes\, uses those genes to find pathways associated with the genes\, and plots pathways based on significance. Implements methods for reading GWAS input data\, finding genes associated with SNPs\, calculating enrichment score and significance of pathways\, and plotting pathways.


.. conda:package:: bioconductor-past

   |downloads_bioconductor-past| |docker_bioconductor-past|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-iterators: 
   :depends r-rlang: 
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

      mamba install bioconductor-past

   and update with::

      mamba update bioconductor-past

  To create a new environment, run::

      mamba create --name myenvname bioconductor-past

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-past:<tag>

   (see `bioconductor-past/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-past| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-past.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-past
   :alt:   (downloads)
.. |docker_bioconductor-past| image:: https://quay.io/repository/biocontainers/bioconductor-past/status
   :target: https://quay.io/repository/biocontainers/bioconductor-past
.. _`bioconductor-past/tags`: https://quay.io/repository/biocontainers/bioconductor-past?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-past";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-past/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-past/README.html