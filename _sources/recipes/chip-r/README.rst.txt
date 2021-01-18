:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chip-r'
.. highlight: bash

chip-r
======

.. conda:recipe:: chip-r
   :replaces_section_title:
   :noindex:

   ChIP\-R is a method for assessing the reproducibility of replicated ChIP\-seq or ATAC\-seq experiments.

   :homepage: https://github.com/rhysnewell/ChIP-R
   :license: GPL3
   :recipe: /`chip-r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chip-r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chip-r/meta.yaml>`_

   


.. conda:package:: chip-r

   |downloads_chip-r| |docker_chip-r|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends numpy: 
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chip-r

   and update with::

      conda update chip-r

   or use the docker container::

      docker pull quay.io/biocontainers/chip-r:<tag>

   (see `chip-r/tags`_ for valid values for ``<tag>``)


.. |downloads_chip-r| image:: https://img.shields.io/conda/dn/bioconda/chip-r.svg?style=flat
   :target: https://anaconda.org/bioconda/chip-r
   :alt:   (downloads)
.. |docker_chip-r| image:: https://quay.io/repository/biocontainers/chip-r/status
   :target: https://quay.io/repository/biocontainers/chip-r
.. _`chip-r/tags`: https://quay.io/repository/biocontainers/chip-r?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chip-r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chip-r/README.html