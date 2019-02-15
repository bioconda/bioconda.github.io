:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treekin'
.. highlight: bash

treekin
=======

.. conda:recipe:: treekin/0.3.1
   :replaces_section_title:

   Compute folding dynamics on coarse grained version of an energy landscape by numeric integration of a Markov process

   :homepage: https://www.tbi.univie.ac.at/RNA/Treekin/
   :license: GPL
   :recipe: /`treekin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin>`_/`0.3.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin/0.3.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin/0.3.1/meta.yaml>`_

   


.. conda:package:: treekin

   |downloads_treekin| |docker_treekin|

   :versions: 0.4.2-1, 0.4.2-0, 0.3.1-1
   
   :depends blas: 
   
   :depends lapack: 
   
   :depends libcxx: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treekin

   and update with::

      conda update treekin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/treekin:<tag>

   (see `treekin/tags`_ for valid values for ``<tag>``)


.. |downloads_treekin| image:: https://img.shields.io/conda/dn/bioconda/treekin.svg?style=flat
   :alt:   (downloads)
.. |docker_treekin| image:: https://quay.io/repository/biocontainers/treekin/status
   :target: https://quay.io/repository/biocontainers/treekin
.. _`treekin/tags`: https://quay.io/repository/biocontainers/treekin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treekin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treekin/README.html