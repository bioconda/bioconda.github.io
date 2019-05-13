:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-filter'
.. highlight: bash

fusion-filter
=============

.. conda:recipe:: fusion-filter
   :replaces_section_title:

   FusionFilter provides a common fusion\-finding\, filtering\, and annotation framework for the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\).

   :homepage: https://github.com/FusionFilter/FusionFilter
   :license: BSD-3-Clause
   :recipe: /`fusion-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-filter/meta.yaml>`_

   FusionFilter provides a common fusion\-finding\, filtering\, and annotation framework used by the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\). This system is leveraged for preparing a target genome and annotation set for fusion transcript identification\, fusion feature annotation\, and integrates utilities for filtering likely false\-positive fusions. \- https\:\/\/github.com\/FusionFilter\/FusionFilter\/wiki


.. conda:package:: fusion-filter

   |downloads_fusion-filter| |docker_fusion-filter|

   :versions: 0.5.0-1, 0.5.0-0
   
   :depends blast: >=2.7.1
   :depends gmap: >=2017.10.30
   :depends perl: 5.22.0*
   :depends perl-carp: 
   :depends perl-db-file: 
   :depends perl-json-xs: 
   :depends perl-perlio-gzip: 
   :depends perl-set-intervaltree: 
   :depends perl-uri: 
   :depends python: 2.7*
   :depends samtools: 
   :depends star: >=2.5.4a
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fusion-filter

   and update with::

      conda update fusion-filter

   or use the docker container::

      docker pull quay.io/biocontainers/fusion-filter:<tag>

   (see `fusion-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_fusion-filter| image:: https://img.shields.io/conda/dn/bioconda/fusion-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-filter
   :alt:   (downloads)
.. |docker_fusion-filter| image:: https://quay.io/repository/biocontainers/fusion-filter/status
   :target: https://quay.io/repository/biocontainers/fusion-filter
.. _`fusion-filter/tags`: https://quay.io/repository/biocontainers/fusion-filter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-filter/README.html