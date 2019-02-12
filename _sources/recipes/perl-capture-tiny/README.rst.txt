:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-capture-tiny'
.. highlight: bash

perl-capture-tiny
=================

.. conda:recipe:: perl-capture-tiny
   :replaces_section_title:

   Capture STDOUT and STDERR from Perl\, XS or external programs

   :homepage: https://github.com/dagolden/Capture-Tiny
   :license: apache_2_0
   :recipe: /`perl-capture-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-capture-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-capture-tiny/meta.yaml>`_

   


.. conda:package:: perl-capture-tiny

   |downloads_perl-capture-tiny| |docker_perl-capture-tiny|

   :versions: 0.48-0, 0.36-2, 0.36-1, 0.36-0, 0.34-2, 0.34-1, 0.34-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-capture-tiny

   and update with::

      conda update perl-capture-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-capture-tiny:<tag>

   (see `perl-capture-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-capture-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-capture-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-capture-tiny| image:: https://quay.io/repository/biocontainers/perl-capture-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-capture-tiny
.. _`perl-capture-tiny/tags`: https://quay.io/repository/biocontainers/perl-capture-tiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-capture-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-capture-tiny/README.html