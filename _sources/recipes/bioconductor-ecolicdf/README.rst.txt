:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecolicdf'
.. highlight: bash

bioconductor-ecolicdf
=====================

.. conda:recipe:: bioconductor-ecolicdf
   :replaces_section_title:
   :noindex:

   ecolicdf

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/ecolicdf.html
   :license: LGPL
   :recipe: /`bioconductor-ecolicdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolicdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolicdf/meta.yaml>`_

   A package containing an environment representing the Ecoli.CDF file.


.. conda:package:: bioconductor-ecolicdf

   |downloads_bioconductor-ecolicdf| |docker_bioconductor-ecolicdf|

   :versions:
      
      

      ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecolicdf

   and update with::

      conda update bioconductor-ecolicdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecolicdf:<tag>

   (see `bioconductor-ecolicdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecolicdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecolicdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecolicdf
   :alt:   (downloads)
.. |docker_bioconductor-ecolicdf| image:: https://quay.io/repository/biocontainers/bioconductor-ecolicdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecolicdf
.. _`bioconductor-ecolicdf/tags`: https://quay.io/repository/biocontainers/bioconductor-ecolicdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecolicdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecolicdf/README.html