:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-www-robotrules'
.. highlight: bash

perl-www-robotrules
===================

.. conda:recipe:: perl-www-robotrules
   :replaces_section_title:

   database of robots.txt\-derived permissions

   :homepage: http://metacpan.org/pod/WWW::RobotRules
   :license: perl_5
   :recipe: /`perl-www-robotrules <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-robotrules>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-robotrules/meta.yaml>`_

   


.. conda:package:: perl-www-robotrules

   |downloads_perl-www-robotrules| |docker_perl-www-robotrules|

   :versions: 6.02-3, 6.02-2, 6.02-1, 6.02-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-uri: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-www-robotrules

   and update with::

      conda update perl-www-robotrules

   or use the docker container::

      docker pull quay.io/biocontainers/perl-www-robotrules:<tag>

   (see `perl-www-robotrules/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-www-robotrules| image:: https://img.shields.io/conda/dn/bioconda/perl-www-robotrules.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-www-robotrules
   :alt:   (downloads)
.. |docker_perl-www-robotrules| image:: https://quay.io/repository/biocontainers/perl-www-robotrules/status
   :target: https://quay.io/repository/biocontainers/perl-www-robotrules
.. _`perl-www-robotrules/tags`: https://quay.io/repository/biocontainers/perl-www-robotrules?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-www-robotrules/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-www-robotrules/README.html