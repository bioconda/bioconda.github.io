:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-csv_xs'
.. highlight: bash

perl-text-csv_xs
================

.. conda:recipe:: perl-text-csv_xs
   :replaces_section_title:
   :noindex:

   Text\:\:CSV\_XS \- comma\-separated values manipulation routines

   :homepage: https://metacpan.org/pod/Text::CSV_XS
   :license: perl_5
   :recipe: /`perl-text-csv_xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-csv_xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-csv_xs/meta.yaml>`_

   


.. conda:package:: perl-text-csv_xs

   |downloads_perl-text-csv_xs| |docker_perl-text-csv_xs|

   :versions:
      
      

      ``1.47-0``,  ``1.46-0``,  ``1.40-1``,  ``1.40-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-test-harness: 
   :depends perl-text-csv: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-csv_xs

   and update with::

      conda update perl-text-csv_xs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-csv_xs:<tag>

   (see `perl-text-csv_xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-csv_xs| image:: https://img.shields.io/conda/dn/bioconda/perl-text-csv_xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-csv_xs
   :alt:   (downloads)
.. |docker_perl-text-csv_xs| image:: https://quay.io/repository/biocontainers/perl-text-csv_xs/status
   :target: https://quay.io/repository/biocontainers/perl-text-csv_xs
.. _`perl-text-csv_xs/tags`: https://quay.io/repository/biocontainers/perl-text-csv_xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-csv_xs";
        var versions = ["1.47","1.46","1.40","1.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-csv_xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-csv_xs/README.html