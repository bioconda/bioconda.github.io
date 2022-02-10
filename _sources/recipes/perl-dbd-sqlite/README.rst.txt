:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-sqlite'
.. highlight: bash

perl-dbd-sqlite
===============

.. conda:recipe:: perl-dbd-sqlite
   :replaces_section_title:
   :noindex:

   Self Contained RDBMS in a DBI Driver

   :homepage: https://metacpan.org/pod/DBD::SQLite
   :license: Perl
   :recipe: /`perl-dbd-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite/meta.yaml>`_

   


.. conda:package:: perl-dbd-sqlite

   |downloads_perl-dbd-sqlite| |docker_perl-dbd-sqlite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70-0</code>,  <code>1.64-1</code>,  <code>1.64-0</code>,  <code>1.62-1</code>,  <code>1.62-0</code>,  <code>1.60-0</code>,  <code>1.58-0</code>,  <code>1.50-3</code>,  <code>1.50-2</code>,  </span></summary>
      

      ``1.70-0``,  ``1.64-1``,  ``1.64-0``,  ``1.62-1``,  ``1.62-0``,  ``1.60-0``,  ``1.58-0``,  ``1.50-3``,  ``1.50-2``,  ``1.50-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbd-sqlite

   and update with::

      conda update perl-dbd-sqlite

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dbd-sqlite:<tag>

   (see `perl-dbd-sqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbd-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-sqlite
   :alt:   (downloads)
.. |docker_perl-dbd-sqlite| image:: https://quay.io/repository/biocontainers/perl-dbd-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-sqlite
.. _`perl-dbd-sqlite/tags`: https://quay.io/repository/biocontainers/perl-dbd-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-sqlite";
        var versions = ["1.70","1.64","1.64","1.62","1.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html