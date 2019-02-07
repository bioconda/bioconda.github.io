.. title:: Package Recipe 'ghostz'
.. highlight: bash


ghostz
======

.. conda:recipe:: ghostz
   :replaces_section_title:

   GHOSTZ is a homology search tool which can detect remote homologues like BLAST and is about 200 times more efficient than BLAST by using database subsequence clustering. GHOSTZ outputs search results in the format similar to BLAST\-tabular format.

   :homepage: http://www.bi.cs.titech.ac.jp/ghostz/
   :license: BSD-2-Clause
   :recipe: /`ghostz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostz/meta.yaml>`_

   


.. conda:package:: ghostz

   |downloads_ghostz| |docker_ghostz|

   :versions: 1.0.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_ghostz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghostz

   and update with::

      conda update ghostz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ghostz


.. |required_by_ghostz| conda:required_by:: ghostz
.. |downloads_ghostz| image:: https://img.shields.io/conda/dn/bioconda/ghostz.svg?style=flat
   :alt:   (downloads)
.. |docker_ghostz| image:: https://quay.io/repository/biocontainers/ghostz/status
   :target: https://quay.io/repository/biocontainers/ghostz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghostz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghostz/README.html

