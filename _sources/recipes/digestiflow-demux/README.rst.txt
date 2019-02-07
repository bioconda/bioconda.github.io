.. title:: Package Recipe 'digestiflow-demux'
.. highlight: bash


digestiflow-demux
=================

.. conda:recipe:: digestiflow-demux
   :replaces_section_title:

   A command line client tool to perform semiautomatic demultiplexing of Illumina flowcells using data from Digestiflow Web.

   :homepage: https://github.com/bihealth/digestiflow-demux
   :license: MIT
   :recipe: /`digestiflow-demux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux/meta.yaml>`_

   


.. conda:package:: digestiflow-demux

   |downloads_digestiflow-demux| |docker_digestiflow-demux|

   :versions: 0.2.0, 0.1.0

   :depends: :conda:package:`attrs` >=18.2.0 :conda:package:`coloredlogs` >=10.0 :conda:package:`git`  :conda:package:`python` >=3.5 :conda:package:`requests`  :conda:package:`snakemake` >=5.4.0 :conda:package:`toml` >=0.10.0 

   :required~by: |required_by_digestiflow-demux|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install digestiflow-demux

   and update with::

      conda update digestiflow-demux

   or use the docker container::

      docker pull quay.io/repository/biocontainers/digestiflow-demux


.. |required_by_digestiflow-demux| conda:required_by:: digestiflow-demux
.. |downloads_digestiflow-demux| image:: https://img.shields.io/conda/dn/bioconda/digestiflow-demux.svg?style=flat
   :alt:   (downloads)
.. |docker_digestiflow-demux| image:: https://quay.io/repository/biocontainers/digestiflow-demux/status
   :target: https://quay.io/repository/biocontainers/digestiflow-demux







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digestiflow-demux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digestiflow-demux/README.html

