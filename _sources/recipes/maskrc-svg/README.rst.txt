:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maskrc-svg'
.. highlight: bash

maskrc-svg
==========

.. conda:recipe:: maskrc-svg
   :replaces_section_title:

   Masks recombinant regions in an alignment based on ClonalFrameML or Gubbins output Option to draw SVG of recombinant regions.

   :homepage: https://github.com/kwongj/maskrc-svg
   :license: GPL-3.0
   :recipe: /`maskrc-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maskrc-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maskrc-svg/meta.yaml>`_

   


.. conda:package:: maskrc-svg

   |downloads_maskrc-svg| |docker_maskrc-svg|

   :versions: 0.5-0
   
   :depends bcbio-gff: 
   
   :depends biopython: 
   
   :depends ete3: 
   
   :depends python: 
   
   :depends svgwrite: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maskrc-svg

   and update with::

      conda update maskrc-svg

   or use the docker container::

      docker pull quay.io/biocontainers/maskrc-svg:<tag>

   (see `maskrc-svg/tags`_ for valid values for ``<tag>``)


.. |downloads_maskrc-svg| image:: https://img.shields.io/conda/dn/bioconda/maskrc-svg.svg?style=flat
   :alt:   (downloads)
.. |docker_maskrc-svg| image:: https://quay.io/repository/biocontainers/maskrc-svg/status
   :target: https://quay.io/repository/biocontainers/maskrc-svg
.. _`maskrc-svg/tags`: https://quay.io/repository/biocontainers/maskrc-svg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maskrc-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maskrc-svg/README.html