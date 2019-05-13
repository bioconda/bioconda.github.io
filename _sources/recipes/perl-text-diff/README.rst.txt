:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-diff'
.. highlight: bash

perl-text-diff
==============

.. conda:recipe:: perl-text-diff
   :replaces_section_title:

   Perform diffs on files and record sets

   :homepage: http://metacpan.org/pod/Text-Diff
   :license: perl_5
   :recipe: /`perl-text-diff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-diff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-diff/meta.yaml>`_

   


.. conda:package:: perl-text-diff

   |downloads_perl-text-diff| |docker_perl-text-diff|

   :versions: 1.45-0, 1.44-2, 1.44-1, 1.44-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-algorithm-diff: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-diff

   and update with::

      conda update perl-text-diff

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-diff:<tag>

   (see `perl-text-diff/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-diff| image:: https://img.shields.io/conda/dn/bioconda/perl-text-diff.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-diff
   :alt:   (downloads)
.. |docker_perl-text-diff| image:: https://quay.io/repository/biocontainers/perl-text-diff/status
   :target: https://quay.io/repository/biocontainers/perl-text-diff
.. _`perl-text-diff/tags`: https://quay.io/repository/biocontainers/perl-text-diff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-diff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-diff/README.html