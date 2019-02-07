.. title:: Package Recipe 'star-fusion'
.. highlight: bash


star-fusion
===========

.. conda:recipe:: star-fusion
   :replaces_section_title:

   A fusion gene caller for STAR. The FusionFilter tools to create needed index data structures are not included.

   :homepage: https://github.com/STAR-Fusion/STAR-Fusion
   :license: BSD-3-Clause
   :recipe: /`star-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star-fusion/meta.yaml>`_

   


.. conda:package:: star-fusion

   |downloads_star-fusion| |docker_star-fusion|

   :versions: 1.5.0, 1.4.0, 1.3.2, 1.2.0, 1.1.0, 1.0.0, 0.7.0, 0.5.4, 0.5.3, 0.4.0

   :depends: :conda:package:`bbmap`  :conda:package:`blast`  :conda:package:`bowtie`  :conda:package:`gmap`  :conda:package:`perl`  :conda:package:`perl-carp`  :conda:package:`perl-db-file`  :conda:package:`perl-io-gzip`  :conda:package:`perl-json-xs`  :conda:package:`perl-set-intervaltree`  :conda:package:`perl-uri`  :conda:package:`samtools`  :conda:package:`star` >=2.6.1b 

   :required~by: |required_by_star-fusion|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install star-fusion

   and update with::

      conda update star-fusion

   or use the docker container::

      docker pull quay.io/repository/biocontainers/star-fusion


.. |required_by_star-fusion| conda:required_by:: star-fusion
.. |downloads_star-fusion| image:: https://img.shields.io/conda/dn/bioconda/star-fusion.svg?style=flat
   :alt:   (downloads)
.. |docker_star-fusion| image:: https://quay.io/repository/biocontainers/star-fusion/status
   :target: https://quay.io/repository/biocontainers/star-fusion







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star-fusion/README.html

