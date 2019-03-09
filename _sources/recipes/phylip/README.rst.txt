:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylip'
.. highlight: bash

phylip
======

.. conda:recipe:: phylip
   :replaces_section_title:

   Package of programs for inferring phylogenies

   :homepage: http://evolution.genetics.washington.edu/phylip/
   :license: BSD
   :recipe: /`phylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylip/meta.yaml>`_
   :links: biotools: :biotools:`PHYLIP`

   


.. conda:package:: phylip

   |downloads_phylip| |docker_phylip|

   :versions: 3.697-0, 3.696-3, 3.696-2, 3.696-1, 3.696-0
   
   :depends libgcc-ng: >=4.9
   
   :depends openjdk: >=6
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylip

   and update with::

      conda update phylip

   or use the docker container::

      docker pull quay.io/biocontainers/phylip:<tag>

   (see `phylip/tags`_ for valid values for ``<tag>``)


.. |downloads_phylip| image:: https://img.shields.io/conda/dn/bioconda/phylip.svg?style=flat
   :alt:   (downloads)
.. |docker_phylip| image:: https://quay.io/repository/biocontainers/phylip/status
   :target: https://quay.io/repository/biocontainers/phylip
.. _`phylip/tags`: https://quay.io/repository/biocontainers/phylip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylip/README.html