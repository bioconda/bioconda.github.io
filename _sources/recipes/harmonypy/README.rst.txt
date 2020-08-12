:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harmonypy'
.. highlight: bash

harmonypy
=========

.. conda:recipe:: harmonypy
   :replaces_section_title:
   :noindex:

   A data integration algorithm.

   :homepage: https://github.com/slowkow/harmonypy
   :license: GPL-3.0-or-later
   :recipe: /`harmonypy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmonypy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmonypy/meta.yaml>`_

   


.. conda:package:: harmonypy

   |downloads_harmonypy| |docker_harmonypy|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install harmonypy

   and update with::

      conda update harmonypy

   or use the docker container::

      docker pull quay.io/biocontainers/harmonypy:<tag>

   (see `harmonypy/tags`_ for valid values for ``<tag>``)


.. |downloads_harmonypy| image:: https://img.shields.io/conda/dn/bioconda/harmonypy.svg?style=flat
   :target: https://anaconda.org/bioconda/harmonypy
   :alt:   (downloads)
.. |docker_harmonypy| image:: https://quay.io/repository/biocontainers/harmonypy/status
   :target: https://quay.io/repository/biocontainers/harmonypy
.. _`harmonypy/tags`: https://quay.io/repository/biocontainers/harmonypy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harmonypy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harmonypy/README.html