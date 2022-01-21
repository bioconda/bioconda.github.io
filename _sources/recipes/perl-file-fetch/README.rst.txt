:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-fetch'
.. highlight: bash

perl-file-fetch
===============

.. conda:recipe:: perl-file-fetch
   :replaces_section_title:
   :noindex:

   Generic file fetching code

   :homepage: http://metacpan.org/pod/File::Fetch
   :license: perl_5
   :recipe: /`perl-file-fetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-fetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-fetch/meta.yaml>`_

   


.. conda:package:: perl-file-fetch

   |downloads_perl-file-fetch| |docker_perl-file-fetch|

   :versions:
      
      

      ``0.56-1``,  ``0.56-0``,  ``0.48-4``,  ``0.48-3``,  ``0.48-2``,  ``0.48-1``,  ``0.48-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-path: 
   :depends perl-ipc-cmd: 
   :depends perl-locale-maketext-simple: 
   :depends perl-module-load-conditional: 
   :depends perl-params-check: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-fetch

   and update with::

      conda update perl-file-fetch

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-fetch:<tag>

   (see `perl-file-fetch/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-fetch| image:: https://img.shields.io/conda/dn/bioconda/perl-file-fetch.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-fetch
   :alt:   (downloads)
.. |docker_perl-file-fetch| image:: https://quay.io/repository/biocontainers/perl-file-fetch/status
   :target: https://quay.io/repository/biocontainers/perl-file-fetch
.. _`perl-file-fetch/tags`: https://quay.io/repository/biocontainers/perl-file-fetch?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-fetch";
        var versions = ["0.56","0.56","0.48","0.48","0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-fetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-fetch/README.html