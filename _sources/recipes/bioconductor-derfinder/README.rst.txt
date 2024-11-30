:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinder'
.. highlight: bash

bioconductor-derfinder
======================

.. conda:recipe:: bioconductor-derfinder
   :replaces_section_title:
   :noindex:

   Annotation\-agnostic differential expression analysis of RNA\-seq data at base\-pair resolution via the DER Finder approach

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/derfinder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinder/meta.yaml>`_
   :links: biotools: :biotools:`derfinder`

   This package provides functions for annotation\-agnostic differential expression analysis of RNA\-seq data.
   Two implementations of the DER Finder approach are included in this package\: \(1\) single base\-level
   F\-statistics and \(2\) DER identification at the expressed regions\-level.
   The DER Finder approach can also be used to identify differentially bounded ChIP\-seq peaks.



.. conda:package:: bioconductor-derfinder

   |downloads_bioconductor-derfinder| |docker_bioconductor-derfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.2-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.3-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-bumphunter: ``>=1.44.0,<1.45.0``
   :depends bioconductor-derfinderhelper: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfiles: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hmisc: 
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

      mamba install bioconductor-derfinder

   and update with::

      mamba update bioconductor-derfinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-derfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-derfinder:<tag>

   (see `bioconductor-derfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-derfinder
   :alt:   (downloads)
.. |docker_bioconductor-derfinder| image:: https://quay.io/repository/biocontainers/bioconductor-derfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinder
.. _`bioconductor-derfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-derfinder";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinder/README.html