.. title:: Package Recipe 'ficus'
.. highlight: bash


ficus
=====

.. conda:recipe:: ficus
   :replaces_section_title:

   provides a context manager for matplotlib figures.

   :homepage: https://github.com/camillescott/ficus
   :license: BSD-3-Clause
   :recipe: /`ficus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ficus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ficus/meta.yaml>`_

   


.. conda:package:: ficus

   |downloads_ficus| |docker_ficus|

   :versions: 0.5, 0.3

   :depends: :conda:package:`matplotlib` >=1.4 :conda:package:`python` 2.7* 

   :required~by: |required_by_ficus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ficus

   and update with::

      conda update ficus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ficus


.. |required_by_ficus| conda:required_by:: ficus
.. |downloads_ficus| image:: https://img.shields.io/conda/dn/bioconda/ficus.svg?style=flat
   :alt:   (downloads)
.. |docker_ficus| image:: https://quay.io/repository/biocontainers/ficus/status
   :target: https://quay.io/repository/biocontainers/ficus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ficus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ficus/README.html

