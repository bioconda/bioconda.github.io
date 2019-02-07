.. title:: Package Recipe 'delly'
.. highlight: bash


delly
=====

.. conda:recipe:: delly
   :replaces_section_title:

   Structural variant discovery by integrated paired\-end and split\-read analysis

   :homepage: https://github.com/dellytools/delly
   :license: GPLv3
   :recipe: /`delly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly/meta.yaml>`_

   


.. conda:package:: delly

   |downloads_delly| |docker_delly|

   :versions: 0.8.1, 0.7.9, 0.7.8, 0.7.7, 0.7.6, 0.7.2

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libboost`  :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_delly|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install delly

   and update with::

      conda update delly

   or use the docker container::

      docker pull quay.io/repository/biocontainers/delly


.. |required_by_delly| conda:required_by:: delly
.. |downloads_delly| image:: https://img.shields.io/conda/dn/bioconda/delly.svg?style=flat
   :alt:   (downloads)
.. |docker_delly| image:: https://quay.io/repository/biocontainers/delly/status
   :target: https://quay.io/repository/biocontainers/delly







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delly/README.html

