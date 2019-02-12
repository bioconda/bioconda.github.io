:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-types'
.. highlight: bash

perl-mime-types
===============

.. conda:recipe:: perl-mime-types
   :replaces_section_title:

   Definition of MIME types

   :homepage: http://metacpan.org/pod/MIME-Types
   :license: perl_5
   :recipe: /`perl-mime-types <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-types>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-types/meta.yaml>`_

   


.. conda:package:: perl-mime-types

   |downloads_perl-mime-types| |docker_perl-mime-types|

   :versions: 2.17-0, 2.12-1, 2.12-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mime-types

   and update with::

      conda update perl-mime-types

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mime-types:<tag>

   (see `perl-mime-types/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-types| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-types.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mime-types| image:: https://quay.io/repository/biocontainers/perl-mime-types/status
   :target: https://quay.io/repository/biocontainers/perl-mime-types
.. _`perl-mime-types/tags`: https://quay.io/repository/biocontainers/perl-mime-types?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-types/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-types/README.html