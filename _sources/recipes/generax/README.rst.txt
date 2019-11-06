:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'generax'
.. highlight: bash

generax
=======

.. conda:recipe:: generax
   :replaces_section_title:

   GeneRax\: a parallel tool for species tree\-aware maximum likelihood based gene tree inference under gene duplication\, transfer\, and loss.

   :homepage: https://github.com/benoitmorel/generax
   :license: AGPL / AGPL-3
   :recipe: /`generax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/generax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/generax/meta.yaml>`_
   :links: doi: :doi:`10.1101/779066`

   


.. conda:package:: generax

   |downloads_generax| |docker_generax|

   :versions: 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmpi: >=4.0.1,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install generax

   and update with::

      conda update generax

   or use the docker container::

      docker pull quay.io/biocontainers/generax:<tag>

   (see `generax/tags`_ for valid values for ``<tag>``)


.. |downloads_generax| image:: https://img.shields.io/conda/dn/bioconda/generax.svg?style=flat
   :target: https://anaconda.org/bioconda/generax
   :alt:   (downloads)
.. |docker_generax| image:: https://quay.io/repository/biocontainers/generax/status
   :target: https://quay.io/repository/biocontainers/generax
.. _`generax/tags`: https://quay.io/repository/biocontainers/generax?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/generax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/generax/README.html