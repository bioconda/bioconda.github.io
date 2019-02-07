.. title:: Package Recipe 'shiver'
.. highlight: bash


shiver
======

.. conda:recipe:: shiver
   :replaces_section_title:

   SHIVER \- Sequences from HIV Easily Reconstructed

   :homepage: https://github.com/ChrisHIV/shiver
   :license: GPL / GPL-3.0
   :recipe: /`shiver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiver/meta.yaml>`_

   


.. conda:package:: shiver

   |downloads_shiver| |docker_shiver|

   :versions: 1.3.5, 1.2.1, 1.1.0, 1.0.0

   :depends: :conda:package:`biopython`  :conda:package:`blast` >=2.2.28 :conda:package:`mafft`  :conda:package:`picard`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`smalt`  :conda:package:`trimmomatic`  

   :required~by: |required_by_shiver|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shiver

   and update with::

      conda update shiver

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shiver


.. |required_by_shiver| conda:required_by:: shiver
.. |downloads_shiver| image:: https://img.shields.io/conda/dn/bioconda/shiver.svg?style=flat
   :alt:   (downloads)
.. |docker_shiver| image:: https://quay.io/repository/biocontainers/shiver/status
   :target: https://quay.io/repository/biocontainers/shiver







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiver/README.html

