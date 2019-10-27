:orphan:  .. only available via index, not via toctree

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

   :versions: 0.5-3, 0.5-2, 0.5-1, 0.5-0, 0.3-0
   
   :depends matplotlib: >=1.4
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ficus

   and update with::

      conda update ficus

   or use the docker container::

      docker pull quay.io/biocontainers/ficus:<tag>

   (see `ficus/tags`_ for valid values for ``<tag>``)


.. |downloads_ficus| image:: https://img.shields.io/conda/dn/bioconda/ficus.svg?style=flat
   :target: https://anaconda.org/bioconda/ficus
   :alt:   (downloads)
.. |docker_ficus| image:: https://quay.io/repository/biocontainers/ficus/status
   :target: https://quay.io/repository/biocontainers/ficus
.. _`ficus/tags`: https://quay.io/repository/biocontainers/ficus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ficus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ficus/README.html