:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-template-simple'
.. highlight: bash

perl-text-template-simple
=========================

.. conda:recipe:: perl-text-template-simple
   :replaces_section_title:
   :noindex:

   Simple text template engine

   :homepage: http://metacpan.org/pod/Text::Template::Simple
   :license: perl_5
   :recipe: /`perl-text-template-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-template-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-template-simple/meta.yaml>`_

   


.. conda:package:: perl-text-template-simple

   |downloads_perl-text-template-simple| |docker_perl-text-template-simple|

   :versions:
      
      

      ``0.91-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-digest-md5: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-template-simple

   and update with::

      conda update perl-text-template-simple

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-template-simple:<tag>

   (see `perl-text-template-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-template-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-text-template-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-template-simple
   :alt:   (downloads)
.. |docker_perl-text-template-simple| image:: https://quay.io/repository/biocontainers/perl-text-template-simple/status
   :target: https://quay.io/repository/biocontainers/perl-text-template-simple
.. _`perl-text-template-simple/tags`: https://quay.io/repository/biocontainers/perl-text-template-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-template-simple";
        var versions = ["0.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-template-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-template-simple/README.html