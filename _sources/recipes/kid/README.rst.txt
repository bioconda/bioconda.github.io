.. title:: Package Recipe 'kid'
.. highlight: bash


kid
===

.. conda:recipe:: kid
   :replaces_section_title:

   A simple and pythonic XML template language

   :homepage: https://pypi.python.org/pypi/kid
   :license: MIT
   :recipe: /`kid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kid/meta.yaml>`_

   


.. conda:package:: kid

   |downloads_kid| |docker_kid|

   :versions: 0.9.6

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_kid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kid

   and update with::

      conda update kid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kid


.. |required_by_kid| conda:required_by:: kid
.. |downloads_kid| image:: https://img.shields.io/conda/dn/bioconda/kid.svg?style=flat
   :alt:   (downloads)
.. |docker_kid| image:: https://quay.io/repository/biocontainers/kid/status
   :target: https://quay.io/repository/biocontainers/kid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kid/README.html

