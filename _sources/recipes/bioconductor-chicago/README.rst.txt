:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chicago'
.. highlight: bash

bioconductor-chicago
====================

.. conda:recipe:: bioconductor-chicago
   :replaces_section_title:
   :noindex:

   CHiCAGO\: Capture Hi\-C Analysis of Genomic Organization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Chicago.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chicago <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chicago>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chicago/meta.yaml>`_
   :links: biotools: :biotools:`chicago`

   A pipeline for analysing Capture Hi\-C data.


.. conda:package:: bioconductor-chicago

   |downloads_bioconductor-chicago| |docker_bioconductor-chicago|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-delaporte: 
   :depends r-hmisc: 
   :depends r-mass: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-chicago

   and update with::

      mamba update bioconductor-chicago

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chicago

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chicago:<tag>

   (see `bioconductor-chicago/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chicago| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chicago.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chicago
   :alt:   (downloads)
.. |docker_bioconductor-chicago| image:: https://quay.io/repository/biocontainers/bioconductor-chicago/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chicago
.. _`bioconductor-chicago/tags`: https://quay.io/repository/biocontainers/bioconductor-chicago?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chicago";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chicago/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chicago/README.html