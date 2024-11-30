:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-funtoonorm'
.. highlight: bash

bioconductor-funtoonorm
=======================

.. conda:recipe:: bioconductor-funtoonorm
   :replaces_section_title:
   :noindex:

   Normalization Procedure for Infinium HumanMethylation450 BeadChip Kit

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/funtooNorm.html
   :license: GPL-3
   :recipe: /`bioconductor-funtoonorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funtoonorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funtoonorm/meta.yaml>`_

   Provides a function to normalize Illumina Infinium Human Methylation 450 BeadChip \(Illumina 450K\)\, correcting for tissue and\/or cell type.


.. conda:package:: bioconductor-funtoonorm

   |downloads_bioconductor-funtoonorm| |docker_bioconductor-funtoonorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
   :depends r-pls: 
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

      mamba install bioconductor-funtoonorm

   and update with::

      mamba update bioconductor-funtoonorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-funtoonorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-funtoonorm:<tag>

   (see `bioconductor-funtoonorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-funtoonorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-funtoonorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-funtoonorm
   :alt:   (downloads)
.. |docker_bioconductor-funtoonorm| image:: https://quay.io/repository/biocontainers/bioconductor-funtoonorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-funtoonorm
.. _`bioconductor-funtoonorm/tags`: https://quay.io/repository/biocontainers/bioconductor-funtoonorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-funtoonorm";
        var versions = ["1.26.0","1.24.0","1.22.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-funtoonorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-funtoonorm/README.html