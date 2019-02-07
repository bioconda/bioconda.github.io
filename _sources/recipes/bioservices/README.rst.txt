.. title:: Package Recipe 'bioservices'
.. highlight: bash


bioservices
===========

.. conda:recipe:: bioservices
   :replaces_section_title:

   Access to Biological Web Services from Python

   :homepage: http://pypi.python.org/pypi/bioservices
   :license: GPLv3
   :recipe: /`bioservices <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioservices>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioservices/meta.yaml>`_

   


.. conda:package:: bioservices

   |downloads_bioservices| |docker_bioservices|

   :versions: 1.6.0, 1.5.2, 1.5.1, 1.4.17, 1.4.16, 1.4.10, 1.4.7, 1.4.5

   :depends: :conda:package:`appdirs`  :conda:package:`beautifulsoup4`  :conda:package:`easydev` >=0.9.36 :conda:package:`grequests`  :conda:package:`numpydoc`  :conda:package:`pandas`  :conda:package:`python`  :conda:package:`requests`  :conda:package:`requests-cache`  :conda:package:`suds-jurko`  :conda:package:`wrapt`  

   :required~by: |required_by_bioservices|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioservices

   and update with::

      conda update bioservices

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioservices


.. |required_by_bioservices| conda:required_by:: bioservices
.. |downloads_bioservices| image:: https://img.shields.io/conda/dn/bioconda/bioservices.svg?style=flat
   :alt:   (downloads)
.. |docker_bioservices| image:: https://quay.io/repository/biocontainers/bioservices/status
   :target: https://quay.io/repository/biocontainers/bioservices







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioservices/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioservices/README.html

