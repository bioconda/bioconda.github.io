:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'exonerate'
.. highlight: bash

exonerate
=========

.. conda:recipe:: exonerate
   :replaces_section_title:

   Exonerate \- A generic tool for pairwise sequence comparison \/ alignment

   :homepage: https://www.ebi.ac.uk/about/vertebrate-genomics/software/exonerate
   :license: GPL-3.0
   :recipe: /`exonerate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exonerate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exonerate/meta.yaml>`_
   :links: biotools: :biotools:`exonerate`

   


.. conda:package:: exonerate

   |downloads_exonerate| |docker_exonerate|

   :versions: 2.4.0-2, 2.4.0-1, 2.4.0-0, 2.2.0-1, 2.2.0-0
   
   :depends glib: >=2.58.2,<3.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends pcre: >=8.41,<9.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install exonerate

   and update with::

      conda update exonerate

   or use the docker container::

      docker pull quay.io/biocontainers/exonerate:<tag>

   (see `exonerate/tags`_ for valid values for ``<tag>``)


.. |downloads_exonerate| image:: https://img.shields.io/conda/dn/bioconda/exonerate.svg?style=flat
   :alt:   (downloads)
.. |docker_exonerate| image:: https://quay.io/repository/biocontainers/exonerate/status
   :target: https://quay.io/repository/biocontainers/exonerate
.. _`exonerate/tags`: https://quay.io/repository/biocontainers/exonerate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/exonerate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/exonerate/README.html