:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-file-contents'
.. highlight: bash

perl-test-file-contents
=======================

.. conda:recipe:: perl-test-file-contents/0.23
   :replaces_section_title:
   :noindex:

   Test routines for examining the contents of files

   :homepage: http://search.cpan.org/dist/Test-File-Contents/
   :license: perl_5
   :recipe: /`perl-test-file-contents <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents/0.23/meta.yaml>`_

   


.. conda:package:: perl-test-file-contents

   |downloads_perl-test-file-contents| |docker_perl-test-file-contents|

   :versions:
      
      

      ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-md5: 
   :depends perl-file-spec: 
   :depends perl-test-pod: 
   :depends perl-test-pod-coverage: 
   :depends perl-text-diff: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-file-contents

   and update with::

      conda update perl-test-file-contents

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-file-contents:<tag>

   (see `perl-test-file-contents/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-file-contents| image:: https://img.shields.io/conda/dn/bioconda/perl-test-file-contents.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-file-contents
   :alt:   (downloads)
.. |docker_perl-test-file-contents| image:: https://quay.io/repository/biocontainers/perl-test-file-contents/status
   :target: https://quay.io/repository/biocontainers/perl-test-file-contents
.. _`perl-test-file-contents/tags`: https://quay.io/repository/biocontainers/perl-test-file-contents?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-file-contents";
        var versions = ["0.23","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-file-contents/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-file-contents/README.html