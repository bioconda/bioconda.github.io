.. title:: Package Recipe 'pywdl'
.. highlight: bash


pywdl
=====

.. conda:recipe:: pywdl
   :replaces_section_title:

   A Python implementation of a WDL parser and language bindings.

   :homepage: https://github.com/broadinstitute/pywdl
   :license: Apache v2.0
   :recipe: /`pywdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywdl/meta.yaml>`_

   


.. conda:package:: pywdl

   |downloads_pywdl| |docker_pywdl|

   :versions: 1.0.22

   :depends: :conda:package:`pytest`  :conda:package:`python` 2.7* :conda:package:`xtermcolor`  

   :required~by: |required_by_pywdl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pywdl

   and update with::

      conda update pywdl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pywdl


.. |required_by_pywdl| conda:required_by:: pywdl
.. |downloads_pywdl| image:: https://img.shields.io/conda/dn/bioconda/pywdl.svg?style=flat
   :alt:   (downloads)
.. |docker_pywdl| image:: https://quay.io/repository/biocontainers/pywdl/status
   :target: https://quay.io/repository/biocontainers/pywdl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywdl/README.html

