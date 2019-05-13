:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-compare'
.. highlight: bash

perl-data-compare
=================

.. conda:recipe:: perl-data-compare/1.25
   :replaces_section_title:

   compare perl data structures

   :homepage: http://metacpan.org/pod/Data::Compare
   :license: unknown
   :recipe: /`perl-data-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare>`_/`1.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare/1.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare/1.25/meta.yaml>`_

   


.. conda:package:: perl-data-compare

   |downloads_perl-data-compare| |docker_perl-data-compare|

   :versions: 1.25-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-file-find-rule: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-compare

   and update with::

      conda update perl-data-compare

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-compare:<tag>

   (see `perl-data-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-data-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-compare
   :alt:   (downloads)
.. |docker_perl-data-compare| image:: https://quay.io/repository/biocontainers/perl-data-compare/status
   :target: https://quay.io/repository/biocontainers/perl-data-compare
.. _`perl-data-compare/tags`: https://quay.io/repository/biocontainers/perl-data-compare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-compare/README.html