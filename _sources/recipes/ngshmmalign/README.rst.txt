:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngshmmalign'
.. highlight: bash

ngshmmalign
===========

.. conda:recipe:: ngshmmalign/0.1.1
   :replaces_section_title:

   ngshmmalign is a profile HMM aligner for NGS reads designed particularly for small genomes

   :homepage: https://github.com/cbg-ethz/ngshmmalign
   :license: GNU General Public License v2 or later (GPLv2+)
   :recipe: /`ngshmmalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngshmmalign>`_/`0.1.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngshmmalign/0.1.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngshmmalign/0.1.1/meta.yaml>`_

   


.. conda:package:: ngshmmalign

   |downloads_ngshmmalign| |docker_ngshmmalign|

   :versions: 0.1.1-1, 0.1.1-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngshmmalign

   and update with::

      conda update ngshmmalign

   or use the docker container::

      docker pull quay.io/biocontainers/ngshmmalign:<tag>

   (see `ngshmmalign/tags`_ for valid values for ``<tag>``)


.. |downloads_ngshmmalign| image:: https://img.shields.io/conda/dn/bioconda/ngshmmalign.svg?style=flat
   :alt:   (downloads)
.. |docker_ngshmmalign| image:: https://quay.io/repository/biocontainers/ngshmmalign/status
   :target: https://quay.io/repository/biocontainers/ngshmmalign
.. _`ngshmmalign/tags`: https://quay.io/repository/biocontainers/ngshmmalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngshmmalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngshmmalign/README.html