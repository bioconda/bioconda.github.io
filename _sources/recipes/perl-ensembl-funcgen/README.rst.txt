:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-funcgen'
.. highlight: bash

perl-ensembl-funcgen
====================

.. conda:recipe:: perl-ensembl-funcgen
   :replaces_section_title:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-funcgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-funcgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-funcgen/meta.yaml>`_

   


.. conda:package:: perl-ensembl-funcgen

   |downloads_perl-ensembl-funcgen| |docker_perl-ensembl-funcgen|

   :versions: 98-0
   
   :depends perl-ensembl-core: 
   :depends perl-role-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ensembl-funcgen

   and update with::

      conda update perl-ensembl-funcgen

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-funcgen:<tag>

   (see `perl-ensembl-funcgen/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-funcgen| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-funcgen.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-funcgen
   :alt:   (downloads)
.. |docker_perl-ensembl-funcgen| image:: https://quay.io/repository/biocontainers/perl-ensembl-funcgen/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-funcgen
.. _`perl-ensembl-funcgen/tags`: https://quay.io/repository/biocontainers/perl-ensembl-funcgen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-funcgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-funcgen/README.html