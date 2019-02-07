.. title:: Package Recipe 'pdfkit'
.. highlight: bash


pdfkit
======

.. conda:recipe:: pdfkit
   :replaces_section_title:

   Wkhtmltopdf python wrapper to convert html to pdf using the webkit rendering engine and qt

   :homepage: https://pypi.python.org/pypi/pdfkit
   :license: MIT License
   :recipe: /`pdfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit/meta.yaml>`_

   


.. conda:package:: pdfkit

   |downloads_pdfkit| |docker_pdfkit|

   :versions: 0.6.1, 0.5.0

   :depends: :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`wkhtmltopdf`  

   :required~by: |required_by_pdfkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pdfkit

   and update with::

      conda update pdfkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pdfkit


.. |required_by_pdfkit| conda:required_by:: pdfkit
.. |downloads_pdfkit| image:: https://img.shields.io/conda/dn/bioconda/pdfkit.svg?style=flat
   :alt:   (downloads)
.. |docker_pdfkit| image:: https://quay.io/repository/biocontainers/pdfkit/status
   :target: https://quay.io/repository/biocontainers/pdfkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdfkit/README.html

