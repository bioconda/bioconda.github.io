:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousechrloc'
.. highlight: bash

bioconductor-mousechrloc
========================

.. conda:recipe:: bioconductor-mousechrloc
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for mouseCHRLOC

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/mouseCHRLOC.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-mousechrloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousechrloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousechrloc/meta.yaml>`_

   Annotation data file for mouseCHRLOC assembled using data from public data repositories


.. conda:package:: bioconductor-mousechrloc

   |downloads_bioconductor-mousechrloc| |docker_bioconductor-mousechrloc|

   :versions:
      
      

      ``2.1.6-7``,  ``2.1.6-6``,  ``2.1.6-5``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mousechrloc

   and update with::

      conda update bioconductor-mousechrloc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mousechrloc:<tag>

   (see `bioconductor-mousechrloc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mousechrloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousechrloc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousechrloc
   :alt:   (downloads)
.. |docker_bioconductor-mousechrloc| image:: https://quay.io/repository/biocontainers/bioconductor-mousechrloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousechrloc
.. _`bioconductor-mousechrloc/tags`: https://quay.io/repository/biocontainers/bioconductor-mousechrloc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousechrloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousechrloc/README.html