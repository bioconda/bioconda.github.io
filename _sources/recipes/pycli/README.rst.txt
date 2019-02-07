.. title:: Package Recipe 'pycli'
.. highlight: bash


pycli
=====

.. conda:recipe:: pycli
   :replaces_section_title:

   Simple\, object\-oriented approach to Python CLI apps

   :homepage: http://packages.python.org/pyCLI/
   :license: MIT
   :recipe: /`pycli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycli/meta.yaml>`_

   


.. conda:package:: pycli

   |downloads_pycli| |docker_pycli|

   :versions: 2.0.3

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_pycli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pycli

   and update with::

      conda update pycli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pycli


.. |required_by_pycli| conda:required_by:: pycli
.. |downloads_pycli| image:: https://img.shields.io/conda/dn/bioconda/pycli.svg?style=flat
   :alt:   (downloads)
.. |docker_pycli| image:: https://quay.io/repository/biocontainers/pycli/status
   :target: https://quay.io/repository/biocontainers/pycli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycli/README.html

