:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacepharer'
.. highlight: bash

spacepharer
===========

.. conda:recipe:: spacepharer
   :replaces_section_title:

   SpacePHARER\: Sensitive identification of phages from CRISPR spacers in prokaryotic hosts

   :homepage: https://github.com/soedinglab/spacepharer
   :license: GPL / GPL-3
   :recipe: /`spacepharer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacepharer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacepharer/meta.yaml>`_

   


.. conda:package:: spacepharer

   |downloads_spacepharer| |docker_spacepharer|

   :versions: 1.56925d2-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends gawk: 
   :depends libgcc-ng: >=7.5.0
   :depends libstdcxx-ng: >=7.5.0
   :depends openmp: 
   :depends wget: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spacepharer

   and update with::

      conda update spacepharer

   or use the docker container::

      docker pull quay.io/biocontainers/spacepharer:<tag>

   (see `spacepharer/tags`_ for valid values for ``<tag>``)


.. |downloads_spacepharer| image:: https://img.shields.io/conda/dn/bioconda/spacepharer.svg?style=flat
   :target: https://anaconda.org/bioconda/spacepharer
   :alt:   (downloads)
.. |docker_spacepharer| image:: https://quay.io/repository/biocontainers/spacepharer/status
   :target: https://quay.io/repository/biocontainers/spacepharer
.. _`spacepharer/tags`: https://quay.io/repository/biocontainers/spacepharer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacepharer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacepharer/README.html