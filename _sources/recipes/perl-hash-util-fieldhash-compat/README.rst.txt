.. title:: Package Recipe 'perl-hash-util-fieldhash-compat'
.. highlight: bash


perl-hash-util-fieldhash-compat
===============================

.. conda:recipe:: perl-hash-util-fieldhash-compat/0.11
   :replaces_section_title:

   Use Hash\:\:Util\:\:FieldHash or ties\, depending on availability

   :homepage: https://github.com/karenetheridge/Hash-Util-FieldHash-Compat
   :license: perl_5
   :recipe: /`perl-hash-util-fieldhash-compat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat/0.11/meta.yaml>`_

   


.. conda:package:: perl-hash-util-fieldhash-compat

   |downloads_perl-hash-util-fieldhash-compat| |docker_perl-hash-util-fieldhash-compat|

   :versions: 0.11

   :depends: :conda:package:`perl` >5.22,<6.0 :conda:package:`perl-constant`  :conda:package:`perl-exporter`  :conda:package:`perl-parent`  :conda:package:`perl-tie-refhash` >=1.38 :conda:package:`perl-tie-refhash-weak` >=0.08 

   :required~by: |required_by_perl-hash-util-fieldhash-compat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-hash-util-fieldhash-compat

   and update with::

      conda update perl-hash-util-fieldhash-compat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat


.. |required_by_perl-hash-util-fieldhash-compat| conda:required_by:: perl-hash-util-fieldhash-compat
.. |downloads_perl-hash-util-fieldhash-compat| image:: https://img.shields.io/conda/dn/bioconda/perl-hash-util-fieldhash-compat.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-hash-util-fieldhash-compat| image:: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat/status
   :target: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hash-util-fieldhash-compat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hash-util-fieldhash-compat/README.html

