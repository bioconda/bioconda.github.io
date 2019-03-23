:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skmer'
.. highlight: bash

skmer
=====

.. conda:recipe:: skmer
   :replaces_section_title:

   Assembly\-free and alignment\-free tool for estimating genomic distances between genome\-skims

   :homepage: https://github.com/shahab-sarmashghi/Skmer
   :license: 3-Clause BSD
   :recipe: /`skmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer/meta.yaml>`_

   


.. conda:package:: skmer

   |downloads_skmer| |docker_skmer|

   :versions: 2.0.2-3, 2.0.1-0, 2.0.0-0, 1.1.0-1, 1.1.0-0, 1.0.0-0
   
   :depends jellyfish: 2.2.6
   
   :depends mash: 1.1
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: 
   
   :depends scipy: 
   
   :depends seqtk: 1.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install skmer

   and update with::

      conda update skmer

   or use the docker container::

      docker pull quay.io/biocontainers/skmer:<tag>

   (see `skmer/tags`_ for valid values for ``<tag>``)


.. |downloads_skmer| image:: https://img.shields.io/conda/dn/bioconda/skmer.svg?style=flat
   :alt:   (downloads)
.. |docker_skmer| image:: https://quay.io/repository/biocontainers/skmer/status
   :target: https://quay.io/repository/biocontainers/skmer
.. _`skmer/tags`: https://quay.io/repository/biocontainers/skmer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skmer/README.html