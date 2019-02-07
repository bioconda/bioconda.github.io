.. title:: Package Recipe 'perl-namespace-clean'
.. highlight: bash


perl-namespace-clean
====================

.. conda:recipe:: perl-namespace-clean/0.27
   :replaces_section_title:

   Keep imports and functions out of your namespace

   :homepage: http://search.cpan.org/dist/namespace-clean
   :license: perl_5
   :recipe: /`perl-namespace-clean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-clean>`_/`0.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-clean/0.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-clean/0.27/meta.yaml>`_

   


.. conda:package:: perl-namespace-clean

   |downloads_perl-namespace-clean| |docker_perl-namespace-clean|

   :versions: 0.27

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-b-hooks-endofscope`  :conda:package:`perl-package-stash`  

   :required~by: |required_by_perl-namespace-clean|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-namespace-clean

   and update with::

      conda update perl-namespace-clean

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-namespace-clean


.. |required_by_perl-namespace-clean| conda:required_by:: perl-namespace-clean
.. |downloads_perl-namespace-clean| image:: https://img.shields.io/conda/dn/bioconda/perl-namespace-clean.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-namespace-clean| image:: https://quay.io/repository/biocontainers/perl-namespace-clean/status
   :target: https://quay.io/repository/biocontainers/perl-namespace-clean







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-namespace-clean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-namespace-clean/README.html

