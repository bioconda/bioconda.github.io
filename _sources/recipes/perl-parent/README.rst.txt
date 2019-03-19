:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parent'
.. highlight: bash

perl-parent
===========

.. conda:recipe:: perl-parent/0.236
   :replaces_section_title:

   Establish an ISA relationship with base classes at compile time

   :homepage: http://metacpan.org/pod/parent
   :license: perl_5
   :recipe: /`perl-parent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parent>`_/`0.236 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parent/0.236>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parent/0.236/meta.yaml>`_

   


.. conda:package:: perl-parent

   |downloads_perl-parent| |docker_perl-parent|

   :versions: 0.236-1, 0.236-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-parent

   and update with::

      conda update perl-parent

   or use the docker container::

      docker pull quay.io/biocontainers/perl-parent:<tag>

   (see `perl-parent/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parent| image:: https://img.shields.io/conda/dn/bioconda/perl-parent.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-parent| image:: https://quay.io/repository/biocontainers/perl-parent/status
   :target: https://quay.io/repository/biocontainers/perl-parent
.. _`perl-parent/tags`: https://quay.io/repository/biocontainers/perl-parent?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parent/README.html