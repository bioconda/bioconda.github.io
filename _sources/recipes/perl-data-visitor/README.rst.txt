.. title:: Package Recipe 'perl-data-visitor'
.. highlight: bash


perl-data-visitor
=================

.. conda:recipe:: perl-data-visitor/0.30
   :replaces_section_title:

   Visitor style traversal of Perl data structures

   :homepage: http://metacpan.org/release/Data-Visitor
   :license: perl_5
   :recipe: /`perl-data-visitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor>`_/`0.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor/0.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor/0.30/meta.yaml>`_

   


.. conda:package:: perl-data-visitor

   |downloads_perl-data-visitor| |docker_perl-data-visitor|

   :versions: 0.30

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-class-load` >=0.06 :conda:package:`perl-moose`  :conda:package:`perl-namespace-clean`  :conda:package:`perl-task-weaken`  :conda:package:`perl-tie-toobject`  

   :required~by: |required_by_perl-data-visitor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-visitor

   and update with::

      conda update perl-data-visitor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-data-visitor


.. |required_by_perl-data-visitor| conda:required_by:: perl-data-visitor
.. |downloads_perl-data-visitor| image:: https://img.shields.io/conda/dn/bioconda/perl-data-visitor.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-data-visitor| image:: https://quay.io/repository/biocontainers/perl-data-visitor/status
   :target: https://quay.io/repository/biocontainers/perl-data-visitor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-visitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-visitor/README.html

