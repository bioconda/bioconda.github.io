:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adsplit'
.. highlight: bash

bioconductor-adsplit
====================

.. conda:recipe:: bioconductor-adsplit
   :replaces_section_title:
   :noindex:

   Annotation\-Driven Clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/adSplit.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit/meta.yaml>`_

   This package implements clustering of microarray gene expression profiles according to functional annotations. For each term genes are annotated to\, splits into two subclasses are computed and a significance of the supporting gene set is determined.


.. conda:package:: bioconductor-adsplit

   |downloads_bioconductor-adsplit| |docker_bioconductor-adsplit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0a0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: ``>=1.9.1``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-adsplit

   and update with::

      mamba update bioconductor-adsplit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adsplit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adsplit:<tag>

   (see `bioconductor-adsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adsplit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adsplit
   :alt:   (downloads)
.. |docker_bioconductor-adsplit| image:: https://quay.io/repository/biocontainers/bioconductor-adsplit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adsplit
.. _`bioconductor-adsplit/tags`: https://quay.io/repository/biocontainers/bioconductor-adsplit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adsplit";
        var versions = ["1.76.0","1.76.0","1.72.0","1.70.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adsplit/README.html