:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-config'
.. highlight: bash

perl-extutils-config
====================

.. conda:recipe:: perl-extutils-config
   :replaces_section_title:
   :noindex:

   A wrapper for perl\'s configuration

   :homepage: http://metacpan.org/pod/ExtUtils::Config
   :license: perl_5
   :recipe: /`perl-extutils-config <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-config>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-config/meta.yaml>`_

   


.. conda:package:: perl-extutils-config

   |downloads_perl-extutils-config| |docker_perl-extutils-config|

   :versions:
      
      

      ``0.008-3``,  ``0.008-2``,  ``0.008-1``,  ``0.008-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-config

   and update with::

      conda update perl-extutils-config

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-config:<tag>

   (see `perl-extutils-config/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-config| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-config.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-config
   :alt:   (downloads)
.. |docker_perl-extutils-config| image:: https://quay.io/repository/biocontainers/perl-extutils-config/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-config
.. _`perl-extutils-config/tags`: https://quay.io/repository/biocontainers/perl-extutils-config?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-config";
        var versions = ["0.008","0.008","0.008","0.008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-config/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-config/README.html