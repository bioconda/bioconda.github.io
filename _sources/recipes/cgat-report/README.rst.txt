:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-report'
.. highlight: bash

cgat-report
===========

.. conda:recipe:: cgat-report
   :replaces_section_title:

   A report generator in python based on sphinx

   :homepage: https://github.com/AndreasHeger/CGATReport
   :license: BSD
   :recipe: /`cgat-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-report/meta.yaml>`_

   


.. conda:package:: cgat-report

   |downloads_cgat-report| |docker_cgat-report|

   :versions: 0.9.1-0, 0.9.0-0, 0.8.4-0, 0.8.1-0, 0.8.0-1, 0.8.0-0, 0.7.6.1-1, 0.3.7-1, 0.3.7-0
   
   :depends bokeh: 
   :depends docutils: 
   :depends future: 
   :depends matplotlib-base: >=2.0
   :depends matplotlib-venn: 
   :depends nose: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pillow: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :depends six: 
   :depends sphinx: 
   :depends sqlalchemy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-report

   and update with::

      conda update cgat-report

   or use the docker container::

      docker pull quay.io/biocontainers/cgat-report:<tag>

   (see `cgat-report/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-report| image:: https://img.shields.io/conda/dn/bioconda/cgat-report.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-report
   :alt:   (downloads)
.. |docker_cgat-report| image:: https://quay.io/repository/biocontainers/cgat-report/status
   :target: https://quay.io/repository/biocontainers/cgat-report
.. _`cgat-report/tags`: https://quay.io/repository/biocontainers/cgat-report?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-report/README.html