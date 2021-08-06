:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgdi'
.. highlight: bash

wgdi
====

.. conda:recipe:: wgdi
   :replaces_section_title:
   :noindex:

   Whole Genome Duplication Identification

   :homepage: https://github.com/SunPengChuan/wgdi
   :license: BSD / BSD
   :recipe: /`wgdi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgdi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgdi/meta.yaml>`_

   Python utility libraries on comparative genomics


.. conda:package:: wgdi

   |downloads_wgdi| |docker_wgdi|

   :versions:
      
      

      ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.1-0``

      

   
   :depends biopython: 
   :depends iqtree: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends muscle: 
   :depends numpy: 
   :depends pal2nal: 
   :depends paml: 
   :depends pandas: ``>=1.1.0``
   :depends python: ``>=3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgdi

   and update with::

      conda update wgdi

   or use the docker container::

      docker pull quay.io/biocontainers/wgdi:<tag>

   (see `wgdi/tags`_ for valid values for ``<tag>``)


.. |downloads_wgdi| image:: https://img.shields.io/conda/dn/bioconda/wgdi.svg?style=flat
   :target: https://anaconda.org/bioconda/wgdi
   :alt:   (downloads)
.. |docker_wgdi| image:: https://quay.io/repository/biocontainers/wgdi/status
   :target: https://quay.io/repository/biocontainers/wgdi
.. _`wgdi/tags`: https://quay.io/repository/biocontainers/wgdi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgdi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgdi/README.html