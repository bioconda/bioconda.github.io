:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-retroseq'
.. highlight: bash

perl-retroseq
=============

.. conda:recipe:: perl-retroseq
   :replaces_section_title:
   :noindex:

   RetroSeq\: discovery and genotyping of TEVs from reads in BAM format.

   :homepage: https://github.com/tk2/RetroSeq
   :license: GPL
   :recipe: /`perl-retroseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-retroseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-retroseq/meta.yaml>`_

   


.. conda:package:: perl-retroseq

   |downloads_perl-retroseq| |docker_perl-retroseq|

   :versions:
      
      

      ``1.5-0``

      

   
   :depends bedtools: 
   :depends exonerate: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-retroseq

   and update with::

      conda update perl-retroseq

   or use the docker container::

      docker pull quay.io/biocontainers/perl-retroseq:<tag>

   (see `perl-retroseq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-retroseq| image:: https://img.shields.io/conda/dn/bioconda/perl-retroseq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-retroseq
   :alt:   (downloads)
.. |docker_perl-retroseq| image:: https://quay.io/repository/biocontainers/perl-retroseq/status
   :target: https://quay.io/repository/biocontainers/perl-retroseq
.. _`perl-retroseq/tags`: https://quay.io/repository/biocontainers/perl-retroseq?tab=tags


.. raw:: html

    <script>
        var package = "perl-retroseq";
        var versions = ["1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-retroseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-retroseq/README.html