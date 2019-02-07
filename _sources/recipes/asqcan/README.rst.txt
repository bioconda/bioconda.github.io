.. title:: Package Recipe 'asqcan'
.. highlight: bash


asqcan
======

.. conda:recipe:: asqcan
   :replaces_section_title:

   A combined pipeline for bacterial genome assembly\, quality control and annotation

   :homepage: https://github.com/bogemad/asqcan
   :license: GPL / GPLv3
   :recipe: /`asqcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asqcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asqcan/meta.yaml>`_

   


.. conda:package:: asqcan

   |downloads_asqcan| |docker_asqcan|

   :versions: 0.2, 0.1

   :depends: :conda:package:`blast`  :conda:package:`blobtools`  :conda:package:`fastqc`  :conda:package:`parallel`  :conda:package:`prokka`  :conda:package:`python` 2.7* :conda:package:`quast`  :conda:package:`spades`  

   :required~by: |required_by_asqcan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install asqcan

   and update with::

      conda update asqcan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/asqcan


.. |required_by_asqcan| conda:required_by:: asqcan
.. |downloads_asqcan| image:: https://img.shields.io/conda/dn/bioconda/asqcan.svg?style=flat
   :alt:   (downloads)
.. |docker_asqcan| image:: https://quay.io/repository/biocontainers/asqcan/status
   :target: https://quay.io/repository/biocontainers/asqcan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asqcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asqcan/README.html

