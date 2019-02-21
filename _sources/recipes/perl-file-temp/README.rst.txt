:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-temp'
.. highlight: bash

perl-file-temp
==============

.. conda:recipe:: perl-file-temp/0.2304
   :replaces_section_title:

   return name and handle of a temporary file safely

   :homepage: https://github.com/Perl-Toolchain-Gang/File-Temp
   :license: perl_5
   :recipe: /`perl-file-temp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-temp>`_/`0.2304 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-temp/0.2304>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-temp/0.2304/meta.yaml>`_

   


.. conda:package:: perl-file-temp

   |downloads_perl-file-temp| |docker_perl-file-temp|

   :versions: 0.2304-2, 0.2304-1, 0.2304-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-app-cpanminus: 
   
   :depends perl-carp: 
   
   :depends perl-constant: 
   
   :depends perl-exporter: 
   
   :depends perl-file-path: 
   
   :depends perl-parent: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-temp

   and update with::

      conda update perl-file-temp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-temp:<tag>

   (see `perl-file-temp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-temp| image:: https://img.shields.io/conda/dn/bioconda/perl-file-temp.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-temp| image:: https://quay.io/repository/biocontainers/perl-file-temp/status
   :target: https://quay.io/repository/biocontainers/perl-file-temp
.. _`perl-file-temp/tags`: https://quay.io/repository/biocontainers/perl-file-temp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-temp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-temp/README.html