.. title:: Package Recipe 'perl-sort-naturally'
.. highlight: bash


perl-sort-naturally
===================

.. conda:recipe:: perl-sort-naturally
   :replaces_section_title:

   sort lexically\, but sort numeral parts numerically

   :homepage: http://metacpan.org/pod/Sort-Naturally
   :license: perl_5
   :recipe: /`perl-sort-naturally <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-naturally>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-naturally/meta.yaml>`_

   


.. conda:package:: perl-sort-naturally

   |downloads_perl-sort-naturally| |docker_perl-sort-naturally|

   :versions: 1.03

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-sort-naturally|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sort-naturally

   and update with::

      conda update perl-sort-naturally

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sort-naturally


.. |required_by_perl-sort-naturally| conda:required_by:: perl-sort-naturally
.. |downloads_perl-sort-naturally| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-naturally.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sort-naturally| image:: https://quay.io/repository/biocontainers/perl-sort-naturally/status
   :target: https://quay.io/repository/biocontainers/perl-sort-naturally







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-naturally/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-naturally/README.html

