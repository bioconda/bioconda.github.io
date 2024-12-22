:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harmonizedtcgadata'
.. highlight: bash

bioconductor-harmonizedtcgadata
===============================

.. conda:recipe:: bioconductor-harmonizedtcgadata
   :replaces_section_title:
   :noindex:

   Processed Harmonized TCGA Data of Five Selected Cancer Types

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HarmonizedTCGAData.html
   :license: GPL-3
   :recipe: /`bioconductor-harmonizedtcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harmonizedtcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harmonizedtcgadata/meta.yaml>`_

   This package contains the processed harmonized TCGA data of five cancer types used in \"Tianle Ma and Aidong Zhang\, Integrate Multi\-omic Data Using Affinity Network Fusion \(ANF\) for Cancer Patient Clustering\".


.. conda:package:: bioconductor-harmonizedtcgadata

   |downloads_bioconductor-harmonizedtcgadata| |docker_bioconductor-harmonizedtcgadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends curl: 
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

      mamba install bioconductor-harmonizedtcgadata

   and update with::

      mamba update bioconductor-harmonizedtcgadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-harmonizedtcgadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harmonizedtcgadata:<tag>

   (see `bioconductor-harmonizedtcgadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harmonizedtcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harmonizedtcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harmonizedtcgadata
   :alt:   (downloads)
.. |docker_bioconductor-harmonizedtcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-harmonizedtcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harmonizedtcgadata
.. _`bioconductor-harmonizedtcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-harmonizedtcgadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-harmonizedtcgadata";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harmonizedtcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harmonizedtcgadata/README.html