:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'entrezpy'
.. highlight: bash

entrezpy
========

.. conda:recipe:: entrezpy
   :replaces_section_title:

   Entrezpy is a dedicated Python library to interact with NCBI Entrez databases

   :homepage: https://gitlab.com/ncbipy/entrezpy
   :documentation: https://entrezpy.readthedocs.io/en/master/
   
   :license: LGPL / LGPLv3
   :recipe: /`entrezpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrezpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrezpy/meta.yaml>`_

   


.. conda:package:: entrezpy

   |downloads_entrezpy| |docker_entrezpy|

   :versions: 2.0.4-0, 2.0.3-0, 2.0.2-0, 2.0.1-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install entrezpy

   and update with::

      conda update entrezpy

   or use the docker container::

      docker pull quay.io/biocontainers/entrezpy:<tag>

   (see `entrezpy/tags`_ for valid values for ``<tag>``)


.. |downloads_entrezpy| image:: https://img.shields.io/conda/dn/bioconda/entrezpy.svg?style=flat
   :target: https://anaconda.org/bioconda/entrezpy
   :alt:   (downloads)
.. |docker_entrezpy| image:: https://quay.io/repository/biocontainers/entrezpy/status
   :target: https://quay.io/repository/biocontainers/entrezpy
.. _`entrezpy/tags`: https://quay.io/repository/biocontainers/entrezpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/entrezpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/entrezpy/README.html