:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cptac'
.. highlight: bash

cptac
=====

.. conda:recipe:: cptac
   :replaces_section_title:
   :noindex:

   Python packaging for CPTAC data

   :homepage: http://github.com/PayneLab/cptac
   :license: Apache-2.0
   :recipe: /`cptac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cptac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cptac/meta.yaml>`_

   


.. conda:package:: cptac

   |downloads_cptac| |docker_cptac|

   :versions:
      
      

      ``0.9.6-0``

      

   
   :depends beautifulsoup4: ``>=4.7.1``
   :depends flask: ``>=1.1.0``
   :depends gtfparse: ``>=1.2.1``
   :depends mygene: ``>=3.2.2``
   :depends numpy: ``>=1.16.3``
   :depends openpyxl: ``>=2.6.0``
   :depends packaging: ``>=19.2``
   :depends pandas: ``>=0.25.1``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.21.0``
   :depends scipy: ``>=1.2.1``
   :depends statsmodels: ``>=0.10.0``
   :depends urllib3: ``>=1.24.2``
   :depends xlrd: ``1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cptac

   and update with::

      conda update cptac

   or use the docker container::

      docker pull quay.io/biocontainers/cptac:<tag>

   (see `cptac/tags`_ for valid values for ``<tag>``)


.. |downloads_cptac| image:: https://img.shields.io/conda/dn/bioconda/cptac.svg?style=flat
   :target: https://anaconda.org/bioconda/cptac
   :alt:   (downloads)
.. |docker_cptac| image:: https://quay.io/repository/biocontainers/cptac/status
   :target: https://quay.io/repository/biocontainers/cptac
.. _`cptac/tags`: https://quay.io/repository/biocontainers/cptac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cptac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cptac/README.html