:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-allelecount'
.. highlight: bash

perl-sanger-cgp-allelecount
===========================

.. conda:recipe:: perl-sanger-cgp-allelecount
   :replaces_section_title:

   Support code for NGS copy number algorithm

   :homepage: https://github.com/cancerit/alleleCount
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-allelecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-allelecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-allelecount/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-allelecount

   |downloads_perl-sanger-cgp-allelecount| |docker_perl-sanger-cgp-allelecount|

   :versions: 4.0.0-0, 2.1.2-3, 2.1.2-2, 2.1.2-1
   
   :depends libgcc-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-bio-db-sam: 
   
   :depends perl-bioperl: 
   
   :depends perl-sanger-cgp-vcf: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sanger-cgp-allelecount

   and update with::

      conda update perl-sanger-cgp-allelecount

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-allelecount:<tag>

   (see `perl-sanger-cgp-allelecount/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-allelecount| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-allelecount.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-allelecount| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount
.. _`perl-sanger-cgp-allelecount/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-allelecount?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-allelecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-allelecount/README.html