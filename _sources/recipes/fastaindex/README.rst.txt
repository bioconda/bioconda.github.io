.. title:: Package Recipe 'fastaindex'
.. highlight: bash


fastaindex
==========

.. conda:recipe:: fastaindex
   :replaces_section_title:

   FastA indexing and sequence retrival.

   :homepage: https://github.com/lpryszcz/FastaIndex
   :license: GPLv3
   :recipe: /`fastaindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaindex/meta.yaml>`_

   


.. conda:package:: fastaindex

   |downloads_fastaindex| |docker_fastaindex|

   :versions: 0.11c

   :depends: :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_fastaindex|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastaindex

   and update with::

      conda update fastaindex

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastaindex


.. |required_by_fastaindex| conda:required_by:: fastaindex
.. |downloads_fastaindex| image:: https://img.shields.io/conda/dn/bioconda/fastaindex.svg?style=flat
   :alt:   (downloads)
.. |docker_fastaindex| image:: https://quay.io/repository/biocontainers/fastaindex/status
   :target: https://quay.io/repository/biocontainers/fastaindex







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastaindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastaindex/README.html

