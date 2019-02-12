:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msaboot'
.. highlight: bash

msaboot
=======

.. conda:recipe:: msaboot
   :replaces_section_title:

   Generate bootstrapping replicates for multiple sequence alignment data.

   :homepage: https://github.com/phac-nml/msaboot
   :license: Apache 2.0
   :recipe: /`msaboot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaboot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaboot/meta.yaml>`_

   


.. conda:package:: msaboot

   |downloads_msaboot| |docker_msaboot|

   :versions: 0.1.2-1, 0.1.2-0, 0.1.1-1, 0.1.0-0
   
   :depends biopython: 
   
   :depends numpy: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msaboot

   and update with::

      conda update msaboot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/msaboot:<tag>

   (see `msaboot/tags`_ for valid values for ``<tag>``)


.. |downloads_msaboot| image:: https://img.shields.io/conda/dn/bioconda/msaboot.svg?style=flat
   :alt:   (downloads)
.. |docker_msaboot| image:: https://quay.io/repository/biocontainers/msaboot/status
   :target: https://quay.io/repository/biocontainers/msaboot
.. _`msaboot/tags`: https://quay.io/repository/biocontainers/msaboot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msaboot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msaboot/README.html