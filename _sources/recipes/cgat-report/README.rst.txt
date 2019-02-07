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

   :versions: 0.8.1, 0.8.0, 0.7.6.1, 0.3.7

   :depends: :conda:package:`bokeh`  :conda:package:`docutils`  :conda:package:`future`  :conda:package:`matplotlib` >=2.0 :conda:package:`matplotlib-venn`  :conda:package:`nose`  :conda:package:`numpy`  :conda:package:`openpyxl`  :conda:package:`pandas`  :conda:package:`pillow`  :conda:package:`python`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`six`  :conda:package:`sphinx`  :conda:package:`sqlalchemy`  

   :required~by: |required_by_cgat-report|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-report

   and update with::

      conda update cgat-report

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgat-report


.. |required_by_cgat-report| conda:required_by:: cgat-report
.. |downloads_cgat-report| image:: https://img.shields.io/conda/dn/bioconda/cgat-report.svg?style=flat
   :alt:   (downloads)
.. |docker_cgat-report| image:: https://quay.io/repository/biocontainers/cgat-report/status
   :target: https://quay.io/repository/biocontainers/cgat-report







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-report/README.html

