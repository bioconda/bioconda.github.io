:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synextend'
.. highlight: bash

bioconductor-synextend
======================

.. conda:recipe:: bioconductor-synextend
   :replaces_section_title:
   :noindex:

   Tools for Working With Synteny Objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SynExtend.html
   :license: GPL-3
   :recipe: /`bioconductor-synextend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synextend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synextend/meta.yaml>`_

   Shared order between genomic sequences provide a great deal of information. Synteny objects produced by the R package DECIPHER provides quantitative information about that shared order. SynExtend provides tools for extracting information from Synteny objects.


.. conda:package:: bioconductor-synextend

   |downloads_bioconductor-synextend| |docker_bioconductor-synextend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.2-1</code>,  <code>1.10.2-0</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-decipher: ``>=3.2.0,<3.3.0``
   :depends bioconductor-decipher: ``>=3.2.0,<3.3.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-synextend

   and update with::

      mamba update bioconductor-synextend

  To create a new environment, run::

      mamba create --name myenvname bioconductor-synextend

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synextend:<tag>

   (see `bioconductor-synextend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synextend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synextend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synextend
   :alt:   (downloads)
.. |docker_bioconductor-synextend| image:: https://quay.io/repository/biocontainers/bioconductor-synextend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synextend
.. _`bioconductor-synextend/tags`: https://quay.io/repository/biocontainers/bioconductor-synextend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synextend";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.2","1.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synextend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synextend/README.html