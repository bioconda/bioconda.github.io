:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kodoja'
.. highlight: bash

kodoja
======

.. conda:recipe:: kodoja
   :replaces_section_title:

   Kodoja\: identifying viruses from plant RNA sequencing data

   :homepage: https://github.com/abaizan/kodoja/
   :license: MIT
   :recipe: /`kodoja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kodoja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kodoja/meta.yaml>`_

   


.. conda:package:: kodoja

   |downloads_kodoja| |docker_kodoja|

   :versions: 0.0.9-0, 0.0.8-0, 0.0.7-0, 0.0.6-0, 0.0.5-0, 0.0.4-0, 0.0.3-1, 0.0.3-0, 0.0.2-0
   
   :depends biopython: 
   :depends fastqc: 
   :depends kaiju: 
   :depends kraken: 
   :depends ncbi-genome-download: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kodoja

   and update with::

      conda update kodoja

   or use the docker container::

      docker pull quay.io/biocontainers/kodoja:<tag>

   (see `kodoja/tags`_ for valid values for ``<tag>``)


.. |downloads_kodoja| image:: https://img.shields.io/conda/dn/bioconda/kodoja.svg?style=flat
   :target: https://anaconda.org/bioconda/kodoja
   :alt:   (downloads)
.. |docker_kodoja| image:: https://quay.io/repository/biocontainers/kodoja/status
   :target: https://quay.io/repository/biocontainers/kodoja
.. _`kodoja/tags`: https://quay.io/repository/biocontainers/kodoja?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kodoja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kodoja/README.html