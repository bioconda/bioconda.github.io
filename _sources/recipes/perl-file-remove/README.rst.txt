.. title:: Package Recipe 'perl-file-remove'
.. highlight: bash


perl-file-remove
================

.. conda:recipe:: perl-file-remove/1.57
   :replaces_section_title:

   Remove files and directories

   :homepage: http://metacpan.org/pod/File::Remove
   :license: perl_5
   :recipe: /`perl-file-remove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-remove>`_/`1.57 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-remove/1.57>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-remove/1.57/meta.yaml>`_

   


.. conda:package:: perl-file-remove

   |downloads_perl-file-remove| |docker_perl-file-remove|

   :versions: 1.57

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-file-spec`  :conda:package:`perl-io-handle`  :conda:package:`perl-test-more`  

   :required~by: |required_by_perl-file-remove|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-remove

   and update with::

      conda update perl-file-remove

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-remove


.. |required_by_perl-file-remove| conda:required_by:: perl-file-remove
.. |downloads_perl-file-remove| image:: https://img.shields.io/conda/dn/bioconda/perl-file-remove.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-remove| image:: https://quay.io/repository/biocontainers/perl-file-remove/status
   :target: https://quay.io/repository/biocontainers/perl-file-remove







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-remove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-remove/README.html

