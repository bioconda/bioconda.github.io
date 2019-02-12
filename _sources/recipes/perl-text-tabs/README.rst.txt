:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-tabs'
.. highlight: bash

perl-text-tabs
==============

.. conda:recipe:: perl-text-tabs/2013.0523
   :replaces_section_title:

   expand and unexpand tabs like unix expand\(1\) and unexpand\(1\)

   :homepage: http://metacpan.org/pod/Text::Tabs
   :license: perl_5
   :recipe: /`perl-text-tabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-tabs>`_/`2013.0523 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-tabs/2013.0523>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-tabs/2013.0523/meta.yaml>`_

   


.. conda:package:: perl-text-tabs

   |downloads_perl-text-tabs| |docker_perl-text-tabs|

   :versions: 2013.0523-1, 2013.0523-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-tabs

   and update with::

      conda update perl-text-tabs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-text-tabs:<tag>

   (see `perl-text-tabs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-tabs| image:: https://img.shields.io/conda/dn/bioconda/perl-text-tabs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-tabs| image:: https://quay.io/repository/biocontainers/perl-text-tabs/status
   :target: https://quay.io/repository/biocontainers/perl-text-tabs
.. _`perl-text-tabs/tags`: https://quay.io/repository/biocontainers/perl-text-tabs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-tabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-tabs/README.html