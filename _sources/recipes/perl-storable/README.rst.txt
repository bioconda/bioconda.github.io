:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-storable'
.. highlight: bash

perl-storable
=============

.. conda:recipe:: perl-storable
   :replaces_section_title:
   :noindex:

   persistence for Perl data structures

   :homepage: http://metacpan.org/pod/Storable
   :license: perl_5
   :recipe: /`perl-storable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-storable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-storable/meta.yaml>`_

   


.. conda:package:: perl-storable

   |downloads_perl-storable| |docker_perl-storable|

   :versions:
      
      

      ``3.15-1``,  ``3.15-0``,  ``3.11-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-storable

   and update with::

      conda update perl-storable

   or use the docker container::

      docker pull quay.io/biocontainers/perl-storable:<tag>

   (see `perl-storable/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-storable| image:: https://img.shields.io/conda/dn/bioconda/perl-storable.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-storable
   :alt:   (downloads)
.. |docker_perl-storable| image:: https://quay.io/repository/biocontainers/perl-storable/status
   :target: https://quay.io/repository/biocontainers/perl-storable
.. _`perl-storable/tags`: https://quay.io/repository/biocontainers/perl-storable?tab=tags


.. raw:: html

    <script>
        var package = "perl-storable";
        var versions = ["3.15","3.15","3.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-storable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-storable/README.html