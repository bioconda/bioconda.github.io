:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'compare-reads'
.. highlight: bash

compare-reads
=============

.. conda:recipe:: compare-reads
   :replaces_section_title:

   cythonized function to compare reads by name.

   :homepage: https://github.com/mvdbeek/pysam-compare-reads
   :license: MIT
   :recipe: /`compare-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compare-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compare-reads/meta.yaml>`_

   


.. conda:package:: compare-reads

   |downloads_compare-reads| |docker_compare-reads|

   :versions: 0.0.1-0
   
   :depends pysam: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install compare-reads

   and update with::

      conda update compare-reads

   or use the docker container::

      docker pull quay.io/biocontainers/compare-reads:<tag>

   (see `compare-reads/tags`_ for valid values for ``<tag>``)


.. |downloads_compare-reads| image:: https://img.shields.io/conda/dn/bioconda/compare-reads.svg?style=flat
   :alt:   (downloads)
.. |docker_compare-reads| image:: https://quay.io/repository/biocontainers/compare-reads/status
   :target: https://quay.io/repository/biocontainers/compare-reads
.. _`compare-reads/tags`: https://quay.io/repository/biocontainers/compare-reads?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/compare-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/compare-reads/README.html