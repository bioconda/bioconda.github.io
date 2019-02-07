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

   :versions: 0.8.0

   :depends: :conda:package:`click`  :conda:package:`python` >=3.6 :conda:package:`smart_open` >=1.5.4 :conda:package:`tabulate`  :conda:package:`terminaltables`  

   :required~by: |required_by_sample-sheet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sample-sheet

   and update with::

      conda update sample-sheet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sample-sheet


.. |required_by_sample-sheet| conda:required_by:: sample-sheet
.. |downloads_sample-sheet| image:: https://img.shields.io/conda/dn/bioconda/sample-sheet.svg?style=flat
   :alt:   (downloads)
.. |docker_sample-sheet| image:: https://quay.io/repository/biocontainers/sample-sheet/status
   :target: https://quay.io/repository/biocontainers/sample-sheet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sample-sheet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sample-sheet/README.html

