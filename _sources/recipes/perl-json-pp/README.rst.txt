:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-pp'
.. highlight: bash

perl-json-pp
============

.. conda:recipe:: perl-json-pp
   :replaces_section_title:
   :noindex:

   JSON\:\:XS compatible pure\-Perl module.

   :homepage: http://metacpan.org/pod/JSON::PP
   :license: perl_5
   :recipe: /`perl-json-pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-pp/meta.yaml>`_

   


.. conda:package:: perl-json-pp

   |downloads_perl-json-pp| |docker_perl-json-pp|

   :versions:
      
      

      ``4.07-0``,  ``4.04-1``,  ``4.04-0``,  ``4.03-0``,  ``4.02-0``,  ``4.00-0``,  ``2.97001-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-pp

   and update with::

      conda update perl-json-pp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-json-pp:<tag>

   (see `perl-json-pp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-pp| image:: https://img.shields.io/conda/dn/bioconda/perl-json-pp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-pp
   :alt:   (downloads)
.. |docker_perl-json-pp| image:: https://quay.io/repository/biocontainers/perl-json-pp/status
   :target: https://quay.io/repository/biocontainers/perl-json-pp
.. _`perl-json-pp/tags`: https://quay.io/repository/biocontainers/perl-json-pp?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-pp";
        var versions = ["4.07","4.04","4.04","4.03","4.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-pp/README.html