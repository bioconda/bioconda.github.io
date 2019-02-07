.. title:: Package Recipe 'gffutils'
.. highlight: bash


gffutils
========

.. conda:recipe:: gffutils
   :replaces_section_title:

   Work with GFF and GTF files in a flexible database framework

   :homepage: https://github.com/daler/gffutils
   :license: MIT
   :recipe: /`gffutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffutils/meta.yaml>`_
   :links: biotools: :biotools:`GFFutils`

   


.. conda:package:: gffutils

   |downloads_gffutils| |docker_gffutils|

   :versions: 0.9, 0.8.7.1, 0.8.7, 0.8.6.1

   :depends: :conda:package:`argcomplete`  :conda:package:`argh`  :conda:package:`pyfaidx`  :conda:package:`python` 2.7* :conda:package:`simplejson`  :conda:package:`six`  

   :required~by: |required_by_gffutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gffutils

   and update with::

      conda update gffutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gffutils


.. |required_by_gffutils| conda:required_by:: gffutils
.. |downloads_gffutils| image:: https://img.shields.io/conda/dn/bioconda/gffutils.svg?style=flat
   :alt:   (downloads)
.. |docker_gffutils| image:: https://quay.io/repository/biocontainers/gffutils/status
   :target: https://quay.io/repository/biocontainers/gffutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffutils/README.html

