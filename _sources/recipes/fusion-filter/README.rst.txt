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

   :versions: 0.5.0

   :depends: :conda:package:`blast` >=2.7.1 :conda:package:`gmap` >=2017.10.30 :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-db-file`  :conda:package:`perl-json-xs`  :conda:package:`perl-perlio-gzip`  :conda:package:`perl-set-intervaltree`  :conda:package:`perl-uri`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`star` >=2.5.4a 

   :required~by: |required_by_fusion-filter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fusion-filter

   and update with::

      conda update fusion-filter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fusion-filter


.. |required_by_fusion-filter| conda:required_by:: fusion-filter
.. |downloads_fusion-filter| image:: https://img.shields.io/conda/dn/bioconda/fusion-filter.svg?style=flat
   :alt:   (downloads)
.. |docker_fusion-filter| image:: https://quay.io/repository/biocontainers/fusion-filter/status
   :target: https://quay.io/repository/biocontainers/fusion-filter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-filter/README.html

