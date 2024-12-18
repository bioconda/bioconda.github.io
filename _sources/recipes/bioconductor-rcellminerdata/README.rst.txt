:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcellminerdata'
.. highlight: bash

bioconductor-rcellminerdata
===========================

.. conda:recipe:: bioconductor-rcellminerdata
   :replaces_section_title:
   :noindex:

   rcellminerData\: Molecular Profiles and Drug Response for the NCI\-60 Cell Lines

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/rcellminerData.html
   :license: LGPL-3 + file LICENSE
   :recipe: /`bioconductor-rcellminerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminerdata/meta.yaml>`_

   The NCI\-60 cancer cell line panel has been used over the course of several decades as an anti\-cancer drug screen. This panel was developed as part of the Developmental Therapeutics Program \(DTP\, http\:\/\/dtp.nci.nih.gov\/\) of the U.S. National Cancer Institute \(NCI\). Thousands of compounds have been tested on the NCI\-60\, which have been extensively characterized by many platforms for gene and protein expression\, copy number\, mutation\, and others \(Reinhold\, et al.\, 2012\). The purpose of the CellMiner project \(http\:\/\/discover.nci.nih.gov\/ cellminer\) has been to integrate data from multiple platforms used to analyze the NCI\-60 and to provide a powerful suite of tools for exploration of NCI\-60 data.


.. conda:package:: bioconductor-rcellminerdata

   |downloads_bioconductor-rcellminerdata| |docker_bioconductor-rcellminerdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-1</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.2-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
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

      mamba install bioconductor-rcellminerdata

   and update with::

      mamba update bioconductor-rcellminerdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcellminerdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcellminerdata:<tag>

   (see `bioconductor-rcellminerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcellminerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcellminerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcellminerdata
   :alt:   (downloads)
.. |docker_bioconductor-rcellminerdata| image:: https://quay.io/repository/biocontainers/bioconductor-rcellminerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcellminerdata
.. _`bioconductor-rcellminerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rcellminerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcellminerdata";
        var versions = ["2.28.0","2.24.0","2.22.0","2.20.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcellminerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcellminerdata/README.html