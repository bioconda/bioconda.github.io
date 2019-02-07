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

   :versions: 1.3.3, 1.3.1

   :depends: :conda:package:`bioconductor-genomicranges`  :conda:package:`gsl` >=2.4,<2.5.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`r-base`  :conda:package:`r-mass`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_eqtlbma|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eqtlbma

   and update with::

      conda update eqtlbma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eqtlbma


.. |required_by_eqtlbma| conda:required_by:: eqtlbma
.. |downloads_eqtlbma| image:: https://img.shields.io/conda/dn/bioconda/eqtlbma.svg?style=flat
   :alt:   (downloads)
.. |docker_eqtlbma| image:: https://quay.io/repository/biocontainers/eqtlbma/status
   :target: https://quay.io/repository/biocontainers/eqtlbma







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eqtlbma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eqtlbma/README.html

