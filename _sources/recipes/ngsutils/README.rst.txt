.. title:: Package Recipe 'ngsutils'
.. highlight: bash


ngsutils
========

.. conda:recipe:: ngsutils
   :replaces_section_title:

   Tools for next\-generation sequencing analysis http\:\/\/ngsutils.org

   :homepage: http://ngsutils.org
   :license: BSD
   :recipe: /`ngsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils/meta.yaml>`_
   :links: biotools: :biotools:`ngsutils`

   


.. conda:package:: ngsutils

   |downloads_ngsutils| |docker_ngsutils|

   :versions: 0.5.9

   :depends: :conda:package:`coverage`  :conda:package:`cython`  :conda:package:`eta`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`swalign`  

   :required~by: |required_by_ngsutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngsutils

   and update with::

      conda update ngsutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ngsutils


.. |required_by_ngsutils| conda:required_by:: ngsutils
.. |downloads_ngsutils| image:: https://img.shields.io/conda/dn/bioconda/ngsutils.svg?style=flat
   :alt:   (downloads)
.. |docker_ngsutils| image:: https://quay.io/repository/biocontainers/ngsutils/status
   :target: https://quay.io/repository/biocontainers/ngsutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsutils/README.html

