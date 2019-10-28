:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokka'
.. highlight: bash

prokka
======

.. conda:recipe:: prokka
   :replaces_section_title:

   Rapid annotation of prokaryotic genomes

   :homepage: https://github.com/tseemann/prokka
   :license: GPL / GPLv2
   :recipe: /`prokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka/meta.yaml>`_
   :links: biotools: :biotools:`prokka`, doi: :doi:`10.1093/bioinformatics/btu153`

   


.. conda:package:: prokka

   |downloads_prokka| |docker_prokka|

   :versions: 1.14.0-1, 1.14.0-0, 1.13.7-0, 1.13.4-0, 1.13.3-0, 1.13-4, 1.13-3, 1.13-2, 1.13-1, 1.13-0, 1.12-4, 1.12-3, 1.12-2, 1.12-1, 1.12-0, 1.11-0
   
   :depends aragorn: >=1.2
   :depends barrnap: >=0.7
   :depends blast: >=2.7.1
   :depends hmmer: >=3.1b2
   :depends infernal: >=1.1.2
   :depends minced: >=0.3
   :depends parallel: >=20180522
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: >=1.7.2
   :depends perl-xml-simple: 
   :depends prodigal: >=2.6
   :depends tbl2asn: >=25.7
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prokka

   and update with::

      conda update prokka

   or use the docker container::

      docker pull quay.io/biocontainers/prokka:<tag>

   (see `prokka/tags`_ for valid values for ``<tag>``)


.. |downloads_prokka| image:: https://img.shields.io/conda/dn/bioconda/prokka.svg?style=flat
   :target: https://anaconda.org/bioconda/prokka
   :alt:   (downloads)
.. |docker_prokka| image:: https://quay.io/repository/biocontainers/prokka/status
   :target: https://quay.io/repository/biocontainers/prokka
.. _`prokka/tags`: https://quay.io/repository/biocontainers/prokka?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokka/README.html