.. title:: Package Recipe 'microhapdb'
.. highlight: bash


microhapdb
==========

.. conda:recipe:: microhapdb
   :replaces_section_title:

   Data package providing convenient programmatic access to published microhaplotype data.

   :homepage: https://github.com/bioforensics/MicroHapDB/
   :license: BSD / BSD License
   :recipe: /`microhapdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapdb/meta.yaml>`_

   


.. conda:package:: microhapdb

   |downloads_microhapdb| |docker_microhapdb|

   :versions: 0.2

   :depends: :conda:package:`pandas`  :conda:package:`python` >=3 

   :required~by: |required_by_microhapdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install microhapdb

   and update with::

      conda update microhapdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/microhapdb


.. |required_by_microhapdb| conda:required_by:: microhapdb
.. |downloads_microhapdb| image:: https://img.shields.io/conda/dn/bioconda/microhapdb.svg?style=flat
   :alt:   (downloads)
.. |docker_microhapdb| image:: https://quay.io/repository/biocontainers/microhapdb/status
   :target: https://quay.io/repository/biocontainers/microhapdb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microhapdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microhapdb/README.html

