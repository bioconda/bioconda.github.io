:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocompore'
.. highlight: bash

nanocompore
===========

.. conda:recipe:: nanocompore
   :replaces_section_title:
   :noindex:

   Nanocompore identifies raw signal changes between two conditions dRNA\-Seq data.

   :homepage: https://github.com/tleonardi/nanocompore
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`nanocompore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocompore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocompore/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nanocompore_db`

   


.. conda:package:: nanocompore

   |downloads_nanocompore| |docker_nanocompore|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0rc3.post2-2``,  ``1.0.0rc3.post2-0``,  ``1.0.0rc3.post1-0``

      

   
   :depends bedparse: 
   :depends importlib_metadata: 
   :depends loguru: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16.0``
   :depends pandas: 
   :depends pyfaidx: 
   :depends python: ``>=3.6.1``
   :depends pyyaml: 
   :depends scikit-learn: ``0.21.*``
   :depends scipy: ``>=1.2.0``
   :depends seaborn: 
   :depends statsmodels: ``>=0.9.0``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanocompore

   and update with::

      conda update nanocompore

   or use the docker container::

      docker pull quay.io/biocontainers/nanocompore:<tag>

   (see `nanocompore/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocompore| image:: https://img.shields.io/conda/dn/bioconda/nanocompore.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocompore
   :alt:   (downloads)
.. |docker_nanocompore| image:: https://quay.io/repository/biocontainers/nanocompore/status
   :target: https://quay.io/repository/biocontainers/nanocompore
.. _`nanocompore/tags`: https://quay.io/repository/biocontainers/nanocompore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocompore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocompore/README.html