:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-libxml'
.. highlight: bash

perl-xml-libxml
===============

.. conda:recipe:: perl-xml-libxml
   :replaces_section_title:

   Interface to Gnome libxml2 xml parsing and DOM library

   :homepage: https://bitbucket.org/shlomif/perl-xml-libxml
   :license: Perl
   :recipe: /`perl-xml-libxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxml/meta.yaml>`_

   


.. conda:package:: perl-xml-libxml

   |downloads_perl-xml-libxml| |docker_perl-xml-libxml|

   :versions: 2.0132-0, 2.0124-0
   
   :depends libxml2: >=2.9.8,<2.10.0a0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-xml-namespacesupport: 
   
   :depends perl-xml-sax: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-libxml

   and update with::

      conda update perl-xml-libxml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-libxml:<tag>

   (see `perl-xml-libxml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-libxml| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-libxml.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-libxml| image:: https://quay.io/repository/biocontainers/perl-xml-libxml/status
   :target: https://quay.io/repository/biocontainers/perl-xml-libxml
.. _`perl-xml-libxml/tags`: https://quay.io/repository/biocontainers/perl-xml-libxml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-libxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-libxml/README.html