:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-facopy.annot'
.. highlight: bash

bioconductor-facopy.annot
=========================

.. conda:recipe:: bioconductor-facopy.annot
   :replaces_section_title:

   Provides facopy with genome annotation on chromosome arms\, genomic features and copy number alterations.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/facopy.annot.html
   :license: GPL-3
   :recipe: /`bioconductor-facopy.annot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-facopy.annot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-facopy.annot/meta.yaml>`_

   


.. conda:package:: bioconductor-facopy.annot

   |downloads_bioconductor-facopy.annot| |docker_bioconductor-facopy.annot|

   :versions: 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-facopy.annot

   and update with::

      conda update bioconductor-facopy.annot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-facopy.annot:<tag>

   (see `bioconductor-facopy.annot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-facopy.annot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-facopy.annot.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-facopy.annot| image:: https://quay.io/repository/biocontainers/bioconductor-facopy.annot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-facopy.annot
.. _`bioconductor-facopy.annot/tags`: https://quay.io/repository/biocontainers/bioconductor-facopy.annot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-facopy.annot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-facopy.annot/README.html