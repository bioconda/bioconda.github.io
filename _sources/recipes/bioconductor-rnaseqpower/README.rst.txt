:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqpower'
.. highlight: bash

bioconductor-rnaseqpower
========================

.. conda:recipe:: bioconductor-rnaseqpower
   :replaces_section_title:

   RNA\-seq\, sample size

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RNASeqPower.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-rnaseqpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqpower/meta.yaml>`_
   :links: biotools: :biotools:`rnaseqpower`, doi: :doi:`10.1089/cmb.2012.0283`

   


.. conda:package:: bioconductor-rnaseqpower

   |downloads_bioconductor-rnaseqpower| |docker_bioconductor-rnaseqpower|

   :versions: 1.22.1-0, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqpower

   and update with::

      conda update bioconductor-rnaseqpower

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqpower:<tag>

   (see `bioconductor-rnaseqpower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqpower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqpower.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqpower| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqpower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqpower
.. _`bioconductor-rnaseqpower/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqpower?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqpower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqpower/README.html