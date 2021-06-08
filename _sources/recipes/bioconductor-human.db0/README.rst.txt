:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-human.db0'
.. highlight: bash

bioconductor-human.db0
======================

.. conda:recipe:: bioconductor-human.db0
   :replaces_section_title:
   :noindex:

   Base Level Annotation databases for human

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/human.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-human.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human.db0/meta.yaml>`_

   Base annotation databases for human\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.


.. conda:package:: bioconductor-human.db0

   |downloads_bioconductor-human.db0| |docker_bioconductor-human.db0|

   :versions:
      
      

      ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.2-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-human.db0

   and update with::

      conda update bioconductor-human.db0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-human.db0:<tag>

   (see `bioconductor-human.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-human.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-human.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-human.db0
   :alt:   (downloads)
.. |docker_bioconductor-human.db0| image:: https://quay.io/repository/biocontainers/bioconductor-human.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-human.db0
.. _`bioconductor-human.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-human.db0?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-human.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-human.db0/README.html