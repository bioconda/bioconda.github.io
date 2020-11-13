:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakmeopen'
.. highlight: bash

krakmeopen
==========

.. conda:recipe:: krakmeopen
   :replaces_section_title:
   :noindex:

   A Kraken 2 downstream analysis toolkit. Calculate quality metrics for Kraken 2 classifications.

   :homepage: https://github.com/danisven/KrakMeOpen
   :license: MIT / MIT
   :recipe: /`krakmeopen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakmeopen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakmeopen/meta.yaml>`_

   


.. conda:package:: krakmeopen

   |downloads_krakmeopen| |docker_krakmeopen|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
   :depends stringmeup: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krakmeopen

   and update with::

      conda update krakmeopen

   or use the docker container::

      docker pull quay.io/biocontainers/krakmeopen:<tag>

   (see `krakmeopen/tags`_ for valid values for ``<tag>``)


.. |downloads_krakmeopen| image:: https://img.shields.io/conda/dn/bioconda/krakmeopen.svg?style=flat
   :target: https://anaconda.org/bioconda/krakmeopen
   :alt:   (downloads)
.. |docker_krakmeopen| image:: https://quay.io/repository/biocontainers/krakmeopen/status
   :target: https://quay.io/repository/biocontainers/krakmeopen
.. _`krakmeopen/tags`: https://quay.io/repository/biocontainers/krakmeopen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakmeopen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakmeopen/README.html