:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicmatrix'
.. highlight: bash

hicmatrix
=========

.. conda:recipe:: hicmatrix
   :replaces_section_title:

   Library to manage Hi\-C matrices for HiCExplorer and pyGenomeTracks

   :homepage: https://github.com/deeptools/HiCMatrix
   :license: GPL3
   :recipe: /`hicmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix/meta.yaml>`_

   


.. conda:package:: hicmatrix

   |downloads_hicmatrix| |docker_hicmatrix|

   :versions: 12-0, 11-0, 10-1, 10-0, 9-0, 8-0, 7-0, 6-1, 6-0, 5-0, 4-0, 3-0, 2.2-1, 2.2-0
   
   :depends cooler: 0.8.5.*
   :depends intervaltree: 
   :depends numpy: >=1.16
   :depends pandas: 
   :depends pytables: 
   :depends python: >=3
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicmatrix

   and update with::

      conda update hicmatrix

   or use the docker container::

      docker pull quay.io/biocontainers/hicmatrix:<tag>

   (see `hicmatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_hicmatrix| image:: https://img.shields.io/conda/dn/bioconda/hicmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/hicmatrix
   :alt:   (downloads)
.. |docker_hicmatrix| image:: https://quay.io/repository/biocontainers/hicmatrix/status
   :target: https://quay.io/repository/biocontainers/hicmatrix
.. _`hicmatrix/tags`: https://quay.io/repository/biocontainers/hicmatrix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicmatrix/README.html