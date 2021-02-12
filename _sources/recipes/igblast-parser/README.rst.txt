:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igblast-parser'
.. highlight: bash

igblast-parser
==============

.. conda:recipe:: igblast-parser
   :replaces_section_title:
   :noindex:

   Parser of Igblast results into a csv file

   :homepage: https://github.com/aerijman/igblast-parser
   :license: MIT
   :recipe: /`igblast-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast-parser/meta.yaml>`_

   


.. conda:package:: igblast-parser

   |downloads_igblast-parser| |docker_igblast-parser|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igblast-parser

   and update with::

      conda update igblast-parser

   or use the docker container::

      docker pull quay.io/biocontainers/igblast-parser:<tag>

   (see `igblast-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_igblast-parser| image:: https://img.shields.io/conda/dn/bioconda/igblast-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/igblast-parser
   :alt:   (downloads)
.. |docker_igblast-parser| image:: https://quay.io/repository/biocontainers/igblast-parser/status
   :target: https://quay.io/repository/biocontainers/igblast-parser
.. _`igblast-parser/tags`: https://quay.io/repository/biocontainers/igblast-parser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast-parser/README.html