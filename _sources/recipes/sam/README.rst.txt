:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam'
.. highlight: bash

sam
===

.. conda:recipe:: sam
   :replaces_section_title:

   SAM \- Sequence Alignment and Modeling System

   :homepage: https://compbio.soe.ucsc.edu/sam2src/
   :license: academic
   :recipe: /`sam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam/meta.yaml>`_

   


.. conda:package:: sam

   |downloads_sam| |docker_sam|

   :versions: 3.5-1, 3.5-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sam

   and update with::

      conda update sam

   or use the docker container::

      docker pull quay.io/biocontainers/sam:<tag>

   (see `sam/tags`_ for valid values for ``<tag>``)


.. |downloads_sam| image:: https://img.shields.io/conda/dn/bioconda/sam.svg?style=flat
   :target: https://anaconda.org/bioconda/sam
   :alt:   (downloads)
.. |docker_sam| image:: https://quay.io/repository/biocontainers/sam/status
   :target: https://quay.io/repository/biocontainers/sam
.. _`sam/tags`: https://quay.io/repository/biocontainers/sam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam/README.html