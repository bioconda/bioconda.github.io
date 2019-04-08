:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-stag'
.. highlight: bash

perl-data-stag
==============

.. conda:recipe:: perl-data-stag
   :replaces_section_title:

   Structured Tags

   :homepage: http://metacpan.org/pod/Data-Stag
   :license: unknown
   :recipe: /`perl-data-stag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-stag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-stag/meta.yaml>`_

   


.. conda:package:: perl-data-stag

   |downloads_perl-data-stag| |docker_perl-data-stag|

   :versions: 0.14-1, 0.14-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-graph: 
   :depends perl-io-string: 
   :depends perl-json: 
   :depends perl-libxml-perl: 
   :depends perl-mldbm: 
   :depends perl-xml-libxml: 
   :depends perl-xml-libxslt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-stag

   and update with::

      conda update perl-data-stag

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-stag:<tag>

   (see `perl-data-stag/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-stag| image:: https://img.shields.io/conda/dn/bioconda/perl-data-stag.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-data-stag| image:: https://quay.io/repository/biocontainers/perl-data-stag/status
   :target: https://quay.io/repository/biocontainers/perl-data-stag
.. _`perl-data-stag/tags`: https://quay.io/repository/biocontainers/perl-data-stag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-stag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-stag/README.html