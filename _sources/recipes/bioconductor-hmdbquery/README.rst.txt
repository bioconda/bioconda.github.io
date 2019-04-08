:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmdbquery'
.. highlight: bash

bioconductor-hmdbquery
======================

.. conda:recipe:: bioconductor-hmdbquery
   :replaces_section_title:

   Define utilities for exploration of human metabolome database\, including functions to retrieve specific metabolite entries and data snapshots with pairwise associations \(metabolite\-gene\,\-protein\,\-disease\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hmdbQuery.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmdbquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmdbquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmdbquery/meta.yaml>`_

   


.. conda:package:: bioconductor-hmdbquery

   |downloads_bioconductor-hmdbquery| |docker_bioconductor-hmdbquery|

   :versions: 1.2.0-0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hmdbquery

   and update with::

      conda update bioconductor-hmdbquery

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmdbquery:<tag>

   (see `bioconductor-hmdbquery/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmdbquery| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmdbquery.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hmdbquery| image:: https://quay.io/repository/biocontainers/bioconductor-hmdbquery/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmdbquery
.. _`bioconductor-hmdbquery/tags`: https://quay.io/repository/biocontainers/bioconductor-hmdbquery?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmdbquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmdbquery/README.html