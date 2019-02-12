:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-onto-perl'
.. highlight: bash

perl-onto-perl
==============

.. conda:recipe:: perl-onto-perl
   :replaces_section_title:

   PERL modules for manipulating OBO\-formatted ontologies\, such as the Gene Ontology \(GO\)

   :homepage: http://metacpan.org/pod/ONTO-PERL
   :license: perl_5
   :recipe: /`perl-onto-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl/meta.yaml>`_

   


.. conda:package:: perl-onto-perl

   |downloads_perl-onto-perl| |docker_perl-onto-perl|

   :versions: 1.45-2, 1.45-1, 1.45-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-date-manip: 
   
   :depends perl-text-csv: 
   
   :depends perl-xml-parser: 
   
   :depends perl-xml-xpath: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-onto-perl

   and update with::

      conda update perl-onto-perl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-onto-perl:<tag>

   (see `perl-onto-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-onto-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-onto-perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-onto-perl| image:: https://quay.io/repository/biocontainers/perl-onto-perl/status
   :target: https://quay.io/repository/biocontainers/perl-onto-perl
.. _`perl-onto-perl/tags`: https://quay.io/repository/biocontainers/perl-onto-perl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-onto-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-onto-perl/README.html