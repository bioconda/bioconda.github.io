:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-parser-lite'
.. highlight: bash

perl-xml-parser-lite
====================

.. conda:recipe:: perl-xml-parser-lite
   :replaces_section_title:

   Lightweight pure\-perl XML Parser \(based on regexps\)

   :homepage: http://metacpan.org/pod/XML-Parser-Lite
   :license: perl_5
   :recipe: /`perl-xml-parser-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-parser-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-parser-lite/meta.yaml>`_

   


.. conda:package:: perl-xml-parser-lite

   |downloads_perl-xml-parser-lite| |docker_perl-xml-parser-lite|

   :versions: 0.722-0, 0.721-2, 0.721-1, 0.721-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-parser-lite

   and update with::

      conda update perl-xml-parser-lite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-parser-lite:<tag>

   (see `perl-xml-parser-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-parser-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-parser-lite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-parser-lite| image:: https://quay.io/repository/biocontainers/perl-xml-parser-lite/status
   :target: https://quay.io/repository/biocontainers/perl-xml-parser-lite
.. _`perl-xml-parser-lite/tags`: https://quay.io/repository/biocontainers/perl-xml-parser-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-parser-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-parser-lite/README.html