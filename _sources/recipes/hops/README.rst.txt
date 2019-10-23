:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hops'
.. highlight: bash

hops
====

.. conda:recipe:: hops
   :replaces_section_title:

   Java tool to work on ancient metagenomics

   :homepage: https://github.com/rhuebler/HOPS/
   :license: GPL >=3
   :recipe: /`hops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hops/meta.yaml>`_

   


.. conda:package:: hops

   |downloads_hops| |docker_hops|

   :versions: 0.33-0, 0.31-1, 0.31-0
   
   :depends malt: 
   :depends openjdk: 8.0.144.*
   :depends python: 
   :depends r-base: >=3.5
   :depends r-doparallel: 
   :depends r-getopt: 
   :depends r-gridbase: 
   :depends r-gridextra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hops

   and update with::

      conda update hops

   or use the docker container::

      docker pull quay.io/biocontainers/hops:<tag>

   (see `hops/tags`_ for valid values for ``<tag>``)


.. |downloads_hops| image:: https://img.shields.io/conda/dn/bioconda/hops.svg?style=flat
   :target: https://anaconda.org/bioconda/hops
   :alt:   (downloads)
.. |docker_hops| image:: https://quay.io/repository/biocontainers/hops/status
   :target: https://quay.io/repository/biocontainers/hops
.. _`hops/tags`: https://quay.io/repository/biocontainers/hops?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hops/README.html