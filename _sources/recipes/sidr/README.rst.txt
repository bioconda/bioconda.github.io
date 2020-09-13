:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sidr'
.. highlight: bash

sidr
====

.. conda:recipe:: sidr
   :replaces_section_title:
   :noindex:

   Sequence Idenification using Decision tRees\; a tool to classify DNA reads using machine learning models.

   :homepage: https://github.com/damurdock/SIDR
   :license: MIT / MIT
   :recipe: /`sidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sidr/meta.yaml>`_

   


.. conda:package:: sidr

   |downloads_sidr| |docker_sidr|

   :versions:
      
      

      ``0.0.2a2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.8.1``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sidr

   and update with::

      conda update sidr

   or use the docker container::

      docker pull quay.io/biocontainers/sidr:<tag>

   (see `sidr/tags`_ for valid values for ``<tag>``)


.. |downloads_sidr| image:: https://img.shields.io/conda/dn/bioconda/sidr.svg?style=flat
   :target: https://anaconda.org/bioconda/sidr
   :alt:   (downloads)
.. |docker_sidr| image:: https://quay.io/repository/biocontainers/sidr/status
   :target: https://quay.io/repository/biocontainers/sidr
.. _`sidr/tags`: https://quay.io/repository/biocontainers/sidr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sidr/README.html