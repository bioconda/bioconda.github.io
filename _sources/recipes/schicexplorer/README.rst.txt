:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schicexplorer'
.. highlight: bash

schicexplorer
=============

.. conda:recipe:: schicexplorer
   :replaces_section_title:

   Set of programs to process\, analyze and visualize single\-cell Hi\-C data

   :homepage: https://github.com/joachimwolff/scHiCExplorer
   :license: GPL3
   :recipe: /`schicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schicexplorer/meta.yaml>`_

   


.. conda:package:: schicexplorer

   |downloads_schicexplorer| |docker_schicexplorer|

   :versions: 1-0
   
   :depends cooler: >=0.8.5
   :depends hicexplorer: >=3.3.1
   :depends hicmatrix: >=11
   :depends numpy: >=1.17.3
   :depends python: >=3.6
   :depends scikit-learn: >=0.21.1
   :depends scipy: >=1.3.2
   :depends sparse-neighbors-search: >=0.4
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install schicexplorer

   and update with::

      conda update schicexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/schicexplorer:<tag>

   (see `schicexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_schicexplorer| image:: https://img.shields.io/conda/dn/bioconda/schicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/schicexplorer
   :alt:   (downloads)
.. |docker_schicexplorer| image:: https://quay.io/repository/biocontainers/schicexplorer/status
   :target: https://quay.io/repository/biocontainers/schicexplorer
.. _`schicexplorer/tags`: https://quay.io/repository/biocontainers/schicexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schicexplorer/README.html