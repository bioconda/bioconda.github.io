:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-antiprofilesdata'
.. highlight: bash

bioconductor-antiprofilesdata
=============================

.. conda:recipe:: bioconductor-antiprofilesdata
   :replaces_section_title:

   Normal colon and cancer preprocessed affy data for antiProfile building.

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/antiProfilesData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-antiprofilesdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofilesdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofilesdata/meta.yaml>`_

   Colon normal tissue and cancer samples used in Corrada Bravo\, et al. gene expression anti\-profiles paper\: BMC Bioinformatics 2012\, 13\:272 doi\:10.1186\/1471\-2105\-13\-272. Measurements are z\-scores obtained from the GeneExpression Barcode in the \'frma\' package


.. conda:package:: bioconductor-antiprofilesdata

   |downloads_bioconductor-antiprofilesdata| |docker_bioconductor-antiprofilesdata|

   :versions: 1.22.0-0, 1.20.0-1, 1.18.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-antiprofilesdata

   and update with::

      conda update bioconductor-antiprofilesdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-antiprofilesdata:<tag>

   (see `bioconductor-antiprofilesdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-antiprofilesdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-antiprofilesdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-antiprofilesdata
   :alt:   (downloads)
.. |docker_bioconductor-antiprofilesdata| image:: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata
.. _`bioconductor-antiprofilesdata/tags`: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-antiprofilesdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-antiprofilesdata/README.html