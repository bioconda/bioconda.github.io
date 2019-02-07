.. title:: Package Recipe 'quicksect'
.. highlight: bash


quicksect
=========

.. conda:recipe:: quicksect
   :replaces_section_title:

   A cythonized\, extended version of the interval search tree in bx

   :homepage: https://github.com/brentp/quicksect
   :license: MIT / MIT
   :recipe: /`quicksect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksect/meta.yaml>`_

   


.. conda:package:: quicksect

   |downloads_quicksect| |docker_quicksect|

   :versions: 0.2.0, 0.1.0

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_quicksect|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quicksect

   and update with::

      conda update quicksect

   or use the docker container::

      docker pull quay.io/repository/biocontainers/quicksect


.. |required_by_quicksect| conda:required_by:: quicksect
.. |downloads_quicksect| image:: https://img.shields.io/conda/dn/bioconda/quicksect.svg?style=flat
   :alt:   (downloads)
.. |docker_quicksect| image:: https://quay.io/repository/biocontainers/quicksect/status
   :target: https://quay.io/repository/biocontainers/quicksect







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicksect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicksect/README.html

