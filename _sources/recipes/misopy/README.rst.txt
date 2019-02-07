.. title:: Package Recipe 'misopy'
.. highlight: bash


misopy
======

.. conda:recipe:: misopy
   :replaces_section_title:

   Mixture of Isoforms model \(MISO\) for isoform quantitation using RNA\-Seq

   :homepage: http://genes.mit.edu/burgelab/miso/
   :license: GPL2 / GPL2
   :recipe: /`misopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/misopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/misopy/meta.yaml>`_

   


.. conda:package:: misopy

   |downloads_misopy| |docker_misopy|

   :versions: 0.5.4

   :depends: :conda:package:`bedtools`  :conda:package:`matplotlib`  :conda:package:`numpy` >=1.5.0 :conda:package:`pysam` >=0.6.0 :conda:package:`python` 2.7* :conda:package:`samtools` <=1.2 :conda:package:`scipy` >=0.9.0 

   :required~by: |required_by_misopy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install misopy

   and update with::

      conda update misopy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/misopy


.. |required_by_misopy| conda:required_by:: misopy
.. |downloads_misopy| image:: https://img.shields.io/conda/dn/bioconda/misopy.svg?style=flat
   :alt:   (downloads)
.. |docker_misopy| image:: https://quay.io/repository/biocontainers/misopy/status
   :target: https://quay.io/repository/biocontainers/misopy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/misopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/misopy/README.html

