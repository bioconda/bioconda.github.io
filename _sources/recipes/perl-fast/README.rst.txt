:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fast'
.. highlight: bash

perl-fast
=========

.. conda:recipe:: perl-fast
   :replaces_section_title:
   :noindex:

   FAST Analysis of Sequences Toolbox

   :homepage: http://metacpan.org/pod/FAST
   :license: Artistic-2.0
   :recipe: /`perl-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fast/meta.yaml>`_

   


.. conda:package:: perl-fast

   |downloads_perl-fast| |docker_perl-fast|

   :versions:
      
      

      ``1.06-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bit-vector: 
   :depends perl-pod-usage: 
   :depends perl-sort-key: 
   :depends perl-sort-mergesort: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-fast

   and update with::

      conda update perl-fast

   or use the docker container::

      docker pull quay.io/biocontainers/perl-fast:<tag>

   (see `perl-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-fast| image:: https://img.shields.io/conda/dn/bioconda/perl-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fast
   :alt:   (downloads)
.. |docker_perl-fast| image:: https://quay.io/repository/biocontainers/perl-fast/status
   :target: https://quay.io/repository/biocontainers/perl-fast
.. _`perl-fast/tags`: https://quay.io/repository/biocontainers/perl-fast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fast/README.html