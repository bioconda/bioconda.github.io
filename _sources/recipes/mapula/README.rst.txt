:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapula'
.. highlight: bash

mapula
======

.. conda:recipe:: mapula
   :replaces_section_title:
   :noindex:

   Calculation of alignment statistics

   :homepage: https://github.com/epi2me-labs/mapula
   :license: Mozilla Public License Version 2.0
   :recipe: /`mapula <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapula>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapula/meta.yaml>`_

   


.. conda:package:: mapula

   |downloads_mapula| |docker_mapula|

   :versions:
      
      

      ``2.1.0-0``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends aplanat: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapula

   and update with::

      conda update mapula

   or use the docker container::

      docker pull quay.io/biocontainers/mapula:<tag>

   (see `mapula/tags`_ for valid values for ``<tag>``)


.. |downloads_mapula| image:: https://img.shields.io/conda/dn/bioconda/mapula.svg?style=flat
   :target: https://anaconda.org/bioconda/mapula
   :alt:   (downloads)
.. |docker_mapula| image:: https://quay.io/repository/biocontainers/mapula/status
   :target: https://quay.io/repository/biocontainers/mapula
.. _`mapula/tags`: https://quay.io/repository/biocontainers/mapula?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapula/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapula/README.html