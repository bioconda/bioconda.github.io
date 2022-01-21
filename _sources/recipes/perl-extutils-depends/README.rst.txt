:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-depends'
.. highlight: bash

perl-extutils-depends
=====================

.. conda:recipe:: perl-extutils-depends
   :replaces_section_title:
   :noindex:

   Easily build XS extensions that depend on XS extensions

   :homepage: http://gtk2-perl.sourceforge.net
   :license: perl_5
   :recipe: /`perl-extutils-depends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-depends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-depends/meta.yaml>`_

   


.. conda:package:: perl-extutils-depends

   |downloads_perl-extutils-depends| |docker_perl-extutils-depends|

   :versions:
      
      

      ``0.8000-1``,  ``0.8000-0``,  ``0.405-2``,  ``0.405-1``,  ``0.405-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: 
   :depends perl-pathtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-depends

   and update with::

      conda update perl-extutils-depends

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-depends:<tag>

   (see `perl-extutils-depends/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-depends| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-depends.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-depends
   :alt:   (downloads)
.. |docker_perl-extutils-depends| image:: https://quay.io/repository/biocontainers/perl-extutils-depends/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-depends
.. _`perl-extutils-depends/tags`: https://quay.io/repository/biocontainers/perl-extutils-depends?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-depends";
        var versions = ["0.8000","0.8000","0.405","0.405","0.405"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-depends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-depends/README.html