:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbm-deep'
.. highlight: bash

perl-dbm-deep
=============

.. conda:recipe:: perl-dbm-deep
   :replaces_section_title:
   :noindex:

   A pure perl multi\-level hash\/array DBM that supports transactions

   :homepage: http://metacpan.org/pod/DBM::Deep
   :license: perl_5
   :recipe: /`perl-dbm-deep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbm-deep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbm-deep/meta.yaml>`_

   


.. conda:package:: perl-dbm-deep

   |downloads_perl-dbm-deep| |docker_perl-dbm-deep|

   :versions:
      
      

      ``2.0016-0``,  ``2.0013-1``,  ``2.0013-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbi: 
   :depends perl-digest-md5: 
   :depends perl-scalar-list-utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbm-deep

   and update with::

      conda update perl-dbm-deep

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dbm-deep:<tag>

   (see `perl-dbm-deep/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbm-deep| image:: https://img.shields.io/conda/dn/bioconda/perl-dbm-deep.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbm-deep
   :alt:   (downloads)
.. |docker_perl-dbm-deep| image:: https://quay.io/repository/biocontainers/perl-dbm-deep/status
   :target: https://quay.io/repository/biocontainers/perl-dbm-deep
.. _`perl-dbm-deep/tags`: https://quay.io/repository/biocontainers/perl-dbm-deep?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbm-deep";
        var versions = ["2.0016","2.0013","2.0013"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbm-deep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbm-deep/README.html