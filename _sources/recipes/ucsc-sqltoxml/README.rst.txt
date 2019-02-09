.. title:: Package Recipe 'ucsc-sqltoxml'
.. highlight: bash


ucsc-sqltoxml
=============

.. conda:recipe:: ucsc-sqltoxml
   :replaces_section_title:

   dump out all or part of a relational database to XML\, guided

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-sqltoxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-sqltoxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-sqltoxml/meta.yaml>`_

   


.. conda:package:: ucsc-sqltoxml

   |downloads_ucsc-sqltoxml| |docker_ucsc-sqltoxml|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-sqltoxml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-sqltoxml

   and update with::

      conda update ucsc-sqltoxml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-sqltoxml


.. |required_by_ucsc-sqltoxml| conda:required_by:: ucsc-sqltoxml
.. |downloads_ucsc-sqltoxml| image:: https://img.shields.io/conda/dn/bioconda/ucsc-sqltoxml.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-sqltoxml| image:: https://quay.io/repository/biocontainers/ucsc-sqltoxml/status
   :target: https://quay.io/repository/biocontainers/ucsc-sqltoxml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-sqltoxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-sqltoxml/README.html

