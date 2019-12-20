:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdna_cupcake'
.. highlight: bash

cdna_cupcake
============

.. conda:recipe:: cdna_cupcake
   :replaces_section_title:

   cDNA\_Cupcake is a miscellaneous collection of Python and R scripts used for analyzing sequencing data.

   :homepage: https://github.com/Magdoll/cDNA_Cupcake
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`cdna_cupcake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdna_cupcake/meta.yaml>`_

   


.. conda:package:: cdna_cupcake

   |downloads_cdna_cupcake| |docker_cdna_cupcake|

   :versions: 9.1.1-0, 9.0.3-0, 8.7.3-0, 5.8-0, 5.3-1, 5.3-0
   
   :depends bcbiogff: 
   :depends biopython: 
   :depends bx-python: >=0.7.3
   :depends graphviz: 
   :depends libgcc-ng: >=7.3.0
   :depends numpy: >=1.14.6,<2.0a0
   :depends pysam: 
   :depends python: >=3.7,<3.8.0a0
   :depends r-base: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cdna_cupcake

   and update with::

      conda update cdna_cupcake

   or use the docker container::

      docker pull quay.io/biocontainers/cdna_cupcake:<tag>

   (see `cdna_cupcake/tags`_ for valid values for ``<tag>``)


.. |downloads_cdna_cupcake| image:: https://img.shields.io/conda/dn/bioconda/cdna_cupcake.svg?style=flat
   :target: https://anaconda.org/bioconda/cdna_cupcake
   :alt:   (downloads)
.. |docker_cdna_cupcake| image:: https://quay.io/repository/biocontainers/cdna_cupcake/status
   :target: https://quay.io/repository/biocontainers/cdna_cupcake
.. _`cdna_cupcake/tags`: https://quay.io/repository/biocontainers/cdna_cupcake?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdna_cupcake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdna_cupcake/README.html