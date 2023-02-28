:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-slurper'
.. highlight: bash

perl-file-slurper
=================

.. conda:recipe:: perl-file-slurper
   :replaces_section_title:
   :noindex:

   A simple\, sane and efficient module to slurp a file

   :homepage: http://metacpan.org/pod/File-Slurper
   :license: perl_5
   :recipe: /`perl-file-slurper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-slurper/meta.yaml>`_

   


.. conda:package:: perl-file-slurper

   |downloads_perl-file-slurper| |docker_perl-file-slurper|

   :versions:
      
      

      ``0.014-0``,  ``0.013-0``,  ``0.012-1``,  ``0.012-0``,  ``0.008-2``,  ``0.008-1``,  ``0.008-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-slurper

   and update with::

      conda update perl-file-slurper

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-slurper:<tag>

   (see `perl-file-slurper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-slurper| image:: https://img.shields.io/conda/dn/bioconda/perl-file-slurper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-slurper
   :alt:   (downloads)
.. |docker_perl-file-slurper| image:: https://quay.io/repository/biocontainers/perl-file-slurper/status
   :target: https://quay.io/repository/biocontainers/perl-file-slurper
.. _`perl-file-slurper/tags`: https://quay.io/repository/biocontainers/perl-file-slurper?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-slurper";
        var versions = ["0.014","0.013","0.012","0.012","0.008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-slurper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-slurper/README.html