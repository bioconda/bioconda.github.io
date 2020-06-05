:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-refhash-weak'
.. highlight: bash

perl-tie-refhash-weak
=====================

.. conda:recipe:: perl-tie-refhash-weak/0.09
   :replaces_section_title:
   :noindex:

   A Tie\:\:RefHash subclass with weakened references in the keys.

   :homepage: http://metacpan.org/pod/Tie::RefHash::Weak
   :license: unknown
   :recipe: /`perl-tie-refhash-weak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak>`_/`0.09 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak/0.09>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak/0.09/meta.yaml>`_

   


.. conda:package:: perl-tie-refhash-weak

   |downloads_perl-tie-refhash-weak| |docker_perl-tie-refhash-weak|

   :versions:
      
      

      ``0.09-2``,  ``0.09-1``,  ``0.09-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-task-weaken: 
   :depends perl-tie-refhash: 
   :depends perl-variable-magic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-tie-refhash-weak

   and update with::

      conda update perl-tie-refhash-weak

   or use the docker container::

      docker pull quay.io/biocontainers/perl-tie-refhash-weak:<tag>

   (see `perl-tie-refhash-weak/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-refhash-weak| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-refhash-weak.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-refhash-weak
   :alt:   (downloads)
.. |docker_perl-tie-refhash-weak| image:: https://quay.io/repository/biocontainers/perl-tie-refhash-weak/status
   :target: https://quay.io/repository/biocontainers/perl-tie-refhash-weak
.. _`perl-tie-refhash-weak/tags`: https://quay.io/repository/biocontainers/perl-tie-refhash-weak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-refhash-weak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-refhash-weak/README.html