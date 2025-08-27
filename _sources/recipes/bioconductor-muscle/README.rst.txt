:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscle'
.. highlight: bash

bioconductor-muscle
===================

.. conda:recipe:: bioconductor-muscle
   :replaces_section_title:
   :noindex:

   Multiple Sequence Alignment with MUSCLE

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/muscle.html
   :license: Unlimited
   :recipe: /`bioconductor-muscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscle/meta.yaml>`_

   MUSCLE performs multiple sequence alignments of nucleotide or amino acid sequences.


.. conda:package:: bioconductor-muscle

   |downloads_bioconductor-muscle| |docker_bioconductor-muscle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.48.0-0</code>,  <code>3.44.0-0</code>,  <code>3.42.0-0</code>,  <code>3.40.0-1</code>,  <code>3.40.0-0</code>,  <code>3.36.0-2</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.34.0-0</code>,  </span></summary>
      

      ``3.48.0-0``,  ``3.44.0-0``,  ``3.42.0-0``,  ``3.40.0-1``,  ``3.40.0-0``,  ``3.36.0-2``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-1``,  ``3.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-muscle

   and update with::

      mamba update bioconductor-muscle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-muscle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-muscle:<tag>

   (see `bioconductor-muscle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-muscle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscle
   :alt:   (downloads)
.. |docker_bioconductor-muscle| image:: https://quay.io/repository/biocontainers/bioconductor-muscle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscle
.. _`bioconductor-muscle/tags`: https://quay.io/repository/biocontainers/bioconductor-muscle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-muscle";
        var versions = ["3.48.0","3.44.0","3.42.0","3.40.0","3.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscle/README.html