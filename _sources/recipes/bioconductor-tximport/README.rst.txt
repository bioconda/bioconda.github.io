:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tximport'
.. highlight: bash

bioconductor-tximport
=====================

.. conda:recipe:: bioconductor-tximport
   :replaces_section_title:
   :noindex:

   Import and summarize transcript\-level estimates for transcript\- and gene\-level analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tximport.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-tximport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximport/meta.yaml>`_
   :links: biotools: :biotools:`tximport`

   Imports transcript\-level abundance\, estimated counts and transcript lengths\, and summarizes into matrices for use with downstream gene\-level analysis packages. Average transcript length\, weighted by sample\-specific transcript abundance estimates\, is provided as a matrix which can be used as an offset for different expression of gene\-level counts.


.. conda:package:: bioconductor-tximport

   |downloads_bioconductor-tximport| |docker_bioconductor-tximport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.3-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-tximport

   and update with::

      mamba update bioconductor-tximport

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tximport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tximport:<tag>

   (see `bioconductor-tximport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tximport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tximport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tximport
   :alt:   (downloads)
.. |docker_bioconductor-tximport| image:: https://quay.io/repository/biocontainers/bioconductor-tximport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tximport
.. _`bioconductor-tximport/tags`: https://quay.io/repository/biocontainers/bioconductor-tximport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tximport";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tximport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tximport/README.html