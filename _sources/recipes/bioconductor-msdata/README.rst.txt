:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msdata'
.. highlight: bash

bioconductor-msdata
===================

.. conda:recipe:: bioconductor-msdata
   :replaces_section_title:

   Ion Trap positive ionization mode data in mzData file format.  Subset from 500\-850 m\/z and 1190\-1310 seconds\, incl. MS2 and MS3\, intensity threshold 100.000. Extracts from FTICR Apex III\, m\/z 400\-450.  Subset of UPLC \- Bruker micrOTOFq data\, both mzData\, mzML and mz5. LC\-MSMS and MRM files from proteomics experiments. PSI mzIdentML example files for various search engines.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/msdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-msdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdata/meta.yaml>`_

   


.. conda:package:: bioconductor-msdata

   |downloads_bioconductor-msdata| |docker_bioconductor-msdata|

   :versions: 0.25.2-0, 0.24.1-0, 0.24.0-0, 0.22.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msdata

   and update with::

      conda update bioconductor-msdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msdata:<tag>

   (see `bioconductor-msdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msdata
   :alt:   (downloads)
.. |docker_bioconductor-msdata| image:: https://quay.io/repository/biocontainers/bioconductor-msdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msdata
.. _`bioconductor-msdata/tags`: https://quay.io/repository/biocontainers/bioconductor-msdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msdata/README.html