:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqrdata'
.. highlight: bash

bioconductor-rnaseqrdata
========================

.. conda:recipe:: bioconductor-rnaseqrdata
   :replaces_section_title:

   RNASeqRData is a helper experiment package for vignette demonstration purpose in RNASeqR software package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RNASeqRData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnaseqrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqrdata/meta.yaml>`_

   


.. conda:package:: bioconductor-rnaseqrdata

   |downloads_bioconductor-rnaseqrdata| |docker_bioconductor-rnaseqrdata|

   :versions: 1.0.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqrdata

   and update with::

      conda update bioconductor-rnaseqrdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqrdata:<tag>

   (see `bioconductor-rnaseqrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqrdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqrdata| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqrdata
.. _`bioconductor-rnaseqrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqrdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqrdata/README.html