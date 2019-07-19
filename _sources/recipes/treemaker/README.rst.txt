:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treemaker'
.. highlight: bash

treemaker
=========

.. conda:recipe:: treemaker
   :replaces_section_title:

   A python tool for generating a Newick formatted tree from alist of classifications

   :homepage: https://github.com/SimonGreenhill/treemaker
   :license: BSD / BSD-3-Clause
   :recipe: /`treemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treemaker/meta.yaml>`_

   


.. conda:package:: treemaker

   |downloads_treemaker| |docker_treemaker|

   :versions: 1.3-0, 1.2-0, 1.1-1, 1.1-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treemaker

   and update with::

      conda update treemaker

   or use the docker container::

      docker pull quay.io/biocontainers/treemaker:<tag>

   (see `treemaker/tags`_ for valid values for ``<tag>``)


.. |downloads_treemaker| image:: https://img.shields.io/conda/dn/bioconda/treemaker.svg?style=flat
   :target: https://anaconda.org/bioconda/treemaker
   :alt:   (downloads)
.. |docker_treemaker| image:: https://quay.io/repository/biocontainers/treemaker/status
   :target: https://quay.io/repository/biocontainers/treemaker
.. _`treemaker/tags`: https://quay.io/repository/biocontainers/treemaker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treemaker/README.html