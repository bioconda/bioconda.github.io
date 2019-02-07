.. title:: Package Recipe 'chado-tools'
.. highlight: bash


chado-tools
===========

.. conda:recipe:: chado-tools
   :replaces_section_title:

   Tools to access CHADO databases

   :homepage: https://github.com/sanger-pathogens/chado-tools
   :license: GPL / GPL-3.0
   :recipe: /`chado-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chado-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chado-tools/meta.yaml>`_

   


.. conda:package:: chado-tools

   |downloads_chado-tools| |docker_chado-tools|

   :versions: 0.2.5, 0.0.5, 0.0.4, 0.0.3

   :depends: :conda:package:`biopython`  :conda:package:`gffutils`  :conda:package:`pronto` >=0.11.0 :conda:package:`psycopg2`  :conda:package:`python` >=3.6 :conda:package:`pyyaml`  :conda:package:`sqlalchemy`  :conda:package:`sqlalchemy-utils`  

   :required~by: |required_by_chado-tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chado-tools

   and update with::

      conda update chado-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/chado-tools


.. |required_by_chado-tools| conda:required_by:: chado-tools
.. |downloads_chado-tools| image:: https://img.shields.io/conda/dn/bioconda/chado-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_chado-tools| image:: https://quay.io/repository/biocontainers/chado-tools/status
   :target: https://quay.io/repository/biocontainers/chado-tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chado-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chado-tools/README.html

