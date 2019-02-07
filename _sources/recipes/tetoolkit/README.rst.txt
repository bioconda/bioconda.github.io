.. title:: Package Recipe 'tetoolkit'
.. highlight: bash


tetoolkit
=========

.. conda:recipe:: tetoolkit
   :replaces_section_title:

   Tools for estimating differential enrichment of Transposable Elements and other highly repetitive regions

   :homepage: http://hammelllab.labsites.cshl.edu/software#TEToolkit
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`tetoolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetoolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetoolkit/meta.yaml>`_

   


.. conda:package:: tetoolkit

   |downloads_tetoolkit| |docker_tetoolkit|

   :versions: 2.0.3, 1.5.1

   :depends: :conda:package:`argparse`  :conda:package:`bioconductor-deseq` >=1.10 :conda:package:`pysam` >=0.9 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_tetoolkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tetoolkit

   and update with::

      conda update tetoolkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tetoolkit


.. |required_by_tetoolkit| conda:required_by:: tetoolkit
.. |downloads_tetoolkit| image:: https://img.shields.io/conda/dn/bioconda/tetoolkit.svg?style=flat
   :alt:   (downloads)
.. |docker_tetoolkit| image:: https://quay.io/repository/biocontainers/tetoolkit/status
   :target: https://quay.io/repository/biocontainers/tetoolkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tetoolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tetoolkit/README.html

