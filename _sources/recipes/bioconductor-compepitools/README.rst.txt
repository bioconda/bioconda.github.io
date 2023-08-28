:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compepitools'
.. highlight: bash

bioconductor-compepitools
=========================

.. conda:recipe:: bioconductor-compepitools
   :replaces_section_title:
   :noindex:

   Tools for computational epigenomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/compEpiTools.html
   :license: GPL
   :recipe: /`bioconductor-compepitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compepitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compepitools/meta.yaml>`_
   :links: biotools: :biotools:`compepitools`

   Tools for computational epigenomics developed for the analysis\, integration and simultaneous visualization of various \(epi\)genomics data types across multiple genomic regions in multiple samples.


.. conda:package:: bioconductor-compepitools

   |downloads_bioconductor-compepitools| |docker_bioconductor-compepitools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.1-0</code>,  <code>1.32.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.1-0``,  ``1.32.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-methylpipe: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-compepitools

   and update with::

      mamba update bioconductor-compepitools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-compepitools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compepitools:<tag>

   (see `bioconductor-compepitools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compepitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compepitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compepitools
   :alt:   (downloads)
.. |docker_bioconductor-compepitools| image:: https://quay.io/repository/biocontainers/bioconductor-compepitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compepitools
.. _`bioconductor-compepitools/tags`: https://quay.io/repository/biocontainers/bioconductor-compepitools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compepitools";
        var versions = ["1.34.1","1.32.0","1.27.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compepitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compepitools/README.html