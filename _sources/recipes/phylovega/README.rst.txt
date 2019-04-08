:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylovega'
.. highlight: bash

phylovega
=========

.. conda:recipe:: phylovega
   :replaces_section_title:

   Interactive Phylogenetic trees in Vega.

   :homepage: https://github.com/Zsailer/phylovega
   :license: MIT / MIT
   :recipe: /`phylovega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylovega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylovega/meta.yaml>`_

   


.. conda:package:: phylovega

   |downloads_phylovega| |docker_phylovega|

   :versions: 0.1-0
   
   :depends phylopandas: 
   :depends python: 
   :depends vega3: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylovega

   and update with::

      conda update phylovega

   or use the docker container::

      docker pull quay.io/biocontainers/phylovega:<tag>

   (see `phylovega/tags`_ for valid values for ``<tag>``)


.. |downloads_phylovega| image:: https://img.shields.io/conda/dn/bioconda/phylovega.svg?style=flat
   :alt:   (downloads)
.. |docker_phylovega| image:: https://quay.io/repository/biocontainers/phylovega/status
   :target: https://quay.io/repository/biocontainers/phylovega
.. _`phylovega/tags`: https://quay.io/repository/biocontainers/phylovega?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylovega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylovega/README.html