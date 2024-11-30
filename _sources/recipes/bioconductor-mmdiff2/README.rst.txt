:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmdiff2'
.. highlight: bash

bioconductor-mmdiff2
====================

.. conda:recipe:: bioconductor-mmdiff2
   :replaces_section_title:
   :noindex:

   Statistical Testing for ChIP\-Seq data sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MMDiff2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mmdiff2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiff2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiff2/meta.yaml>`_
   :links: biotools: :biotools:`mmdiff2`, doi: :doi:`10.1038/nmeth.3252`

   This package detects statistically significant differences between read enrichment profiles in different ChIP\-Seq samples. To take advantage of shape differences it uses Kernel methods \(Maximum Mean Discrepancy\, MMD\).


.. conda:package:: bioconductor-mmdiff2

   |downloads_bioconductor-mmdiff2| |docker_bioconductor-mmdiff2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-mmdiff2

   and update with::

      mamba update bioconductor-mmdiff2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mmdiff2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmdiff2:<tag>

   (see `bioconductor-mmdiff2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmdiff2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmdiff2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmdiff2
   :alt:   (downloads)
.. |docker_bioconductor-mmdiff2| image:: https://quay.io/repository/biocontainers/bioconductor-mmdiff2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmdiff2
.. _`bioconductor-mmdiff2/tags`: https://quay.io/repository/biocontainers/bioconductor-mmdiff2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmdiff2";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmdiff2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmdiff2/README.html