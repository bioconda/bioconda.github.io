.. title:: Package Recipe 'gvcftools'
.. highlight: bash


gvcftools
=========

.. conda:recipe:: gvcftools
   :replaces_section_title:

   a set of utilities to help create and analyze Genome VCF \(gVCF\) files.

   :homepage: https://sites.google.com/site/gvcftools/home
   :license: MIT
   :recipe: /`gvcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcftools/meta.yaml>`_

   


.. conda:package:: gvcftools

   |downloads_gvcftools| |docker_gvcftools|

   :versions: 0.17.0

   :depends: :conda:package:`boost` 1.60* :conda:package:`perl` 5.22.0* :conda:package:`zlib`  

   :required~by: |required_by_gvcftools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gvcftools

   and update with::

      conda update gvcftools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gvcftools


.. |required_by_gvcftools| conda:required_by:: gvcftools
.. |downloads_gvcftools| image:: https://img.shields.io/conda/dn/bioconda/gvcftools.svg?style=flat
   :alt:   (downloads)
.. |docker_gvcftools| image:: https://quay.io/repository/biocontainers/gvcftools/status
   :target: https://quay.io/repository/biocontainers/gvcftools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcftools/README.html

