:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velocyto.py'
.. highlight: bash

velocyto.py
===========

.. conda:recipe:: velocyto.py
   :replaces_section_title:
   :noindex:

   A library for the analysis of RNA velocity.

   :homepage: https://github.com/velocyto-team/velocyto.py
   :license: MIT
   :recipe: /`velocyto.py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velocyto.py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velocyto.py/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41586-018-0414-6`

   


.. conda:package:: velocyto.py

   |downloads_velocyto.py| |docker_velocyto.py|

   :versions:
      
      

      ``0.17.17-1``,  ``0.17.17-0``

      

   
   :depends click: 
   :depends h5py: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends loompy: 
   :depends matplotlib: 
   :depends numba: 
   :depends numpy: ``>=1.14.6,<2.0a0``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install velocyto.py

   and update with::

      conda update velocyto.py

   or use the docker container::

      docker pull quay.io/biocontainers/velocyto.py:<tag>

   (see `velocyto.py/tags`_ for valid values for ``<tag>``)


.. |downloads_velocyto.py| image:: https://img.shields.io/conda/dn/bioconda/velocyto.py.svg?style=flat
   :target: https://anaconda.org/bioconda/velocyto.py
   :alt:   (downloads)
.. |docker_velocyto.py| image:: https://quay.io/repository/biocontainers/velocyto.py/status
   :target: https://quay.io/repository/biocontainers/velocyto.py
.. _`velocyto.py/tags`: https://quay.io/repository/biocontainers/velocyto.py?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velocyto.py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velocyto.py/README.html