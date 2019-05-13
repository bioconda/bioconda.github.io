:orphan:  .. only available via index, not via toctree

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

   :versions: 1.6.0-0, 1.5.0-0, 1.4.0-2, 1.4.0-1, 1.4.0-0, 1.3.2-2, 1.3.2-1, 1.3.2-0, 1.2.0-0, 1.1.0-0, 1.0.0-0, 0.7.0-1, 0.7.0-0, 0.5.4-2, 0.5.4-1, 0.5.4-0, 0.5.3-0, 0.4.0-0
   
   :depends bbmap: 
   :depends blast: 
   :depends bowtie: 
   :depends gmap: 
   :depends perl: 
   :depends perl-carp: 
   :depends perl-db-file: 
   :depends perl-io-gzip: 
   :depends perl-json-xs: 
   :depends perl-set-intervaltree: 
   :depends perl-uri: 
   :depends samtools: 
   :depends star: >=2.7.0f
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install star-fusion

   and update with::

      conda update star-fusion

   or use the docker container::

      docker pull quay.io/biocontainers/star-fusion:<tag>

   (see `star-fusion/tags`_ for valid values for ``<tag>``)


.. |downloads_star-fusion| image:: https://img.shields.io/conda/dn/bioconda/star-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/star-fusion
   :alt:   (downloads)
.. |docker_star-fusion| image:: https://quay.io/repository/biocontainers/star-fusion/status
   :target: https://quay.io/repository/biocontainers/star-fusion
.. _`star-fusion/tags`: https://quay.io/repository/biocontainers/star-fusion?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star-fusion/README.html