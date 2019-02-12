:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-types-serialiser'
.. highlight: bash

perl-types-serialiser
=====================

.. conda:recipe:: perl-types-serialiser
   :replaces_section_title:

   Simple data types for common serialisation formats

   :homepage: http://metacpan.org/pod/Types::Serialiser
   :license: perl_5
   :recipe: /`perl-types-serialiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-types-serialiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-types-serialiser/meta.yaml>`_

   


.. conda:package:: perl-types-serialiser

   |downloads_perl-types-serialiser| |docker_perl-types-serialiser|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-common-sense: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-types-serialiser

   and update with::

      conda update perl-types-serialiser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-types-serialiser:<tag>

   (see `perl-types-serialiser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-types-serialiser| image:: https://img.shields.io/conda/dn/bioconda/perl-types-serialiser.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-types-serialiser| image:: https://quay.io/repository/biocontainers/perl-types-serialiser/status
   :target: https://quay.io/repository/biocontainers/perl-types-serialiser
.. _`perl-types-serialiser/tags`: https://quay.io/repository/biocontainers/perl-types-serialiser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-types-serialiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-types-serialiser/README.html