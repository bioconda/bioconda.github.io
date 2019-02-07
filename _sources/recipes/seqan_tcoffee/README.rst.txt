.. title:: Package Recipe 'seqan_tcoffee'
.. highlight: bash


seqan_tcoffee
=============

.. conda:recipe:: seqan_tcoffee
   :replaces_section_title:

   SeqAn\:\:T\-Coffee \- Multiple Sequence Alignment

   :homepage: http://www.seqan.de/apps/seqan-t-coffee/
   :license: GPLv3
   :recipe: /`seqan_tcoffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan_tcoffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan_tcoffee/meta.yaml>`_

   


.. conda:package:: seqan_tcoffee

   |downloads_seqan_tcoffee| |docker_seqan_tcoffee|

   :versions: 1.13.3

   :depends: :conda:package:`bzip2` 1.0* :conda:package:`libgcc`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_seqan_tcoffee|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqan_tcoffee

   and update with::

      conda update seqan_tcoffee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqan_tcoffee


.. |required_by_seqan_tcoffee| conda:required_by:: seqan_tcoffee
.. |downloads_seqan_tcoffee| image:: https://img.shields.io/conda/dn/bioconda/seqan_tcoffee.svg?style=flat
   :alt:   (downloads)
.. |docker_seqan_tcoffee| image:: https://quay.io/repository/biocontainers/seqan_tcoffee/status
   :target: https://quay.io/repository/biocontainers/seqan_tcoffee







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan_tcoffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan_tcoffee/README.html

