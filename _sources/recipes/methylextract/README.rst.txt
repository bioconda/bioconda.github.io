.. title:: Package Recipe 'methylextract'
.. highlight: bash


methylextract
=============

.. conda:recipe:: methylextract
   :replaces_section_title:

   High\-Quality methylation maps and SNV calling from whole genome bisulfite sequencing data

   :homepage: http://bioinfo2.ugr.es/MethylExtract/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`methylextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylextract/meta.yaml>`_

   


.. conda:package:: methylextract

   |downloads_methylextract| |docker_methylextract|

   :versions: 1.9.1

   :depends: :conda:package:`perl`  :conda:package:`samtools`  

   :required~by: |required_by_methylextract|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install methylextract

   and update with::

      conda update methylextract

   or use the docker container::

      docker pull quay.io/repository/biocontainers/methylextract


.. |required_by_methylextract| conda:required_by:: methylextract
.. |downloads_methylextract| image:: https://img.shields.io/conda/dn/bioconda/methylextract.svg?style=flat
   :alt:   (downloads)
.. |docker_methylextract| image:: https://quay.io/repository/biocontainers/methylextract/status
   :target: https://quay.io/repository/biocontainers/methylextract







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylextract/README.html

