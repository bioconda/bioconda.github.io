.. title:: Package Recipe 'nanosv'
.. highlight: bash


nanosv
======

.. conda:recipe:: nanosv
   :replaces_section_title:

   Structural variation detection tool for Oxford Nanopore data.

   :homepage: https://github.com/mroosmalen/nanosv
   :license: MIT / MIT License
   :recipe: /`nanosv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosv/meta.yaml>`_

   


.. conda:package:: nanosv

   |downloads_nanosv| |docker_nanosv|

   :versions: 1.2.3, 1.2.2, 1.2.0, 1.1.2, 0.0.1

   :depends: :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyvcf`  

   :required~by: |required_by_nanosv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanosv

   and update with::

      conda update nanosv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanosv


.. |required_by_nanosv| conda:required_by:: nanosv
.. |downloads_nanosv| image:: https://img.shields.io/conda/dn/bioconda/nanosv.svg?style=flat
   :alt:   (downloads)
.. |docker_nanosv| image:: https://quay.io/repository/biocontainers/nanosv/status
   :target: https://quay.io/repository/biocontainers/nanosv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosv/README.html

