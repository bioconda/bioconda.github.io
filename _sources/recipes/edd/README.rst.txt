:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edd'
.. highlight: bash

edd
===

.. conda:recipe:: edd
   :replaces_section_title:
   :noindex:

   Enriched domain detector for ChIP\-seq data

   :homepage: http://github.com/CollasLab/edd
   :license: MIT / MIT
   :recipe: /`edd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edd/meta.yaml>`_

   


.. conda:package:: edd

   |downloads_edd| |docker_edd|

   :versions:
      
      

      ``1.1.19-3``,  ``1.1.19-2``,  ``1.1.19-1``,  ``1.1.19-0``,  ``1.1.18-1``,  ``1.1.18-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends logbook: 
   :depends numpy: 
   :depends pandas: 
   :depends patsy: 
   :depends pybedtools: 
   :depends pysam: ``0.10.0.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-dateutil: 
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: 
   :depends setuptools: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install edd

   and update with::

      conda update edd

   or use the docker container::

      docker pull quay.io/biocontainers/edd:<tag>

   (see `edd/tags`_ for valid values for ``<tag>``)


.. |downloads_edd| image:: https://img.shields.io/conda/dn/bioconda/edd.svg?style=flat
   :target: https://anaconda.org/bioconda/edd
   :alt:   (downloads)
.. |docker_edd| image:: https://quay.io/repository/biocontainers/edd/status
   :target: https://quay.io/repository/biocontainers/edd
.. _`edd/tags`: https://quay.io/repository/biocontainers/edd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edd/README.html