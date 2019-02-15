:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-version-next'
.. highlight: bash

perl-version-next
=================

.. conda:recipe:: perl-version-next
   :replaces_section_title:

   increment module version numbers simply and correctly

   :homepage: https://github.com/dagolden/Version-Next
   :license: apache_2_0
   :recipe: /`perl-version-next <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next/meta.yaml>`_

   


.. conda:package:: perl-version-next

   |downloads_perl-version-next| |docker_perl-version-next|

   :versions: 1.000-1, 1.000-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :depends perl-apache-test: 
   
   :depends perl-perl-version: 
   
   :depends perl-sub-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-version-next

   and update with::

      conda update perl-version-next

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-version-next:<tag>

   (see `perl-version-next/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-version-next| image:: https://img.shields.io/conda/dn/bioconda/perl-version-next.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-version-next| image:: https://quay.io/repository/biocontainers/perl-version-next/status
   :target: https://quay.io/repository/biocontainers/perl-version-next
.. _`perl-version-next/tags`: https://quay.io/repository/biocontainers/perl-version-next?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-version-next/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-version-next/README.html