:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-timedate'
.. highlight: bash

perl-timedate
=============

.. conda:recipe:: perl-timedate
   :replaces_section_title:

   Date formating subroutines

   :homepage: http://metacpan.org/pod/TimeDate
   :license: perl_5
   :recipe: /`perl-timedate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-timedate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-timedate/meta.yaml>`_

   


.. conda:package:: perl-timedate

   |downloads_perl-timedate| |docker_perl-timedate|

   :versions: 2.30-1, 2.30-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-timedate

   and update with::

      conda update perl-timedate

   or use the docker container::

      docker pull quay.io/biocontainers/perl-timedate:<tag>

   (see `perl-timedate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-timedate| image:: https://img.shields.io/conda/dn/bioconda/perl-timedate.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-timedate| image:: https://quay.io/repository/biocontainers/perl-timedate/status
   :target: https://quay.io/repository/biocontainers/perl-timedate
.. _`perl-timedate/tags`: https://quay.io/repository/biocontainers/perl-timedate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-timedate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-timedate/README.html