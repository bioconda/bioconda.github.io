:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-leidenbase'
.. highlight: bash

r-leidenbase
============

.. conda:recipe:: r-leidenbase
   :replaces_section_title:

   An R to C interface that runs the Leiden community detection algorithm to find a basic partition

   :homepage: https://cole-trapnell-lab.github.io/leidenbase/
   :license: GPL2, GPL3, BSD
   :recipe: /`r-leidenbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leidenbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-leidenbase/meta.yaml>`_

   


.. conda:package:: r-leidenbase

   |downloads_r-leidenbase| |docker_r-leidenbase|

   :versions: 0.1.0-2, 0.1.0-1, 0.1.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-leidenbase

   and update with::

      conda update r-leidenbase

   or use the docker container::

      docker pull quay.io/biocontainers/r-leidenbase:<tag>

   (see `r-leidenbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-leidenbase| image:: https://img.shields.io/conda/dn/bioconda/r-leidenbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-leidenbase
   :alt:   (downloads)
.. |docker_r-leidenbase| image:: https://quay.io/repository/biocontainers/r-leidenbase/status
   :target: https://quay.io/repository/biocontainers/r-leidenbase
.. _`r-leidenbase/tags`: https://quay.io/repository/biocontainers/r-leidenbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-leidenbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-leidenbase/README.html