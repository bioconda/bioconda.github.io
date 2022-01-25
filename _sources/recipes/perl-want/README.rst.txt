:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-want'
.. highlight: bash

perl-want
=========

.. conda:recipe:: perl-want
   :replaces_section_title:
   :noindex:

   This module generalises the mechanism of the wantarray function\, allowing a function to determine in some detail how its return value is going to be immediately used.

   :homepage: http://search.cpan.org/~robin/Want-0.29/Want.pm
   :license: perl_5
   :recipe: /`perl-want <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-want>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-want/meta.yaml>`_

   


.. conda:package:: perl-want

   |downloads_perl-want| |docker_perl-want|

   :versions:
      
      

      ``0.29-2``,  ``0.29-1``,  ``0.29-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-want

   and update with::

      conda update perl-want

   or use the docker container::

      docker pull quay.io/biocontainers/perl-want:<tag>

   (see `perl-want/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-want| image:: https://img.shields.io/conda/dn/bioconda/perl-want.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-want
   :alt:   (downloads)
.. |docker_perl-want| image:: https://quay.io/repository/biocontainers/perl-want/status
   :target: https://quay.io/repository/biocontainers/perl-want
.. _`perl-want/tags`: https://quay.io/repository/biocontainers/perl-want?tab=tags


.. raw:: html

    <script>
        var package = "perl-want";
        var versions = ["0.29","0.29","0.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-want/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-want/README.html