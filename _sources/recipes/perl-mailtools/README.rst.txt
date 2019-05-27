:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mailtools'
.. highlight: bash

perl-mailtools
==============

.. conda:recipe:: perl-mailtools
   :replaces_section_title:

   Various e\-mail related modules

   :homepage: http://metacpan.org/pod/MailTools
   :license: perl_5
   :recipe: /`perl-mailtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mailtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mailtools/meta.yaml>`_

   


.. conda:package:: perl-mailtools

   |downloads_perl-mailtools| |docker_perl-mailtools|

   :versions: 2.21-0, 2.20-0, 2.14-1, 2.14-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-date-format: 
   :depends perl-timedate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mailtools

   and update with::

      conda update perl-mailtools

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mailtools:<tag>

   (see `perl-mailtools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mailtools| image:: https://img.shields.io/conda/dn/bioconda/perl-mailtools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mailtools
   :alt:   (downloads)
.. |docker_perl-mailtools| image:: https://quay.io/repository/biocontainers/perl-mailtools/status
   :target: https://quay.io/repository/biocontainers/perl-mailtools
.. _`perl-mailtools/tags`: https://quay.io/repository/biocontainers/perl-mailtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mailtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mailtools/README.html