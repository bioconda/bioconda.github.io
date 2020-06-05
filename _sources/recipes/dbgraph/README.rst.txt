:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbgraph'
.. highlight: bash

dbgraph
=======

.. conda:recipe:: dbgraph
   :replaces_section_title:
   :noindex:

   A graph\-centric approach for metagenome\-guided peptide identification in metaproteomics. 

   :homepage: https://github.com/COL-IU/graph2pro-var/tree/master/Graph2Pro
   :license: GNU General Public License
   :recipe: /`dbgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbgraph/meta.yaml>`_

   Includes program DBGraph2Pro and DBGraphPep2Pro. Creates a peptide and protein database from graph generated from nucleotide sequencing data using MEGAHIT or MetaSpades. A graph\-centric approach for metagenome\-guided peptide identification in metaproteomics. 


.. conda:package:: dbgraph

   |downloads_dbgraph| |docker_dbgraph|

   :versions:
      
      

      ``1.0.0-0``,  ``v1.0.0-1``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dbgraph

   and update with::

      conda update dbgraph

   or use the docker container::

      docker pull quay.io/biocontainers/dbgraph:<tag>

   (see `dbgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_dbgraph| image:: https://img.shields.io/conda/dn/bioconda/dbgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/dbgraph
   :alt:   (downloads)
.. |docker_dbgraph| image:: https://quay.io/repository/biocontainers/dbgraph/status
   :target: https://quay.io/repository/biocontainers/dbgraph
.. _`dbgraph/tags`: https://quay.io/repository/biocontainers/dbgraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbgraph/README.html