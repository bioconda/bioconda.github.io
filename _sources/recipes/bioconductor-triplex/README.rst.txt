:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-triplex'
.. highlight: bash

bioconductor-triplex
====================

.. conda:recipe:: bioconductor-triplex
   :replaces_section_title:
   :noindex:

   Search and visualize intramolecular triplex\-forming sequences in DNA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/triplex.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-triplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triplex/meta.yaml>`_
   :links: biotools: :biotools:`triplex`

   This package provides functions for identification and visualization of potential intramolecular triplex patterns in DNA sequence. The main functionality is to detect the positions of subsequences capable of folding into an intramolecular triplex \(H\-DNA\) in a much larger sequence. The potential H\-DNA \(triplexes\) should be made of as many cannonical nucleotide triplets as possible. The package includes visualization showing the exact base\-pairing in 1D\, 2D or 3D.


.. conda:package:: bioconductor-triplex

   |downloads_bioconductor-triplex| |docker_bioconductor-triplex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-triplex

   and update with::

      mamba update bioconductor-triplex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-triplex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-triplex:<tag>

   (see `bioconductor-triplex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-triplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-triplex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-triplex
   :alt:   (downloads)
.. |docker_bioconductor-triplex| image:: https://quay.io/repository/biocontainers/bioconductor-triplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-triplex
.. _`bioconductor-triplex/tags`: https://quay.io/repository/biocontainers/bioconductor-triplex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-triplex";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-triplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-triplex/README.html