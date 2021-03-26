:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snns'
.. highlight: bash

snns
====

.. conda:recipe:: snns
   :replaces_section_title:
   :noindex:

   Stuttgart Neural Network Simulator \(SNNS\)

   :homepage: http://www.ra.cs.uni-tuebingen.de/SNNS/
   :license: LGPL v2.1
   :recipe: /`snns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snns/meta.yaml>`_

   


.. conda:package:: snns

   |downloads_snns| |docker_snns|

   :versions:
      
      

      ``4.3-3``,  ``4.3-2``,  ``4.3-1``,  ``4.3-0``

      

   
   :depends bison: 
   :depends flex: 
   :depends xorg-libxaw3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snns

   and update with::

      conda update snns

   or use the docker container::

      docker pull quay.io/biocontainers/snns:<tag>

   (see `snns/tags`_ for valid values for ``<tag>``)


.. |downloads_snns| image:: https://img.shields.io/conda/dn/bioconda/snns.svg?style=flat
   :target: https://anaconda.org/bioconda/snns
   :alt:   (downloads)
.. |docker_snns| image:: https://quay.io/repository/biocontainers/snns/status
   :target: https://quay.io/repository/biocontainers/snns
.. _`snns/tags`: https://quay.io/repository/biocontainers/snns?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snns/README.html