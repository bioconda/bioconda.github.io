.. title:: Package Recipe 'blobtools'
.. highlight: bash


blobtools
=========

.. conda:recipe:: blobtools
   :replaces_section_title:

   Modular command\-line solution for visualisation\, quality control and taxonomic partitioning of genome datasets

   :homepage: https://blobtools.readme.io/docs/what-is-blobtools
   :license: GPL / GPLv3
   :recipe: /`blobtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blobtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blobtools/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.12232.1`

   


.. conda:package:: blobtools

   |downloads_blobtools| |docker_blobtools|

   :versions: 1.0.1

   :depends: :conda:package:`curl`  :conda:package:`docopt`  :conda:package:`matplotlib`  :conda:package:`openssl`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`ujson`  

   :required~by: |required_by_blobtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blobtools

   and update with::

      conda update blobtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blobtools


.. |required_by_blobtools| conda:required_by:: blobtools
.. |downloads_blobtools| image:: https://img.shields.io/conda/dn/bioconda/blobtools.svg?style=flat
   :alt:   (downloads)
.. |docker_blobtools| image:: https://quay.io/repository/biocontainers/blobtools/status
   :target: https://quay.io/repository/biocontainers/blobtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blobtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blobtools/README.html

