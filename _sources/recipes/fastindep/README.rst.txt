.. title:: Package Recipe 'fastindep'
.. highlight: bash


fastindep
=========

.. conda:recipe:: fastindep
   :replaces_section_title:

   A fast random heuristic algorithm for identifying large sets of unrelated individuals and unrelated markers

   :homepage: https://github.com/endrebak/fastindep
   :license: MIT
   :recipe: /`fastindep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastindep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastindep/meta.yaml>`_

   


.. conda:package:: fastindep

   |downloads_fastindep| |docker_fastindep|

   :versions: 1.0.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_fastindep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastindep

   and update with::

      conda update fastindep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastindep


.. |required_by_fastindep| conda:required_by:: fastindep
.. |downloads_fastindep| image:: https://img.shields.io/conda/dn/bioconda/fastindep.svg?style=flat
   :alt:   (downloads)
.. |docker_fastindep| image:: https://quay.io/repository/biocontainers/fastindep/status
   :target: https://quay.io/repository/biocontainers/fastindep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastindep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastindep/README.html

