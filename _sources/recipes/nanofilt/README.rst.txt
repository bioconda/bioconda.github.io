.. title:: Package Recipe 'nanofilt'
.. highlight: bash


nanofilt
========

.. conda:recipe:: nanofilt
   :replaces_section_title:

   Filtering and trimming of Oxford Nanopore Sequencing data

   :homepage: https://github.com/wdecoster/nanofilt
   :license: MIT / MIT License
   :recipe: /`nanofilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanofilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanofilt/meta.yaml>`_

   


.. conda:package:: nanofilt

   |downloads_nanofilt| |docker_nanofilt|

   :versions: 2.2.0, 2.0.1, 1.9.2, 1.8.0, 1.7.0, 1.2.0, 1.1.4, 1.1.3

   :depends: :conda:package:`biopython`  :conda:package:`nanoget` >=0.15.0 :conda:package:`nanomath` >=0.13.3 :conda:package:`python` 3.5* 

   :required~by: |required_by_nanofilt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanofilt

   and update with::

      conda update nanofilt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanofilt


.. |required_by_nanofilt| conda:required_by:: nanofilt
.. |downloads_nanofilt| image:: https://img.shields.io/conda/dn/bioconda/nanofilt.svg?style=flat
   :alt:   (downloads)
.. |docker_nanofilt| image:: https://quay.io/repository/biocontainers/nanofilt/status
   :target: https://quay.io/repository/biocontainers/nanofilt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanofilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanofilt/README.html

