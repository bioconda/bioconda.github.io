.. title:: Package Recipe 'pirs'
.. highlight: bash


pirs
====

.. conda:recipe:: pirs
   :replaces_section_title:

   pIRS is a program for simulating Illumina PE reads.

   :homepage: https://github.com/galaxy001/pirs
   :license: GPL-2.0
   :recipe: /`pirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirs/meta.yaml>`_

   


.. conda:package:: pirs

   |downloads_pirs| |docker_pirs|

   :versions: 2.0.2

   :depends: :conda:package:`boost` >=1.66.0,<1.66.1.0a0 :conda:package:`bwa`  :conda:package:`coreutils`  :conda:package:`gnuplot`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  :conda:package:`samtools`  :conda:package:`soapaligner`  :conda:package:`soapcoverage`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_pirs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pirs

   and update with::

      conda update pirs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pirs


.. |required_by_pirs| conda:required_by:: pirs
.. |downloads_pirs| image:: https://img.shields.io/conda/dn/bioconda/pirs.svg?style=flat
   :alt:   (downloads)
.. |docker_pirs| image:: https://quay.io/repository/biocontainers/pirs/status
   :target: https://quay.io/repository/biocontainers/pirs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pirs/README.html

