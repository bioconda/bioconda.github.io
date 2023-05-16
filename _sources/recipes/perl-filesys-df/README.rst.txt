:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-filesys-df'
.. highlight: bash

perl-filesys-df
===============

.. conda:recipe:: perl-filesys-df
   :replaces_section_title:
   :noindex:

   Perl extension for filesystem disk space information.

   :homepage: http://metacpan.org/pod/Filesys-Df
   :license: unknown
   :recipe: /`perl-filesys-df <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filesys-df>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filesys-df/meta.yaml>`_

   


.. conda:package:: perl-filesys-df

   |downloads_perl-filesys-df| |docker_perl-filesys-df|

   :versions:
      
      

      ``0.92-6``,  ``0.92-5``,  ``0.92-4``,  ``0.92-3``,  ``0.92-2``,  ``0.92-1``,  ``0.92-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-filesys-df

   and update with::

      conda update perl-filesys-df

   or use the docker container::

      docker pull quay.io/biocontainers/perl-filesys-df:<tag>

   (see `perl-filesys-df/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-filesys-df| image:: https://img.shields.io/conda/dn/bioconda/perl-filesys-df.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-filesys-df
   :alt:   (downloads)
.. |docker_perl-filesys-df| image:: https://quay.io/repository/biocontainers/perl-filesys-df/status
   :target: https://quay.io/repository/biocontainers/perl-filesys-df
.. _`perl-filesys-df/tags`: https://quay.io/repository/biocontainers/perl-filesys-df?tab=tags


.. raw:: html

    <script>
        var package = "perl-filesys-df";
        var versions = ["0.92","0.92","0.92","0.92","0.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-filesys-df/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-filesys-df/README.html