:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-writer'
.. highlight: bash

perl-xml-writer
===============

.. conda:recipe:: perl-xml-writer
   :replaces_section_title:

   Easily generate well\-formed\, namespace\-aware XML.

   :homepage: http://metacpan.org/pod/XML-Writer
   :license: unrestricted
   :recipe: /`perl-xml-writer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-writer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-writer/meta.yaml>`_

   


.. conda:package:: perl-xml-writer

   |downloads_perl-xml-writer| |docker_perl-xml-writer|

   :versions: 0.625-2, 0.625-1, 0.625-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-writer

   and update with::

      conda update perl-xml-writer

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-writer:<tag>

   (see `perl-xml-writer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-writer| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-writer.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-writer| image:: https://quay.io/repository/biocontainers/perl-xml-writer/status
   :target: https://quay.io/repository/biocontainers/perl-xml-writer
.. _`perl-xml-writer/tags`: https://quay.io/repository/biocontainers/perl-xml-writer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-writer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-writer/README.html