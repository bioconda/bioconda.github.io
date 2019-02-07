.. title:: Package Recipe 'perl-graph-readwrite'
.. highlight: bash


perl-graph-readwrite
====================

.. conda:recipe:: perl-graph-readwrite
   :replaces_section_title:

   modules for reading and writing directed graphs

   :homepage: https://github.com/neilb/Graph-ReadWrite
   :license: perl_5
   :recipe: /`perl-graph-readwrite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph-readwrite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph-readwrite/meta.yaml>`_

   


.. conda:package:: perl-graph-readwrite

   |downloads_perl-graph-readwrite| |docker_perl-graph-readwrite|

   :versions: 2.09

   :depends: :conda:package:`perl-graph`  :conda:package:`perl-parse-yapp`  :conda:package:`perl-threaded`  :conda:package:`perl-xml-parser`  :conda:package:`perl-xml-writer`  

   :required~by: |required_by_perl-graph-readwrite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-graph-readwrite

   and update with::

      conda update perl-graph-readwrite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-graph-readwrite


.. |required_by_perl-graph-readwrite| conda:required_by:: perl-graph-readwrite
.. |downloads_perl-graph-readwrite| image:: https://img.shields.io/conda/dn/bioconda/perl-graph-readwrite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-graph-readwrite| image:: https://quay.io/repository/biocontainers/perl-graph-readwrite/status
   :target: https://quay.io/repository/biocontainers/perl-graph-readwrite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graph-readwrite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graph-readwrite/README.html

