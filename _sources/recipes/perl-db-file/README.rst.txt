:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-db-file'
.. highlight: bash

perl-db-file
============

.. conda:recipe:: perl-db-file
   :replaces_section_title:
   :noindex:

   Perl5 access to Berkeley DB version 1.x.

   :homepage: https://metacpan.org/pod/Set::IntervalTree
   :license: perl_5
   :recipe: /`perl-db-file <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-db-file>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-db-file/meta.yaml>`_

   


.. conda:package:: perl-db-file

   |downloads_perl-db-file| |docker_perl-db-file|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.855-0</code>,  <code>1.852-1</code>,  <code>1.852-0</code>,  <code>1.843-0</code>,  <code>1.835-6</code>,  <code>1.835-5</code>,  <code>1.835-4</code>,  <code>1.835-3</code>,  <code>1.835-2</code>,  </span></summary>
      

      ``1.855-0``,  ``1.852-1``,  ``1.852-0``,  ``1.843-0``,  ``1.835-6``,  ``1.835-5``,  ``1.835-4``,  ``1.835-3``,  ``1.835-2``,  ``1.835-1``,  ``1.835-0``

      
      .. raw:: html

         </details>
      

   
   :depends libdb: ``>=6.2.32,<6.3.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-db-file

   and update with::

      conda update perl-db-file

   or use the docker container::

      docker pull quay.io/biocontainers/perl-db-file:<tag>

   (see `perl-db-file/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-db-file| image:: https://img.shields.io/conda/dn/bioconda/perl-db-file.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-db-file
   :alt:   (downloads)
.. |docker_perl-db-file| image:: https://quay.io/repository/biocontainers/perl-db-file/status
   :target: https://quay.io/repository/biocontainers/perl-db-file
.. _`perl-db-file/tags`: https://quay.io/repository/biocontainers/perl-db-file?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-db-file/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-db-file/README.html