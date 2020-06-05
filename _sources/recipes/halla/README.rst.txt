:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'halla'
.. highlight: bash

halla
=====

.. conda:recipe:: halla
   :replaces_section_title:
   :noindex:

   HAllA\: Hierarchically All\-against\-All Association Testing.

   :homepage: http://huttenhower.sph.harvard.edu/halla
   :license: MIT / MIT
   :recipe: /`halla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halla/meta.yaml>`_

   


.. conda:package:: halla

   |downloads_halla| |docker_halla|

   :versions:
      
      

      ``0.8.17-0``

      

   
   :depends jenkspy: ``>=0.1.4``
   :depends matplotlib: ``>=1.5.1``
   :depends minepy: ``>=1.0.0``
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.18.1``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends scikit-learn: ``>=0.14.1``
   :depends scipy: ``>=0.17.0``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install halla

   and update with::

      conda update halla

   or use the docker container::

      docker pull quay.io/biocontainers/halla:<tag>

   (see `halla/tags`_ for valid values for ``<tag>``)


.. |downloads_halla| image:: https://img.shields.io/conda/dn/bioconda/halla.svg?style=flat
   :target: https://anaconda.org/bioconda/halla
   :alt:   (downloads)
.. |docker_halla| image:: https://quay.io/repository/biocontainers/halla/status
   :target: https://quay.io/repository/biocontainers/halla
.. _`halla/tags`: https://quay.io/repository/biocontainers/halla?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/halla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/halla/README.html