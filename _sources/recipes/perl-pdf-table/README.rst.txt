:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pdf-table'
.. highlight: bash

perl-pdf-table
==============

.. conda:recipe:: perl-pdf-table
   :replaces_section_title:
   :noindex:

   A utility class for building table layouts in a PDF\:\:API2 object.

   :homepage: http://metacpan.org/pod/PDF::Table
   :license: perl_5
   :recipe: /`perl-pdf-table <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-table>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-table/meta.yaml>`_

   


.. conda:package:: perl-pdf-table

   |downloads_perl-pdf-table| |docker_perl-pdf-table|

   :versions:
      
      

      ``1.002-0``,  ``0.11.0-1``,  ``0.11.0-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pdf-table

   and update with::

      conda update perl-pdf-table

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pdf-table:<tag>

   (see `perl-pdf-table/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pdf-table| image:: https://img.shields.io/conda/dn/bioconda/perl-pdf-table.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pdf-table
   :alt:   (downloads)
.. |docker_perl-pdf-table| image:: https://quay.io/repository/biocontainers/perl-pdf-table/status
   :target: https://quay.io/repository/biocontainers/perl-pdf-table
.. _`perl-pdf-table/tags`: https://quay.io/repository/biocontainers/perl-pdf-table?tab=tags


.. raw:: html

    <script>
        var package = "perl-pdf-table";
        var versions = ["1.002","0.11.0","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pdf-table/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pdf-table/README.html