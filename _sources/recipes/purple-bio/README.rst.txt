:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purple-bio'
.. highlight: bash

purple-bio
==========

.. conda:recipe:: purple-bio
   :replaces_section_title:

   Picking Unique Relevant Peptides for viraL Experiments

   :homepage: https://gitlab.com/HartkopfF/Purple
   :license: LGPL / GNU Lesser General Public v3 or later (LGPLv3+)
   :recipe: /`purple-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purple-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purple-bio/meta.yaml>`_

   


.. conda:package:: purple-bio

   |downloads_purple-bio| |docker_purple-bio|

   :versions: 0.4.2.5-0, 0.4.2.1-0
   
   :depends biopython: 
   :depends python: >=3
   :depends pyyaml: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install purple-bio

   and update with::

      conda update purple-bio

   or use the docker container::

      docker pull quay.io/biocontainers/purple-bio:<tag>

   (see `purple-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_purple-bio| image:: https://img.shields.io/conda/dn/bioconda/purple-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/purple-bio
   :alt:   (downloads)
.. |docker_purple-bio| image:: https://quay.io/repository/biocontainers/purple-bio/status
   :target: https://quay.io/repository/biocontainers/purple-bio
.. _`purple-bio/tags`: https://quay.io/repository/biocontainers/purple-bio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purple-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purple-bio/README.html