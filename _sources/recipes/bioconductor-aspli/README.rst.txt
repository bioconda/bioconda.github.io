:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aspli'
.. highlight: bash

bioconductor-aspli
==================

.. conda:recipe:: bioconductor-aspli
   :replaces_section_title:
   :noindex:

   Analysis of Alternative Splicing Using RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ASpli.html
   :license: GPL
   :recipe: /`bioconductor-aspli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspli/meta.yaml>`_
   :links: biotools: :biotools:`aspli`, doi: :doi:`10.1038/nmeth.3252`

   Integrative pipeline for the analysis of alternative splicing using RNAseq.


.. conda:package:: bioconductor-aspli

   |downloads_bioconductor-aspli| |docker_bioconductor-aspli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-pbmcapply: 
   :depends r-tidyr: 
   :depends r-upsetr: 
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

      mamba install bioconductor-aspli

   and update with::

      mamba update bioconductor-aspli

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aspli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aspli:<tag>

   (see `bioconductor-aspli/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aspli| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aspli.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aspli
   :alt:   (downloads)
.. |docker_bioconductor-aspli| image:: https://quay.io/repository/biocontainers/bioconductor-aspli/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aspli
.. _`bioconductor-aspli/tags`: https://quay.io/repository/biocontainers/bioconductor-aspli?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aspli";
        var versions = ["2.12.0","2.10.0","2.8.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aspli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aspli/README.html