:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-error'
.. highlight: bash

perl-error
==========

.. conda:recipe:: perl-error
   :replaces_section_title:

   Error\/exception handling in an OO\-ish way

   :homepage: http://metacpan.org/pod/Error
   :license: perl_5
   :recipe: /`perl-error <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-error>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-error/meta.yaml>`_

   


.. conda:package:: perl-error

   |downloads_perl-error| |docker_perl-error|

   :versions: 0.17027-0, 0.17024-1, 0.17024-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-error

   and update with::

      conda update perl-error

   or use the docker container::

      docker pull quay.io/biocontainers/perl-error:<tag>

   (see `perl-error/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-error| image:: https://img.shields.io/conda/dn/bioconda/perl-error.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-error| image:: https://quay.io/repository/biocontainers/perl-error/status
   :target: https://quay.io/repository/biocontainers/perl-error
.. _`perl-error/tags`: https://quay.io/repository/biocontainers/perl-error?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-error/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-error/README.html