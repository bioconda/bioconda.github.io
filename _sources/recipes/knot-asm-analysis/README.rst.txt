:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knot-asm-analysis'
.. highlight: bash

knot-asm-analysis
=================

.. conda:recipe:: knot-asm-analysis
   :replaces_section_title:
   :noindex:

   KNOT\: Knowledge Network Overlap exTraction is a tool for the investigation of fragmented long read assemblies.

   :homepage: https://github.com/natir/knot
   :license: MIT / MIT
   :recipe: /`knot-asm-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot-asm-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot-asm-analysis/meta.yaml>`_

   


.. conda:package:: knot-asm-analysis

   |downloads_knot-asm-analysis| |docker_knot-asm-analysis|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends biopython: ``>=1.72``
   :depends fpa: ``>=0.5``
   :depends gfapy: ``>=1.0.0``
   :depends jinja2: ``>=2.10``
   :depends minimap2: 
   :depends networkx: ``>=2.2``
   :depends python: ``>=3``
   :depends snakemake: ``>=5.3``
   :depends yacrd: ``>=0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install knot-asm-analysis

   and update with::

      conda update knot-asm-analysis

   or use the docker container::

      docker pull quay.io/biocontainers/knot-asm-analysis:<tag>

   (see `knot-asm-analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_knot-asm-analysis| image:: https://img.shields.io/conda/dn/bioconda/knot-asm-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/knot-asm-analysis
   :alt:   (downloads)
.. |docker_knot-asm-analysis| image:: https://quay.io/repository/biocontainers/knot-asm-analysis/status
   :target: https://quay.io/repository/biocontainers/knot-asm-analysis
.. _`knot-asm-analysis/tags`: https://quay.io/repository/biocontainers/knot-asm-analysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knot-asm-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knot-asm-analysis/README.html