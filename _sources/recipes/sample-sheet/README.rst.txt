:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sample-sheet'
.. highlight: bash

sample-sheet
============

.. conda:recipe:: sample-sheet
   :replaces_section_title:

   An Illumina Sample Sheet parsing library

   :homepage: https://github.com/clintval/sample-sheet
   :documentation: https://sample-sheet.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`sample-sheet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample-sheet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample-sheet/meta.yaml>`_

   


.. conda:package:: sample-sheet

   |downloads_sample-sheet| |docker_sample-sheet|

   :versions: 0.12.0-0, 0.11.0-0, 0.10.0-0, 0.9.4-0, 0.9.2-0, 0.9.1-0, 0.9.0-0, 0.8.0-0
   
   :depends click: 
   :depends python: >=3.6
   :depends requests: 
   :depends smart_open: 
   :depends tabulate: 
   :depends terminaltables: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sample-sheet

   and update with::

      conda update sample-sheet

   or use the docker container::

      docker pull quay.io/biocontainers/sample-sheet:<tag>

   (see `sample-sheet/tags`_ for valid values for ``<tag>``)


.. |downloads_sample-sheet| image:: https://img.shields.io/conda/dn/bioconda/sample-sheet.svg?style=flat
   :target: https://anaconda.org/bioconda/sample-sheet
   :alt:   (downloads)
.. |docker_sample-sheet| image:: https://quay.io/repository/biocontainers/sample-sheet/status
   :target: https://quay.io/repository/biocontainers/sample-sheet
.. _`sample-sheet/tags`: https://quay.io/repository/biocontainers/sample-sheet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sample-sheet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sample-sheet/README.html