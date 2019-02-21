:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globalseq'
.. highlight: bash

bioconductor-globalseq
======================

.. conda:recipe:: bioconductor-globalseq
   :replaces_section_title:

   The method may be conceptualised as a test of overall significance in regression analysis\, where the response variable is overdispersed and the number of explanatory variables exceeds the sample size. Useful for testing for association between RNA\-Seq and high\-dimensional data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/globalSeq.html
   :license: GPL-3
   :recipe: /`bioconductor-globalseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalseq/meta.yaml>`_
   :links: biotools: :biotools:`globalseq`

   


.. conda:package:: bioconductor-globalseq

   |downloads_bioconductor-globalseq| |docker_bioconductor-globalseq|

   :versions: 1.10.1-0, 1.8.0-0, 1.6.0-0, 1.4.2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-globalseq

   and update with::

      conda update bioconductor-globalseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-globalseq:<tag>

   (see `bioconductor-globalseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-globalseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globalseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-globalseq| image:: https://quay.io/repository/biocontainers/bioconductor-globalseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globalseq
.. _`bioconductor-globalseq/tags`: https://quay.io/repository/biocontainers/bioconductor-globalseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-globalseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-globalseq/README.html