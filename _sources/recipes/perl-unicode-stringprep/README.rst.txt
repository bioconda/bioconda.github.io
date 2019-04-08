:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-stringprep'
.. highlight: bash

perl-unicode-stringprep
=======================

.. conda:recipe:: perl-unicode-stringprep
   :replaces_section_title:

   Preparation of Internationalized Strings \(RFC 3454\)

   :homepage: http://metacpan.org/pod/Unicode-Stringprep
   :license: perl_5
   :recipe: /`perl-unicode-stringprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-stringprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-stringprep/meta.yaml>`_

   


.. conda:package:: perl-unicode-stringprep

   |downloads_perl-unicode-stringprep| |docker_perl-unicode-stringprep|

   :versions: 1.105-2, 1.105-1, 1.105-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-unicode-stringprep

   and update with::

      conda update perl-unicode-stringprep

   or use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-stringprep:<tag>

   (see `perl-unicode-stringprep/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-stringprep| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-stringprep.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-unicode-stringprep| image:: https://quay.io/repository/biocontainers/perl-unicode-stringprep/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-stringprep
.. _`perl-unicode-stringprep/tags`: https://quay.io/repository/biocontainers/perl-unicode-stringprep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-stringprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-stringprep/README.html