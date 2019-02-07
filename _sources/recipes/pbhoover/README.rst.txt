.. title:: Package Recipe 'pbhoover'
.. highlight: bash


pbhoover
========

.. conda:recipe:: pbhoover
   :replaces_section_title:

   Variant caller for legacy and low coverage Pacific Biosciences\' long\-read sequencing data

   :homepage: https://gitlab.com/LPCDRP/pbhoover
   :license: GPLv3
   :recipe: /`pbhoover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbhoover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbhoover/meta.yaml>`_

   


.. conda:package:: pbhoover

   |downloads_pbhoover| |docker_pbhoover|

   :versions: 1.0.7, 1.0.6

   :depends: :conda:package:`bcftools`  :conda:package:`numpy`  :conda:package:`pbcore` >=1.2.10 :conda:package:`pbh5tools`  :conda:package:`python` 2.7* :conda:package:`pyvcf`  :conda:package:`tabix`  

   :required~by: |required_by_pbhoover|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbhoover

   and update with::

      conda update pbhoover

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbhoover


.. |required_by_pbhoover| conda:required_by:: pbhoover
.. |downloads_pbhoover| image:: https://img.shields.io/conda/dn/bioconda/pbhoover.svg?style=flat
   :alt:   (downloads)
.. |docker_pbhoover| image:: https://quay.io/repository/biocontainers/pbhoover/status
   :target: https://quay.io/repository/biocontainers/pbhoover







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbhoover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbhoover/README.html

