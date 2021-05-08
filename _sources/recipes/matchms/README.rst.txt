:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matchms'
.. highlight: bash

matchms
=======

.. conda:recipe:: matchms
   :replaces_section_title:
   :noindex:

   Python library for fuzzy comparison of mass spectrum data and other Python objects

   :homepage: https://github.com/matchms/matchms
   :documentation: https://matchms.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software
   :recipe: /`matchms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchms/meta.yaml>`_

   


.. conda:package:: matchms

   |downloads_matchms| |docker_matchms|

   :versions:
      
      

      ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends deprecated: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends numba: ``>=0.47``
   :depends numpy: 
   :depends pyteomics: ``>=4.2``
   :depends python: 
   :depends rdkit: ``>=2020.03.1``
   :depends requests: 
   :depends scipy: ``>=1.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install matchms

   and update with::

      conda update matchms

   or use the docker container::

      docker pull quay.io/biocontainers/matchms:<tag>

   (see `matchms/tags`_ for valid values for ``<tag>``)


.. |downloads_matchms| image:: https://img.shields.io/conda/dn/bioconda/matchms.svg?style=flat
   :target: https://anaconda.org/bioconda/matchms
   :alt:   (downloads)
.. |docker_matchms| image:: https://quay.io/repository/biocontainers/matchms/status
   :target: https://quay.io/repository/biocontainers/matchms
.. _`matchms/tags`: https://quay.io/repository/biocontainers/matchms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matchms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matchms/README.html