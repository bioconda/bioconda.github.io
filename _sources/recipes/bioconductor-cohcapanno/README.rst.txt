:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cohcapanno'
.. highlight: bash

bioconductor-cohcapanno
=======================

.. conda:recipe:: bioconductor-cohcapanno
   :replaces_section_title:
   :noindex:

   Annotations for City of Hope CpG Island Analysis Pipeline

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/COHCAPanno.html
   :license: GPL-3
   :recipe: /`bioconductor-cohcapanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcapanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcapanno/meta.yaml>`_

   Provides genomic location\, nearby CpG island and nearby gene information for common Illumina methylation array platforms


.. conda:package:: bioconductor-cohcapanno

   |downloads_bioconductor-cohcapanno| |docker_bioconductor-cohcapanno|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-cohcapanno

   and update with::

      mamba update bioconductor-cohcapanno

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cohcapanno

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cohcapanno:<tag>

   (see `bioconductor-cohcapanno/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cohcapanno| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cohcapanno.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cohcapanno
   :alt:   (downloads)
.. |docker_bioconductor-cohcapanno| image:: https://quay.io/repository/biocontainers/bioconductor-cohcapanno/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cohcapanno
.. _`bioconductor-cohcapanno/tags`: https://quay.io/repository/biocontainers/bioconductor-cohcapanno?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cohcapanno";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.33.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cohcapanno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cohcapanno/README.html