.. title:: Package Recipe 'segway'
.. highlight: bash


segway
======

.. conda:recipe:: segway
   :replaces_section_title:

   a tool for easy pattern discovery and identification in functional genomics data.

   :homepage: http://segway.hoffmanlab.org/
   :license: GPL2
   :recipe: /`segway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segway/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx603`, biotools: :biotools:`segway`

   


.. conda:package:: segway

   |downloads_segway| |docker_segway|

   :versions: 2.0.2, 2.0.1, 2.0, 1.4.4, 1.4

   :depends: :conda:package:`colorbrewer`  :conda:package:`drmaa` >=0.4a3 :conda:package:`forked-path`  :conda:package:`genomedata`  :conda:package:`gmtk`  :conda:package:`hdf5` 1.8.17* :conda:package:`numpy`  :conda:package:`optbuild`  :conda:package:`optplus`  :conda:package:`pytables` >=3.0 :conda:package:`python` 2.7* :conda:package:`textinput`  :conda:package:`ucsc-bedtobigbed`  

   :required~by: |required_by_segway|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segway

   and update with::

      conda update segway

   or use the docker container::

      docker pull quay.io/repository/biocontainers/segway


.. |required_by_segway| conda:required_by:: segway
.. |downloads_segway| image:: https://img.shields.io/conda/dn/bioconda/segway.svg?style=flat
   :alt:   (downloads)
.. |docker_segway| image:: https://quay.io/repository/biocontainers/segway/status
   :target: https://quay.io/repository/biocontainers/segway







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segway/README.html

