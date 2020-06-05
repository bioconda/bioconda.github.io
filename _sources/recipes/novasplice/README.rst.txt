:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novasplice'
.. highlight: bash

novasplice
==========

.. conda:recipe:: novasplice
   :replaces_section_title:
   :noindex:

   NovaSplice is a python tool to predict novel intronic splice sites from a given VCF file

   :homepage: https://github.com/aryakaul/novasplice
   :license: MIT
   :recipe: /`novasplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novasplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novasplice/meta.yaml>`_

   


.. conda:package:: novasplice

   |downloads_novasplice| |docker_novasplice|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends argparse: 
   :depends maxentpy: 
   :depends pybedtools: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install novasplice

   and update with::

      conda update novasplice

   or use the docker container::

      docker pull quay.io/biocontainers/novasplice:<tag>

   (see `novasplice/tags`_ for valid values for ``<tag>``)


.. |downloads_novasplice| image:: https://img.shields.io/conda/dn/bioconda/novasplice.svg?style=flat
   :target: https://anaconda.org/bioconda/novasplice
   :alt:   (downloads)
.. |docker_novasplice| image:: https://quay.io/repository/biocontainers/novasplice/status
   :target: https://quay.io/repository/biocontainers/novasplice
.. _`novasplice/tags`: https://quay.io/repository/biocontainers/novasplice?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novasplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novasplice/README.html