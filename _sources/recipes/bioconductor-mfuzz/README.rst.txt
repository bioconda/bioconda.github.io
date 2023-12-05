:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mfuzz'
.. highlight: bash

bioconductor-mfuzz
==================

.. conda:recipe:: bioconductor-mfuzz
   :replaces_section_title:
   :noindex:

   Soft clustering of time series gene expression data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Mfuzz.html
   :license: GPL-2
   :recipe: /`bioconductor-mfuzz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfuzz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfuzz/meta.yaml>`_

   Package for noise\-robust soft clustering of gene expression time\-series data \(including a graphical user interface\)


.. conda:package:: bioconductor-mfuzz

   |downloads_bioconductor-mfuzz| |docker_bioconductor-mfuzz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-tkwidgets: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
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

      mamba install bioconductor-mfuzz

   and update with::

      mamba update bioconductor-mfuzz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mfuzz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mfuzz:<tag>

   (see `bioconductor-mfuzz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mfuzz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mfuzz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mfuzz
   :alt:   (downloads)
.. |docker_bioconductor-mfuzz| image:: https://quay.io/repository/biocontainers/bioconductor-mfuzz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mfuzz
.. _`bioconductor-mfuzz/tags`: https://quay.io/repository/biocontainers/bioconductor-mfuzz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mfuzz";
        var versions = ["2.62.0","2.60.0","2.58.0","2.54.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mfuzz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mfuzz/README.html