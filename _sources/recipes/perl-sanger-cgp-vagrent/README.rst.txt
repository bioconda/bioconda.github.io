:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-vagrent'
.. highlight: bash

perl-sanger-cgp-vagrent
=======================

.. conda:recipe:: perl-sanger-cgp-vagrent
   :replaces_section_title:

   A toolset for comparing genomic variants to reference genome annotation to identify potential biological consequences

   :homepage: https://github.com/cancerit/VAGrENT
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-vagrent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vagrent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vagrent/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-vagrent

   |downloads_perl-sanger-cgp-vagrent| |docker_perl-sanger-cgp-vagrent|

   :versions: 3.5.0-1, 3.5.0-0, 3.3.3-0, 3.2.0-1, 3.2.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bio-db-hts: 
   :depends perl-set-intervaltree: 
   :depends perl-sub-exporter-progressive: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sanger-cgp-vagrent

   and update with::

      conda update perl-sanger-cgp-vagrent

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-vagrent:<tag>

   (see `perl-sanger-cgp-vagrent/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-vagrent| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-vagrent.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-vagrent
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-vagrent| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent
.. _`perl-sanger-cgp-vagrent/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-vagrent?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-vagrent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-vagrent/README.html