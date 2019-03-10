:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-path-tiny'
.. highlight: bash

perl-path-tiny
==============

.. conda:recipe:: perl-path-tiny
   :replaces_section_title:

   File path utility

   :homepage: https://github.com/dagolden/Path-Tiny
   :license: apache_2_0
   :recipe: /`perl-path-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-tiny/meta.yaml>`_

   


.. conda:package:: perl-path-tiny

   |downloads_perl-path-tiny| |docker_perl-path-tiny|

   :versions: 0.108-0, 0.082-2, 0.082-1, 0.082-0, 0.076-3, 0.076-2, 0.076-1, 0.076-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-path-tiny

   and update with::

      conda update perl-path-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-path-tiny:<tag>

   (see `perl-path-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-path-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-path-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-path-tiny| image:: https://quay.io/repository/biocontainers/perl-path-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-path-tiny
.. _`perl-path-tiny/tags`: https://quay.io/repository/biocontainers/perl-path-tiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-path-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-path-tiny/README.html