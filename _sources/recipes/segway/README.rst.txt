:orphan:  .. only available via index, not via toctree

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

   :versions: 2.0.2-3, 2.0.2-2, 2.0.2-1, 2.0.2-0, 2.0.1-0, 2.0-0, 1.4.4-0, 1.4-0
   
   :depends autolog: <0.2
   
   :depends colorbrewer: <=0.1.1
   
   :depends drmaa: >=0.4a3
   
   :depends forked-path: 
   
   :depends genomedata: <=1.4.1
   
   :depends gmtk: 
   
   :depends optbuild: <=0.1.11
   
   :depends optplus: <=0.1.1
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends textinput: <=0.1.1
   
   :depends ucsc-bedtobigbed: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segway

   and update with::

      conda update segway

   or use the docker container::

      docker pull quay.io/biocontainers/segway:<tag>

   (see `segway/tags`_ for valid values for ``<tag>``)


.. |downloads_segway| image:: https://img.shields.io/conda/dn/bioconda/segway.svg?style=flat
   :alt:   (downloads)
.. |docker_segway| image:: https://quay.io/repository/biocontainers/segway/status
   :target: https://quay.io/repository/biocontainers/segway
.. _`segway/tags`: https://quay.io/repository/biocontainers/segway?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segway/README.html