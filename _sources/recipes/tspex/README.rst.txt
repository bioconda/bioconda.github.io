:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tspex'
.. highlight: bash

tspex
=====

.. conda:recipe:: tspex
   :replaces_section_title:

   A Python package for calculating tissue\-specificity metrics for gene expression.

   :homepage: http://apcamargo.github.io/tspex/
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`tspex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tspex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tspex/meta.yaml>`_

   


.. conda:package:: tspex

   |downloads_tspex| |docker_tspex|

   :versions: 0.6.0-0, 0.5.1-0, 0.5.0-0, 0.4.0-0, 0.3.1-0, 0.3.0-0, 0.2.0-0, 0.1.1-0
   
   :depends matplotlib: >=2.2
   :depends numpy: 
   :depends pandas: >=0.23
   :depends python: >=3
   :depends xlrd: >=1.1.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tspex

   and update with::

      conda update tspex

   or use the docker container::

      docker pull quay.io/biocontainers/tspex:<tag>

   (see `tspex/tags`_ for valid values for ``<tag>``)


.. |downloads_tspex| image:: https://img.shields.io/conda/dn/bioconda/tspex.svg?style=flat
   :target: https://anaconda.org/bioconda/tspex
   :alt:   (downloads)
.. |docker_tspex| image:: https://quay.io/repository/biocontainers/tspex/status
   :target: https://quay.io/repository/biocontainers/tspex
.. _`tspex/tags`: https://quay.io/repository/biocontainers/tspex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tspex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tspex/README.html