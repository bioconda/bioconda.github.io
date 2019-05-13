:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-jcode'
.. highlight: bash

perl-jcode
==========

.. conda:recipe:: perl-jcode
   :replaces_section_title:

   Japanese Charset Handler

   :homepage: http://metacpan.org/pod/Jcode
   :license: unknown
   :recipe: /`perl-jcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-jcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-jcode/meta.yaml>`_

   


.. conda:package:: perl-jcode

   |downloads_perl-jcode| |docker_perl-jcode|

   :versions: 2.07-2, 2.07-1, 2.07-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-jcode

   and update with::

      conda update perl-jcode

   or use the docker container::

      docker pull quay.io/biocontainers/perl-jcode:<tag>

   (see `perl-jcode/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-jcode| image:: https://img.shields.io/conda/dn/bioconda/perl-jcode.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-jcode
   :alt:   (downloads)
.. |docker_perl-jcode| image:: https://quay.io/repository/biocontainers/perl-jcode/status
   :target: https://quay.io/repository/biocontainers/perl-jcode
.. _`perl-jcode/tags`: https://quay.io/repository/biocontainers/perl-jcode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-jcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-jcode/README.html