:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-installpaths'
.. highlight: bash

perl-extutils-installpaths
==========================

.. conda:recipe:: perl-extutils-installpaths
   :replaces_section_title:
   :noindex:

   Build.PL install path logic made easy

   :homepage: http://metacpan.org/pod/ExtUtils::InstallPaths
   :license: perl_5
   :recipe: /`perl-extutils-installpaths <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-installpaths>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-installpaths/meta.yaml>`_

   


.. conda:package:: perl-extutils-installpaths

   |downloads_perl-extutils-installpaths| |docker_perl-extutils-installpaths|

   :versions:
      
      

      ``0.012-1``,  ``0.012-0``,  ``0.011-1``,  ``0.011-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-extutils-config: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-installpaths

   and update with::

      conda update perl-extutils-installpaths

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-installpaths:<tag>

   (see `perl-extutils-installpaths/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-installpaths| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-installpaths.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-installpaths
   :alt:   (downloads)
.. |docker_perl-extutils-installpaths| image:: https://quay.io/repository/biocontainers/perl-extutils-installpaths/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-installpaths
.. _`perl-extutils-installpaths/tags`: https://quay.io/repository/biocontainers/perl-extutils-installpaths?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-installpaths";
        var versions = ["0.012","0.012","0.011","0.011"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-installpaths/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-installpaths/README.html