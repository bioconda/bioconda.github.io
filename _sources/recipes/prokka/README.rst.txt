.. title:: Package Recipe 'prokka'
.. highlight: bash


prokka
======

.. conda:recipe:: prokka
   :replaces_section_title:

   A tool for the rapid annotation of prokaryotic genomes

   :homepage: http://www.vicbioinformatics.com/software.prokka.shtml
   :developer docs: https://github.com/tseemann/prokka
   :license: GPL / GPLv2
   :recipe: /`prokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokka/meta.yaml>`_
   :links: biotools: :biotools:`prokka`

   


.. conda:package:: prokka

   |downloads_prokka| |docker_prokka|

   :versions: 1.13.4, 1.13.3, 1.13, 1.12, 1.11

   :depends: :conda:package:`aragorn` >=1.2 :conda:package:`barrnap` >=0.7 :conda:package:`blast` >=2.7.1 :conda:package:`hmmer` >=3.1b2 :conda:package:`infernal` >=1.1.2 :conda:package:`minced` >=0.3 :conda:package:`parallel` >=20180522 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-xml-simple`  :conda:package:`prodigal` >=2.6 :conda:package:`tbl2asn` >=25.6 

   :required~by: |required_by_prokka|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prokka

   and update with::

      conda update prokka

   or use the docker container::

      docker pull quay.io/repository/biocontainers/prokka


.. |required_by_prokka| conda:required_by:: prokka
.. |downloads_prokka| image:: https://img.shields.io/conda/dn/bioconda/prokka.svg?style=flat
   :alt:   (downloads)
.. |docker_prokka| image:: https://quay.io/repository/biocontainers/prokka/status
   :target: https://quay.io/repository/biocontainers/prokka







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokka/README.html

