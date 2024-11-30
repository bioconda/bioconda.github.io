:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methtargetedngs'
.. highlight: bash

bioconductor-methtargetedngs
============================

.. conda:recipe:: bioconductor-methtargetedngs
   :replaces_section_title:
   :noindex:

   Perform Methylation Analysis on Next Generation Sequencing Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MethTargetedNGS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methtargetedngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methtargetedngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methtargetedngs/meta.yaml>`_
   :links: biotools: :biotools:`methtargetedngs`, doi: :doi:`10.1038/nmeth.3252`

   Perform step by step methylation analysis of Next Generation Sequencing data.


.. conda:package:: bioconductor-methtargetedngs

   |downloads_bioconductor-methtargetedngs| |docker_bioconductor-methtargetedngs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends hmmer: ``>=3``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-seqinr: 
   :depends r-stringr: 
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

      mamba install bioconductor-methtargetedngs

   and update with::

      mamba update bioconductor-methtargetedngs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methtargetedngs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methtargetedngs:<tag>

   (see `bioconductor-methtargetedngs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methtargetedngs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methtargetedngs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methtargetedngs
   :alt:   (downloads)
.. |docker_bioconductor-methtargetedngs| image:: https://quay.io/repository/biocontainers/bioconductor-methtargetedngs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methtargetedngs
.. _`bioconductor-methtargetedngs/tags`: https://quay.io/repository/biocontainers/bioconductor-methtargetedngs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methtargetedngs";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methtargetedngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methtargetedngs/README.html