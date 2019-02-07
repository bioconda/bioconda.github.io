.. title:: Package Recipe 'bioconductor-clonality'
.. highlight: bash


bioconductor-clonality
======================

.. conda:recipe:: bioconductor-clonality
   :replaces_section_title:

   Statistical tests for clonality versus independence of tumors from the same patient based on their LOH or genomewide copy number profiles

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Clonality.html
   :license: GPL-3
   :recipe: /`bioconductor-clonality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonality/meta.yaml>`_
   :links: biotools: :biotools:`clonality`, doi: :doi:`10.1093/bioinformatics/btr268`

   


.. conda:package:: bioconductor-clonality

   |downloads_bioconductor-clonality| |docker_bioconductor-clonality|

   :versions: 1.30.0, 1.28.0, 1.26.0, 1.24.0

   :depends: :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-clonality|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clonality

   and update with::

      conda update bioconductor-clonality

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-clonality


.. |required_by_bioconductor-clonality| conda:required_by:: bioconductor-clonality
.. |downloads_bioconductor-clonality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clonality.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clonality| image:: https://quay.io/repository/biocontainers/bioconductor-clonality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clonality







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clonality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clonality/README.html

