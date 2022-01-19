:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-longstring'
.. highlight: bash

perl-test-longstring
====================

.. conda:recipe:: perl-test-longstring
   :replaces_section_title:
   :noindex:

   tests strings for equality\, with more helpful failures

   :homepage: http://metacpan.org/pod/Test::LongString
   :license: perl_5
   :recipe: /`perl-test-longstring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-longstring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-longstring/meta.yaml>`_

   


.. conda:package:: perl-test-longstring

   |downloads_perl-test-longstring| |docker_perl-test-longstring|

   :versions:
      
      

      ``0.17-3``,  ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-test-builder-tester: 
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-longstring

   and update with::

      conda update perl-test-longstring

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-longstring:<tag>

   (see `perl-test-longstring/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-longstring| image:: https://img.shields.io/conda/dn/bioconda/perl-test-longstring.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-longstring
   :alt:   (downloads)
.. |docker_perl-test-longstring| image:: https://quay.io/repository/biocontainers/perl-test-longstring/status
   :target: https://quay.io/repository/biocontainers/perl-test-longstring
.. _`perl-test-longstring/tags`: https://quay.io/repository/biocontainers/perl-test-longstring?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-longstring";
        var versions = ["0.17","0.17","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-longstring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-longstring/README.html