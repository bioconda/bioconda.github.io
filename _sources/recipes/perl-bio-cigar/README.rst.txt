:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-cigar'
.. highlight: bash

perl-bio-cigar
==============

.. conda:recipe:: perl-bio-cigar
   :replaces_section_title:
   :noindex:

   Parse CIGAR strings and translate coordinates to\/from reference\/query

   :homepage: https://github.com/MullinsLab/Bio-Cigar
   :license: gpl_2
   :recipe: /`perl-bio-cigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-cigar/meta.yaml>`_
   :links: biotools: :biotools:`bio-cigar`

   


.. conda:package:: perl-bio-cigar

   |downloads_perl-bio-cigar| |docker_perl-bio-cigar|

   :versions:
      
      

      ``1.01-5``,  ``1.01-4``,  ``1.01-3``,  ``1.01-2``,  ``1.01-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-moo: 
   :depends perl-namespace-clean: 
   :depends perl-type-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-cigar

   and update with::

      conda update perl-bio-cigar

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-cigar:<tag>

   (see `perl-bio-cigar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-cigar| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-cigar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-cigar
   :alt:   (downloads)
.. |docker_perl-bio-cigar| image:: https://quay.io/repository/biocontainers/perl-bio-cigar/status
   :target: https://quay.io/repository/biocontainers/perl-bio-cigar
.. _`perl-bio-cigar/tags`: https://quay.io/repository/biocontainers/perl-bio-cigar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-cigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-cigar/README.html