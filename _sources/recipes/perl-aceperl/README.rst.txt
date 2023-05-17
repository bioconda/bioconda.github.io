:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-aceperl'
.. highlight: bash

perl-aceperl
============

.. conda:recipe:: perl-aceperl
   :replaces_section_title:
   :noindex:

   Object\-Oriented Access to ACEDB Databases

   :homepage: http://metacpan.org/pod/AcePerl
   :license: unknown
   :recipe: /`perl-aceperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aceperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aceperl/meta.yaml>`_

   


.. conda:package:: perl-aceperl

   |downloads_perl-aceperl| |docker_perl-aceperl|

   :versions:
      
      

      ``1.92-5``,  ``1.92-4``,  ``1.92-3``,  ``1.92-2``,  ``1.92-1``,  ``1.92-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cache-cache: 
   :depends perl-digest-md5: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-aceperl

   and update with::

      conda update perl-aceperl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-aceperl:<tag>

   (see `perl-aceperl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-aceperl| image:: https://img.shields.io/conda/dn/bioconda/perl-aceperl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-aceperl
   :alt:   (downloads)
.. |docker_perl-aceperl| image:: https://quay.io/repository/biocontainers/perl-aceperl/status
   :target: https://quay.io/repository/biocontainers/perl-aceperl
.. _`perl-aceperl/tags`: https://quay.io/repository/biocontainers/perl-aceperl?tab=tags


.. raw:: html

    <script>
        var package = "perl-aceperl";
        var versions = ["1.92","1.92","1.92","1.92","1.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-aceperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-aceperl/README.html