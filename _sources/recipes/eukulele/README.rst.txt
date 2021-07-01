:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukulele'
.. highlight: bash

eukulele
========

.. conda:recipe:: eukulele
   :replaces_section_title:
   :noindex:

   Easy taxonomic annotation for eukaryotic microbes

   :homepage: https://github.com/AlexanderLabWHOI/EUKulele
   :license: MIT
   :recipe: /`eukulele <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukulele>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukulele/meta.yaml>`_

   


.. conda:package:: eukulele

   |downloads_eukulele| |docker_eukulele|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends biopython: ``1.78``
   :depends blast: ``2.2.31``
   :depends boost-cpp: 
   :depends busco: ``4.0.6``
   :depends chardet: 
   :depends diamond: ``0.9.24``
   :depends joblib: 
   :depends matplotlib-base: ``3.3.3``
   :depends numpy: ``1.19.5``
   :depends pandas: ``1.2.0``
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends r-base: 
   :depends seaborn-base: 
   :depends ujson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eukulele

   and update with::

      conda update eukulele

   or use the docker container::

      docker pull quay.io/biocontainers/eukulele:<tag>

   (see `eukulele/tags`_ for valid values for ``<tag>``)


.. |downloads_eukulele| image:: https://img.shields.io/conda/dn/bioconda/eukulele.svg?style=flat
   :target: https://anaconda.org/bioconda/eukulele
   :alt:   (downloads)
.. |docker_eukulele| image:: https://quay.io/repository/biocontainers/eukulele/status
   :target: https://quay.io/repository/biocontainers/eukulele
.. _`eukulele/tags`: https://quay.io/repository/biocontainers/eukulele?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukulele/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukulele/README.html