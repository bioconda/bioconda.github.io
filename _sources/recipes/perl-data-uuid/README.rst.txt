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

   :versions: 1.221

   :depends: :conda:package:`libgcc`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-data-uuid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-uuid

   and update with::

      conda update perl-data-uuid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-data-uuid


.. |required_by_perl-data-uuid| conda:required_by:: perl-data-uuid
.. |downloads_perl-data-uuid| image:: https://img.shields.io/conda/dn/bioconda/perl-data-uuid.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-data-uuid| image:: https://quay.io/repository/biocontainers/perl-data-uuid/status
   :target: https://quay.io/repository/biocontainers/perl-data-uuid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-uuid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-uuid/README.html

