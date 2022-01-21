:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-build-tiny'
.. highlight: bash

perl-module-build-tiny
======================

.. conda:recipe:: perl-module-build-tiny
   :replaces_section_title:
   :noindex:

   A tiny replacement for Module\:\:Build

   :homepage: http://metacpan.org/pod/Module::Build::Tiny
   :license: perl_5
   :recipe: /`perl-module-build-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-build-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-build-tiny/meta.yaml>`_

   


.. conda:package:: perl-module-build-tiny

   |downloads_perl-module-build-tiny| |docker_perl-module-build-tiny|

   :versions:
      
      

      ``0.039-4``,  ``0.039-3``,  ``0.039-2``,  ``0.039-1``,  ``0.039-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-cpan-meta: 
   :depends perl-exporter: 
   :depends perl-extutils-cbuilder: 
   :depends perl-extutils-config: 
   :depends perl-extutils-helpers: 
   :depends perl-extutils-installpaths: ``>=0.002``
   :depends perl-extutils-parsexs: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-json-pp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-build-tiny

   and update with::

      conda update perl-module-build-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-build-tiny:<tag>

   (see `perl-module-build-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-build-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-module-build-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-build-tiny
   :alt:   (downloads)
.. |docker_perl-module-build-tiny| image:: https://quay.io/repository/biocontainers/perl-module-build-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-module-build-tiny
.. _`perl-module-build-tiny/tags`: https://quay.io/repository/biocontainers/perl-module-build-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-build-tiny";
        var versions = ["0.039","0.039","0.039","0.039","0.039"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-build-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-build-tiny/README.html