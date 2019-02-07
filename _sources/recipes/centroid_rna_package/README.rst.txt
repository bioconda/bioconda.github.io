.. title:: Package Recipe 'centroid_rna_package'
.. highlight: bash


centroid_rna_package
====================

.. conda:recipe:: centroid_rna_package
   :replaces_section_title:

   Colection of RNA secondary structure prediction programs based on gamma\-centroid estimator \(Hamada et. al. 2009\)

   :homepage: https://github.com/satoken/centroid-rna-package
   :license: GPL-V2
   :recipe: /`centroid_rna_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centroid_rna_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centroid_rna_package/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btn601`, doi: :doi:`10.1093/bioinformatics/btp228`, doi: :doi:`10.1093/nar/gkq792`

   


.. conda:package:: centroid_rna_package

   |downloads_centroid_rna_package| |docker_centroid_rna_package|

   :versions: 0.0.15

   :depends: :conda:package:`viennarna` >=1.8 

   :required~by: |required_by_centroid_rna_package|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install centroid_rna_package

   and update with::

      conda update centroid_rna_package

   or use the docker container::

      docker pull quay.io/repository/biocontainers/centroid_rna_package


.. |required_by_centroid_rna_package| conda:required_by:: centroid_rna_package
.. |downloads_centroid_rna_package| image:: https://img.shields.io/conda/dn/bioconda/centroid_rna_package.svg?style=flat
   :alt:   (downloads)
.. |docker_centroid_rna_package| image:: https://quay.io/repository/biocontainers/centroid_rna_package/status
   :target: https://quay.io/repository/biocontainers/centroid_rna_package







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centroid_rna_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centroid_rna_package/README.html

