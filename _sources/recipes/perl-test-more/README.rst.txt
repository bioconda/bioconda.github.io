:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-more'
.. highlight: bash

perl-test-more
==============

.. conda:recipe:: perl-test-more
   :replaces_section_title:
   :noindex:

   yet another framework for writing test scripts

   :homepage: http://metacpan.org/pod/Test::More
   :license: perl_5
   :recipe: /`perl-test-more <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-more>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-more/meta.yaml>`_

   


.. conda:package:: perl-test-more

   |downloads_perl-test-more| |docker_perl-test-more|

   :versions:
      
      

      ``1.001002-2``,  ``1.001002-1``,  ``1.001002-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-more

   and update with::

      conda update perl-test-more

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-more:<tag>

   (see `perl-test-more/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-more| image:: https://img.shields.io/conda/dn/bioconda/perl-test-more.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-more
   :alt:   (downloads)
.. |docker_perl-test-more| image:: https://quay.io/repository/biocontainers/perl-test-more/status
   :target: https://quay.io/repository/biocontainers/perl-test-more
.. _`perl-test-more/tags`: https://quay.io/repository/biocontainers/perl-test-more?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-more";
        var versions = ["1.001002","1.001002","1.001002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-more/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-more/README.html