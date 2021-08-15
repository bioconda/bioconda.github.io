:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fcsparser'
.. highlight: bash

fcsparser
=========

.. conda:recipe:: fcsparser
   :replaces_section_title:
   :noindex:

   A python package for reading raw fcs files

   :homepage: https://github.com/eyurtsev/fcsparser
   :license: MIT / MIT
   :recipe: /`fcsparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcsparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcsparser/meta.yaml>`_

   


.. conda:package:: fcsparser

   |downloads_fcsparser| |docker_fcsparser|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fcsparser

   and update with::

      conda update fcsparser

   or use the docker container::

      docker pull quay.io/biocontainers/fcsparser:<tag>

   (see `fcsparser/tags`_ for valid values for ``<tag>``)


.. |downloads_fcsparser| image:: https://img.shields.io/conda/dn/bioconda/fcsparser.svg?style=flat
   :target: https://anaconda.org/bioconda/fcsparser
   :alt:   (downloads)
.. |docker_fcsparser| image:: https://quay.io/repository/biocontainers/fcsparser/status
   :target: https://quay.io/repository/biocontainers/fcsparser
.. _`fcsparser/tags`: https://quay.io/repository/biocontainers/fcsparser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fcsparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fcsparser/README.html