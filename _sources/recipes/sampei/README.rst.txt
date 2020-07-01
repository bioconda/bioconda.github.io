:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sampei'
.. highlight: bash

sampei
======

.. conda:recipe:: sampei
   :replaces_section_title:
   :noindex:

   SAMPEI\, a searching method leveraging high quality query spectra within the same or different dataset to assign target spectra with peptide sequence and undefined modification \(mass shift\)

   :homepage: https://github.com/FenyoLab/SAMPEI
   :license: MIT / MIT License
   :recipe: /`sampei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sampei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sampei/meta.yaml>`_

   


.. conda:package:: sampei

   |downloads_sampei| |docker_sampei|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends numba: ``>=0.49.0``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.1``
   :depends pyteomics: ``>=4.2``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sampei

   and update with::

      conda update sampei

   or use the docker container::

      docker pull quay.io/biocontainers/sampei:<tag>

   (see `sampei/tags`_ for valid values for ``<tag>``)


.. |downloads_sampei| image:: https://img.shields.io/conda/dn/bioconda/sampei.svg?style=flat
   :target: https://anaconda.org/bioconda/sampei
   :alt:   (downloads)
.. |docker_sampei| image:: https://quay.io/repository/biocontainers/sampei/status
   :target: https://quay.io/repository/biocontainers/sampei
.. _`sampei/tags`: https://quay.io/repository/biocontainers/sampei?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sampei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sampei/README.html