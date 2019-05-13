:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-dom'
.. highlight: bash

perl-xml-dom
============

.. conda:recipe:: perl-xml-dom
   :replaces_section_title:

   A perl module for building DOM Level 1 compliant document structures

   :homepage: http://metacpan.org/pod/XML-DOM
   :license: unknown
   :recipe: /`perl-xml-dom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom/meta.yaml>`_

   


.. conda:package:: perl-xml-dom

   |downloads_perl-xml-dom| |docker_perl-xml-dom|

   :versions: 1.46-0, 1.45-1, 1.45-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-libwww-perl: 
   :depends perl-libxml-perl: 
   :depends perl-xml-parser: 
   :depends perl-xml-regexp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-dom

   and update with::

      conda update perl-xml-dom

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-dom:<tag>

   (see `perl-xml-dom/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-dom| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-dom.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-dom
   :alt:   (downloads)
.. |docker_perl-xml-dom| image:: https://quay.io/repository/biocontainers/perl-xml-dom/status
   :target: https://quay.io/repository/biocontainers/perl-xml-dom
.. _`perl-xml-dom/tags`: https://quay.io/repository/biocontainers/perl-xml-dom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-dom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-dom/README.html