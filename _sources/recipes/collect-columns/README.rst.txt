:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collect-columns'
.. highlight: bash

collect-columns
===============

.. conda:recipe:: collect-columns
   :replaces_section_title:

   Retrieve a column for each in a set of tables\, placing them in a single output table.

   :homepage: https://github.com/biowdl/collect-columns
   :license: MIT / MIT
   :recipe: /`collect-columns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect-columns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect-columns/meta.yaml>`_

   


.. conda:package:: collect-columns

   |downloads_collect-columns| |docker_collect-columns|

   :versions: 0.1.1-0
   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends pandas: >=0.23
   :depends python: >=3.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install collect-columns

   and update with::

      conda update collect-columns

   or use the docker container::

      docker pull quay.io/biocontainers/collect-columns:<tag>

   (see `collect-columns/tags`_ for valid values for ``<tag>``)


.. |downloads_collect-columns| image:: https://img.shields.io/conda/dn/bioconda/collect-columns.svg?style=flat
   :alt:   (downloads)
.. |docker_collect-columns| image:: https://quay.io/repository/biocontainers/collect-columns/status
   :target: https://quay.io/repository/biocontainers/collect-columns
.. _`collect-columns/tags`: https://quay.io/repository/biocontainers/collect-columns?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collect-columns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collect-columns/README.html