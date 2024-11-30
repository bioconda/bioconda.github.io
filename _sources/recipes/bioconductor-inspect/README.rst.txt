:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inspect'
.. highlight: bash

bioconductor-inspect
====================

.. conda:recipe:: bioconductor-inspect
   :replaces_section_title:
   :noindex:

   Modeling RNA synthesis\, processing and degradation with RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/INSPEcT.html
   :license: GPL-2
   :recipe: /`bioconductor-inspect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect/meta.yaml>`_
   :links: biotools: :biotools:`inspect`

   INSPEcT \(INference of Synthesis\, Processing and dEgradation rates from Transcriptomic data\) RNA\-seq data in time\-course experiments or steady\-state conditions\, with or without the support of nascent RNA data.


.. conda:package:: bioconductor-inspect

   |downloads_bioconductor-inspect| |docker_bioconductor-inspect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-plgem: ``>=1.72.0,<1.73.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-desolve: 
   :depends r-gdata: 
   :depends r-kernsmooth: 
   :depends r-proc: 
   :depends r-rootsolve: 
   :depends r-shiny: 
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

      mamba install bioconductor-inspect

   and update with::

      mamba update bioconductor-inspect

  To create a new environment, run::

      mamba create --name myenvname bioconductor-inspect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inspect:<tag>

   (see `bioconductor-inspect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inspect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inspect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inspect
   :alt:   (downloads)
.. |docker_bioconductor-inspect| image:: https://quay.io/repository/biocontainers/bioconductor-inspect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inspect
.. _`bioconductor-inspect/tags`: https://quay.io/repository/biocontainers/bioconductor-inspect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-inspect";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inspect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inspect/README.html