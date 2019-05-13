:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eqtlbma'
.. highlight: bash

eqtlbma
=======

.. conda:recipe:: eqtlbma
   :replaces_section_title:

   Package to detect eQTLs jointly in multiple subgroups \(e.g. tissues\) via Bayesian Model Averaging.

   :homepage: https://github.com/timflutre/eqtlbma
   :license: GPLv3
   :recipe: /`eqtlbma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eqtlbma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eqtlbma/meta.yaml>`_
   :links: biotools: :biotools:`eQtlBma`

   


.. conda:package:: eqtlbma

   |downloads_eqtlbma| |docker_eqtlbma|

   :versions: 1.3.3-0, 1.3.1-3, 1.3.1-2, 1.3.1-1, 1.3.1-0
   
   :depends bioconductor-genomicranges: 
   :depends gsl: >=2.4,<2.5.0a0
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :depends r-base: 
   :depends r-mass: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eqtlbma

   and update with::

      conda update eqtlbma

   or use the docker container::

      docker pull quay.io/biocontainers/eqtlbma:<tag>

   (see `eqtlbma/tags`_ for valid values for ``<tag>``)


.. |downloads_eqtlbma| image:: https://img.shields.io/conda/dn/bioconda/eqtlbma.svg?style=flat
   :target: https://anaconda.org/bioconda/eqtlbma
   :alt:   (downloads)
.. |docker_eqtlbma| image:: https://quay.io/repository/biocontainers/eqtlbma/status
   :target: https://quay.io/repository/biocontainers/eqtlbma
.. _`eqtlbma/tags`: https://quay.io/repository/biocontainers/eqtlbma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eqtlbma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eqtlbma/README.html