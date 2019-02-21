:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-regexp'
.. highlight: bash

perl-xml-regexp
===============

.. conda:recipe:: perl-xml-regexp
   :replaces_section_title:

   Regular expressions for XML tokens

   :homepage: http://metacpan.org/pod/XML-RegExp
   :license: unknown
   :recipe: /`perl-xml-regexp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-regexp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-regexp/meta.yaml>`_

   


.. conda:package:: perl-xml-regexp

   |downloads_perl-xml-regexp| |docker_perl-xml-regexp|

   :versions: 0.04-2, 0.04-1, 0.04-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-regexp

   and update with::

      conda update perl-xml-regexp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-regexp:<tag>

   (see `perl-xml-regexp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-regexp| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-regexp.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-regexp| image:: https://quay.io/repository/biocontainers/perl-xml-regexp/status
   :target: https://quay.io/repository/biocontainers/perl-xml-regexp
.. _`perl-xml-regexp/tags`: https://quay.io/repository/biocontainers/perl-xml-regexp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-regexp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-regexp/README.html