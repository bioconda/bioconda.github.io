.. title:: Package Recipe 'bioconductor-affycontam'
.. highlight: bash


bioconductor-affycontam
=======================

.. conda:recipe:: bioconductor-affycontam
   :replaces_section_title:

   structured corruption of cel file data to demonstrate QA effectiveness

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affyContam.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-affycontam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycontam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycontam/meta.yaml>`_
   :links: biotools: :biotools:`affycontam`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-affycontam

   |downloads_bioconductor-affycontam| |docker_bioconductor-affycontam|

   :versions: 1.40.0, 1.38.0, 1.36.0, 1.34.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affydata` >=1.30.0,<1.31.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-affycontam|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affycontam

   and update with::

      conda update bioconductor-affycontam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affycontam


.. |required_by_bioconductor-affycontam| conda:required_by:: bioconductor-affycontam
.. |downloads_bioconductor-affycontam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycontam.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affycontam| image:: https://quay.io/repository/biocontainers/bioconductor-affycontam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycontam







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycontam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycontam/README.html

