:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genebreak'
.. highlight: bash

bioconductor-genebreak
======================

.. conda:recipe:: bioconductor-genebreak
   :replaces_section_title:
   :noindex:

   Gene Break Detection

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GeneBreak.html
   :license: GPL-2
   :recipe: /`bioconductor-genebreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genebreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genebreak/meta.yaml>`_
   :links: biotools: :biotools:`genebreak`, doi: :doi:`10.12688/f1000research.9259.1`

   Recurrent breakpoint gene detection on copy number aberration profiles.


.. conda:package:: bioconductor-genebreak

   |downloads_bioconductor-genebreak| |docker_bioconductor-genebreak|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cghbase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-cghcall: ``>=2.64.0,<2.65.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-qdnaseq: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-genebreak

   and update with::

      mamba update bioconductor-genebreak

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genebreak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genebreak:<tag>

   (see `bioconductor-genebreak/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genebreak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genebreak.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genebreak
   :alt:   (downloads)
.. |docker_bioconductor-genebreak| image:: https://quay.io/repository/biocontainers/bioconductor-genebreak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genebreak
.. _`bioconductor-genebreak/tags`: https://quay.io/repository/biocontainers/bioconductor-genebreak?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genebreak";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genebreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genebreak/README.html