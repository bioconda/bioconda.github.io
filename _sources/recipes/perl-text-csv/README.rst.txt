:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-csv'
.. highlight: bash

perl-text-csv
=============

.. conda:recipe:: perl-text-csv
   :replaces_section_title:
   :noindex:

   comma\-separated values manipulator \(using XS or PurePerl\)

   :homepage: http://metacpan.org/pod/Text::CSV
   :license: perl_5
   :recipe: /`perl-text-csv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-csv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-csv/meta.yaml>`_

   


.. conda:package:: perl-text-csv

   |downloads_perl-text-csv| |docker_perl-text-csv|

   :versions:
      
      

      ``2.01-0``,  ``2.00-1``,  ``2.00-0``,  ``1.99-0``,  ``1.97-0``,  ``1.33-1``,  ``1.33-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-test-harness: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-csv

   and update with::

      conda update perl-text-csv

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-csv:<tag>

   (see `perl-text-csv/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-csv| image:: https://img.shields.io/conda/dn/bioconda/perl-text-csv.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-csv
   :alt:   (downloads)
.. |docker_perl-text-csv| image:: https://quay.io/repository/biocontainers/perl-text-csv/status
   :target: https://quay.io/repository/biocontainers/perl-text-csv
.. _`perl-text-csv/tags`: https://quay.io/repository/biocontainers/perl-text-csv?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-csv";
        var versions = ["2.01","2.00","2.00","1.99","1.97"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-csv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-csv/README.html