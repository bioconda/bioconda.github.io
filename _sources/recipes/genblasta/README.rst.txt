:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genblasta'
.. highlight: bash

genblasta
=========

.. conda:recipe:: genblasta
   :replaces_section_title:

   genBlast is a program suite\, consisting of two programs\: genBlastA and genBlastG. genBlastA parses local alignments\, or high\-scoring segment pairs \(HSPs\) produced by local sequence alignment programs such as BLAST and WU\-BLAST and identify groups of HSPs.

   :homepage: http://genome.sfu.ca/genblast/download.html
   :license: GNU
   :recipe: /`genblasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblasta/meta.yaml>`_

   


.. conda:package:: genblasta

   |downloads_genblasta| |docker_genblasta|

   :versions: 1.0.4-0
   
   :depends blast: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genblasta

   and update with::

      conda update genblasta

   or use the docker container::

      docker pull quay.io/biocontainers/genblasta:<tag>

   (see `genblasta/tags`_ for valid values for ``<tag>``)


.. |downloads_genblasta| image:: https://img.shields.io/conda/dn/bioconda/genblasta.svg?style=flat
   :alt:   (downloads)
.. |docker_genblasta| image:: https://quay.io/repository/biocontainers/genblasta/status
   :target: https://quay.io/repository/biocontainers/genblasta
.. _`genblasta/tags`: https://quay.io/repository/biocontainers/genblasta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genblasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genblasta/README.html