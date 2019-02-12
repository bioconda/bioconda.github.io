:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmdiff'
.. highlight: bash

bioconductor-mmdiff
===================

.. conda:recipe:: bioconductor-mmdiff
   :replaces_section_title:

   This package detects statistically significant difference between read enrichment profiles in different ChIP\-Seq samples. To take advantage of shape differences it uses Kernel methods \(Maximum Mean Discrepancy\, MMD\).

   :homepage: http://bioconductor.org/packages/release/bioc/html/MMDiff.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mmdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiff/meta.yaml>`_

   


.. conda:package:: bioconductor-mmdiff

   |downloads_bioconductor-mmdiff| |docker_bioconductor-mmdiff|

   :versions: 1.10.0-0
   
   :depends bioconductor-biobase: 
   
   :depends bioconductor-diffbind: 
   
   :depends bioconductor-genomicranges: 
   
   :depends bioconductor-iranges: 
   
   :depends bioconductor-rsamtools: 
   
   :depends r: >=2.14.0
   
   :depends r-gmd: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmdiff

   and update with::

      conda update bioconductor-mmdiff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mmdiff:<tag>

   (see `bioconductor-mmdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmdiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmdiff.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mmdiff| image:: https://quay.io/repository/biocontainers/bioconductor-mmdiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmdiff
.. _`bioconductor-mmdiff/tags`: https://quay.io/repository/biocontainers/bioconductor-mmdiff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmdiff/README.html