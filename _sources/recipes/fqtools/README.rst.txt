.. title:: Package Recipe 'fqtools'
.. highlight: bash


fqtools
=======

.. conda:recipe:: fqtools
   :replaces_section_title:

   An efficient FASTQ manipulation suite.

   :homepage: https://github.com/alastair-droop/fqtools
   :license: GPLv3
   :recipe: /`fqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtools/meta.yaml>`_

   


.. conda:package:: fqtools

   |downloads_fqtools| |docker_fqtools|

   :versions: 2.0

   :depends: :conda:package:`htslib`  :conda:package:`zlib`  

   :required~by: |required_by_fqtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fqtools

   and update with::

      conda update fqtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fqtools


.. |required_by_fqtools| conda:required_by:: fqtools
.. |downloads_fqtools| image:: https://img.shields.io/conda/dn/bioconda/fqtools.svg?style=flat
   :alt:   (downloads)
.. |docker_fqtools| image:: https://quay.io/repository/biocontainers/fqtools/status
   :target: https://quay.io/repository/biocontainers/fqtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtools/README.html

