:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-format'
.. highlight: bash

perl-text-format
================

.. conda:recipe:: perl-text-format
   :replaces_section_title:

   Format text

   :homepage: http://www.shlomifish.org/open-source/projects/Text-Format/
   :license: perl_5
   :recipe: /`perl-text-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-format>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-format/meta.yaml>`_

   


.. conda:package:: perl-text-format

   |downloads_perl-text-format| |docker_perl-text-format|

   :versions: 0.59-1, 0.59-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-format

   and update with::

      conda update perl-text-format

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-text-format:<tag>

   (see `perl-text-format/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-format| image:: https://img.shields.io/conda/dn/bioconda/perl-text-format.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-format| image:: https://quay.io/repository/biocontainers/perl-text-format/status
   :target: https://quay.io/repository/biocontainers/perl-text-format
.. _`perl-text-format/tags`: https://quay.io/repository/biocontainers/perl-text-format?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-format/README.html