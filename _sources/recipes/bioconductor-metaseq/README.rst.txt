:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaseq'
.. highlight: bash

bioconductor-metaseq
====================

.. conda:recipe:: bioconductor-metaseq
   :replaces_section_title:
   :noindex:

   Meta\-analysis of RNA\-Seq count data in multiple studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/metaSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseq/meta.yaml>`_
   :links: biotools: :biotools:`metaseq`, doi: :doi:`10.1038/nmeth.3252`

   The probabilities by one\-sided NOISeq are combined by Fisher\'s method or Stouffer\'s method


.. conda:package:: bioconductor-metaseq

   |downloads_bioconductor-metaseq| |docker_bioconductor-metaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-noiseq: ``>=2.44.0,<2.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
   :depends r-snow: 
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

      mamba install bioconductor-metaseq

   and update with::

      mamba update bioconductor-metaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaseq:<tag>

   (see `bioconductor-metaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaseq
   :alt:   (downloads)
.. |docker_bioconductor-metaseq| image:: https://quay.io/repository/biocontainers/bioconductor-metaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaseq
.. _`bioconductor-metaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-metaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metaseq";
        var versions = ["1.40.0","1.38.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaseq/README.html