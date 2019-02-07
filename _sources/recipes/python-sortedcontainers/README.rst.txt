.. title:: Package Recipe 'python-sortedcontainers'
.. highlight: bash


python-sortedcontainers
=======================

.. conda:recipe:: python-sortedcontainers
   :replaces_section_title:

   sorted collections library\, written in pure\-Python\, and fast as C\-extensions

   :homepage: https://pypi.org/project/sortedcontainers/#description
   :license: Apache 2.0
   :recipe: /`python-sortedcontainers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-sortedcontainers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-sortedcontainers/meta.yaml>`_

   


.. conda:package:: python-sortedcontainers

   |downloads_python-sortedcontainers| |docker_python-sortedcontainers|

   :versions: 2.1.0, 2.0.5, 2.0.4

   :depends: :conda:package:`python`  

   :required~by: |required_by_python-sortedcontainers|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-sortedcontainers

   and update with::

      conda update python-sortedcontainers

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-sortedcontainers


.. |required_by_python-sortedcontainers| conda:required_by:: python-sortedcontainers
.. |downloads_python-sortedcontainers| image:: https://img.shields.io/conda/dn/bioconda/python-sortedcontainers.svg?style=flat
   :alt:   (downloads)
.. |docker_python-sortedcontainers| image:: https://quay.io/repository/biocontainers/python-sortedcontainers/status
   :target: https://quay.io/repository/biocontainers/python-sortedcontainers







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-sortedcontainers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-sortedcontainers/README.html

