:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi2'
.. highlight: bash

fermi2
======

.. conda:recipe:: fermi2
   :replaces_section_title:

   Fermi2 focuses on the exploration of FMD\-index as a graph.

   :homepage: https://github.com/lh3/fermi2
   :license: Unknown
   :recipe: /`fermi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2/meta.yaml>`_

   


.. conda:package:: fermi2

   |downloads_fermi2| |docker_fermi2|

   :versions: r193-4, r193-3, r193-2, r193-1, r193-0, r188-0
   
   :depends bfc: 
   :depends libgcc-ng: >=7.3.0
   :depends make: 
   :depends perl: 
   :depends ropebwt2: 
   :depends seqtk: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fermi2

   and update with::

      conda update fermi2

   or use the docker container::

      docker pull quay.io/biocontainers/fermi2:<tag>

   (see `fermi2/tags`_ for valid values for ``<tag>``)


.. |downloads_fermi2| image:: https://img.shields.io/conda/dn/bioconda/fermi2.svg?style=flat
   :target: https://anaconda.org/bioconda/fermi2
   :alt:   (downloads)
.. |docker_fermi2| image:: https://quay.io/repository/biocontainers/fermi2/status
   :target: https://quay.io/repository/biocontainers/fermi2
.. _`fermi2/tags`: https://quay.io/repository/biocontainers/fermi2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi2/README.html