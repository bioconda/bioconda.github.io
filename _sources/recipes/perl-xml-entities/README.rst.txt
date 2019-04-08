:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-entities'
.. highlight: bash

perl-xml-entities
=================

.. conda:recipe:: perl-xml-entities
   :replaces_section_title:

   Mapping of XML entities to Unicode

   :homepage: http://metacpan.org/pod/XML::Entities
   :license: perl_5
   :recipe: /`perl-xml-entities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-entities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-entities/meta.yaml>`_

   


.. conda:package:: perl-xml-entities

   |downloads_perl-xml-entities| |docker_perl-xml-entities|

   :versions: 1.0002-1, 1.0002-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-entities

   and update with::

      conda update perl-xml-entities

   or use the docker container::

      docker pull quay.io/biocontainers/perl-xml-entities:<tag>

   (see `perl-xml-entities/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-entities| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-entities.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-entities| image:: https://quay.io/repository/biocontainers/perl-xml-entities/status
   :target: https://quay.io/repository/biocontainers/perl-xml-entities
.. _`perl-xml-entities/tags`: https://quay.io/repository/biocontainers/perl-xml-entities?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-entities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-entities/README.html