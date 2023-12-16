:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glimma'
.. highlight: bash

bioconductor-glimma
===================

.. conda:recipe:: bioconductor-glimma
   :replaces_section_title:
   :noindex:

   Interactive HTML graphics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Glimma.html
   :license: GPL-3
   :recipe: /`bioconductor-glimma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glimma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glimma/meta.yaml>`_
   :links: biotools: :biotools:`glimma`, doi: :doi:`10.1101/096107`

   This package generates interactive visualisations for analysis of RNA\-sequencing data using output from limma\, edgeR or DESeq2 packages in an HTML page. The interactions are built on top of the popular static representations of analysis results in order to provide additional information.


.. conda:package:: bioconductor-glimma

   |downloads_bioconductor-glimma| |docker_bioconductor-glimma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-htmlwidgets: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-glimma

   and update with::

      mamba update bioconductor-glimma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-glimma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glimma:<tag>

   (see `bioconductor-glimma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glimma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glimma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glimma
   :alt:   (downloads)
.. |docker_bioconductor-glimma| image:: https://quay.io/repository/biocontainers/bioconductor-glimma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glimma
.. _`bioconductor-glimma/tags`: https://quay.io/repository/biocontainers/bioconductor-glimma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-glimma";
        var versions = ["2.12.0","2.10.0","2.8.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glimma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glimma/README.html