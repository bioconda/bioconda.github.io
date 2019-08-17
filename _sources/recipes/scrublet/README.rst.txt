:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrublet'
.. highlight: bash

scrublet
========

.. conda:recipe:: scrublet
   :replaces_section_title:

   Doublet prediction in single\-cell RNA\-sequencing data

   :homepage: https://github.com/allonkleinlab/scrublet
   :license: MIT / MIT License
   :recipe: /`scrublet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrublet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrublet/meta.yaml>`_

   


.. conda:package:: scrublet

   |downloads_scrublet| |docker_scrublet|

   :versions: 0.2.1-0
   
   :depends matplotlib: 
   :depends numba: 
   :depends numpy: >=1.13
   :depends pandas: 
   :depends python: 
   :depends python-annoy: 
   :depends scikit-image: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scrublet

   and update with::

      conda update scrublet

   or use the docker container::

      docker pull quay.io/biocontainers/scrublet:<tag>

   (see `scrublet/tags`_ for valid values for ``<tag>``)


.. |downloads_scrublet| image:: https://img.shields.io/conda/dn/bioconda/scrublet.svg?style=flat
   :target: https://anaconda.org/bioconda/scrublet
   :alt:   (downloads)
.. |docker_scrublet| image:: https://quay.io/repository/biocontainers/scrublet/status
   :target: https://quay.io/repository/biocontainers/scrublet
.. _`scrublet/tags`: https://quay.io/repository/biocontainers/scrublet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrublet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrublet/README.html