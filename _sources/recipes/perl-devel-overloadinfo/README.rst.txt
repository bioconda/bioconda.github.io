:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-overloadinfo'
.. highlight: bash

perl-devel-overloadinfo
=======================

.. conda:recipe:: perl-devel-overloadinfo
   :replaces_section_title:
   :noindex:

   introspect overloaded operators

   :homepage: http://metacpan.org/pod/Devel::OverloadInfo
   :license: perl_5
   :recipe: /`perl-devel-overloadinfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-overloadinfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-overloadinfo/meta.yaml>`_

   


.. conda:package:: perl-devel-overloadinfo

   |downloads_perl-devel-overloadinfo| |docker_perl-devel-overloadinfo|

   :versions:
      
      

      ``0.005-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-exporter: 
   :depends perl-mro-compat: 
   :depends perl-package-stash: 
   :depends perl-sub-identify: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-overloadinfo

   and update with::

      conda update perl-devel-overloadinfo

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-overloadinfo:<tag>

   (see `perl-devel-overloadinfo/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-overloadinfo| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-overloadinfo.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-overloadinfo
   :alt:   (downloads)
.. |docker_perl-devel-overloadinfo| image:: https://quay.io/repository/biocontainers/perl-devel-overloadinfo/status
   :target: https://quay.io/repository/biocontainers/perl-devel-overloadinfo
.. _`perl-devel-overloadinfo/tags`: https://quay.io/repository/biocontainers/perl-devel-overloadinfo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-overloadinfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-overloadinfo/README.html