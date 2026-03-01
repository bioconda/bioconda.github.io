:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cner'
.. highlight: bash

bioconductor-cner
=================

.. conda:recipe:: bioconductor-cner
   :replaces_section_title:
   :noindex:

   CNE Detection and Visualization.

   :homepage: https://bioconductor.org/packages/3.21/bioc/html/CNEr.html
   :license: GPL / GPL-2.0-or-later
   :recipe: /`bioconductor-cner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cner/meta.yaml>`_
   :links: biotools: :biotools:`cner`, doi: :doi:`10.1038/nmeth.3252`

   Large\-scale identification and advanced visualization of sets of conserved noncoding elements.


.. conda:package:: bioconductor-cner

   |downloads_bioconductor-cner| |docker_bioconductor-cner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.43.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.43.0-0``,  ``1.42.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.88.0,<1.89.0``
   :depends bioconductor-annotate: ``>=1.88.0,<1.89.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends bioconductor-go.db: ``>=3.22.0,<3.23.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends bioconductor-keggrest: ``>=1.50.0,<1.51.0a0``
   :depends bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends bioconductor-pwalign: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dbi: ``>=0.7``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-powerlaw: ``>=0.60.3``
   :depends r-r.utils: ``>=2.3.0``
   :depends r-readr: ``>=0.2.2``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-rsqlite: ``>=0.11.4``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cner

   and update with::

      mamba update bioconductor-cner

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cner:<tag>

   (see `bioconductor-cner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cner
   :alt:   (downloads)
.. |docker_bioconductor-cner| image:: https://quay.io/repository/biocontainers/bioconductor-cner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cner
.. _`bioconductor-cner/tags`: https://quay.io/repository/biocontainers/bioconductor-cner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cner";
        var versions = ["1.46.0","1.43.0","1.42.0","1.38.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cner/README.html