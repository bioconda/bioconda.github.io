:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parallel-iterator'
.. highlight: bash

perl-parallel-iterator
======================

.. conda:recipe:: perl-parallel-iterator
   :replaces_section_title:
   :noindex:

   Simple parallel execution

   :homepage: http://metacpan.org/pod/Parallel::Iterator
   :license: perl_5
   :recipe: /`perl-parallel-iterator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-iterator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-iterator/meta.yaml>`_

   


.. conda:package:: perl-parallel-iterator

   |downloads_perl-parallel-iterator| |docker_perl-parallel-iterator|

   :versions:
      
      

      ``1.00-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-storable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-parallel-iterator

   and update with::

      conda update perl-parallel-iterator

   or use the docker container::

      docker pull quay.io/biocontainers/perl-parallel-iterator:<tag>

   (see `perl-parallel-iterator/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parallel-iterator| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-iterator.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parallel-iterator
   :alt:   (downloads)
.. |docker_perl-parallel-iterator| image:: https://quay.io/repository/biocontainers/perl-parallel-iterator/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-iterator
.. _`perl-parallel-iterator/tags`: https://quay.io/repository/biocontainers/perl-parallel-iterator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-iterator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-iterator/README.html