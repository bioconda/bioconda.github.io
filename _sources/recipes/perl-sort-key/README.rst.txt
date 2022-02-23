:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-key'
.. highlight: bash

perl-sort-key
=============

.. conda:recipe:: perl-sort-key
   :replaces_section_title:
   :noindex:

   the fastest way to sort anything in Perl

   :homepage: http://metacpan.org/pod/Sort-Key
   :license: Artistic-1.0-Perl
   :recipe: /`perl-sort-key <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-key>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-key/meta.yaml>`_

   


.. conda:package:: perl-sort-key

   |downloads_perl-sort-key| |docker_perl-sort-key|

   :versions:
      
      

      ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sort-key

   and update with::

      conda update perl-sort-key

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sort-key:<tag>

   (see `perl-sort-key/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sort-key| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-key.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-key
   :alt:   (downloads)
.. |docker_perl-sort-key| image:: https://quay.io/repository/biocontainers/perl-sort-key/status
   :target: https://quay.io/repository/biocontainers/perl-sort-key
.. _`perl-sort-key/tags`: https://quay.io/repository/biocontainers/perl-sort-key?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-key";
        var versions = ["1.33","1.33","1.33","1.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-key/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-key/README.html