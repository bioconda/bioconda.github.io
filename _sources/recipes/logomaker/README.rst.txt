:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'logomaker'
.. highlight: bash

logomaker
=========

.. conda:recipe:: logomaker
   :replaces_section_title:
   :noindex:

   Package for making Sequence Logos

   :homepage: http://logomaker.readthedocs.io
   :license: MIT / MIT
   :recipe: /`logomaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logomaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logomaker/meta.yaml>`_

   


.. conda:package:: logomaker

   |downloads_logomaker| |docker_logomaker|

   :versions:
      
      

      ``0.8-0``

      

   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install logomaker

   and update with::

      conda update logomaker

   or use the docker container::

      docker pull quay.io/biocontainers/logomaker:<tag>

   (see `logomaker/tags`_ for valid values for ``<tag>``)


.. |downloads_logomaker| image:: https://img.shields.io/conda/dn/bioconda/logomaker.svg?style=flat
   :target: https://anaconda.org/bioconda/logomaker
   :alt:   (downloads)
.. |docker_logomaker| image:: https://quay.io/repository/biocontainers/logomaker/status
   :target: https://quay.io/repository/biocontainers/logomaker
.. _`logomaker/tags`: https://quay.io/repository/biocontainers/logomaker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/logomaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/logomaker/README.html