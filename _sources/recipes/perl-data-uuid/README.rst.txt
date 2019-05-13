:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-uuid'
.. highlight: bash

perl-data-uuid
==============

.. conda:recipe:: perl-data-uuid
   :replaces_section_title:

   Globally\/Universally Unique Identifiers \(GUIDs\/UUIDs\)

   :homepage: http://metacpan.org/pod/Data::UUID
   :license: bsd
   :recipe: /`perl-data-uuid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid/meta.yaml>`_

   


.. conda:package:: perl-data-uuid

   |downloads_perl-data-uuid| |docker_perl-data-uuid|

   :versions: 1.224-0, 1.221-5, 1.221-4, 1.221-3, 1.221-2, 1.221-1, 1.221-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-digest-md5: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-uuid

   and update with::

      conda update perl-data-uuid

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-uuid:<tag>

   (see `perl-data-uuid/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-uuid| image:: https://img.shields.io/conda/dn/bioconda/perl-data-uuid.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-uuid
   :alt:   (downloads)
.. |docker_perl-data-uuid| image:: https://quay.io/repository/biocontainers/perl-data-uuid/status
   :target: https://quay.io/repository/biocontainers/perl-data-uuid
.. _`perl-data-uuid/tags`: https://quay.io/repository/biocontainers/perl-data-uuid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-uuid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-uuid/README.html