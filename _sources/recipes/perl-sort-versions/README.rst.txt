.. title:: Package Recipe 'perl-sort-versions'
.. highlight: bash


perl-sort-versions
==================

.. conda:recipe:: perl-sort-versions
   :replaces_section_title:

   a perl 5 module for sorting of revision\-like numbers

   :homepage: https://github.com/neilb/Sort-Versions
   :license: perl_5
   :recipe: /`perl-sort-versions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-versions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-versions/meta.yaml>`_

   


.. conda:package:: perl-sort-versions

   |downloads_perl-sort-versions| |docker_perl-sort-versions|

   :versions: 1.62

   :depends: :conda:package:`perl-apache-test`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-sort-versions|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sort-versions

   and update with::

      conda update perl-sort-versions

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sort-versions


.. |required_by_perl-sort-versions| conda:required_by:: perl-sort-versions
.. |downloads_perl-sort-versions| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-versions.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sort-versions| image:: https://quay.io/repository/biocontainers/perl-sort-versions/status
   :target: https://quay.io/repository/biocontainers/perl-sort-versions







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-versions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-versions/README.html

