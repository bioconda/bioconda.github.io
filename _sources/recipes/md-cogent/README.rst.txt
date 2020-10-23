:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'md-cogent'
.. highlight: bash

md-cogent
=========

.. conda:recipe:: md-cogent
   :replaces_section_title:
   :noindex:

   COding GENome reconstruction Tool using transcript sequences

   :homepage: https://github.com/Magdoll/Cogent
   :license: BSD-3-Clause-Clear
   :recipe: /`md-cogent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/md-cogent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/md-cogent/meta.yaml>`_

   


.. conda:package:: md-cogent

   |downloads_md-cogent| |docker_md-cogent|

   :versions:
      
      

      ``8.0.0-0``,  ``7.0.0-0``

      

   
   :depends biopython: 
   :depends bx-python: 
   :depends matplotlib-base: 
   :depends networkx: ``2.5.*``
   :depends numpy: 
   :depends pulp: 
   :depends python: 
   :depends scikit-image: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install md-cogent

   and update with::

      conda update md-cogent

   or use the docker container::

      docker pull quay.io/biocontainers/md-cogent:<tag>

   (see `md-cogent/tags`_ for valid values for ``<tag>``)


.. |downloads_md-cogent| image:: https://img.shields.io/conda/dn/bioconda/md-cogent.svg?style=flat
   :target: https://anaconda.org/bioconda/md-cogent
   :alt:   (downloads)
.. |docker_md-cogent| image:: https://quay.io/repository/biocontainers/md-cogent/status
   :target: https://quay.io/repository/biocontainers/md-cogent
.. _`md-cogent/tags`: https://quay.io/repository/biocontainers/md-cogent?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/md-cogent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/md-cogent/README.html