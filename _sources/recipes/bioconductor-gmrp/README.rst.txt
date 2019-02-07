.. title:: Package Recipe 'bioconductor-gmrp'
.. highlight: bash


bioconductor-gmrp
=================

.. conda:recipe:: bioconductor-gmrp
   :replaces_section_title:

   Perform Mendelian randomization analysis of multiple SNPs to determine risk factors causing disease of study and to exclude confounding variabels and perform path analysis to construct path of risk factors to the disease.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GMRP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gmrp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmrp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmrp/meta.yaml>`_
   :links: biotools: :biotools:`gmrp`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-gmrp

   |downloads_bioconductor-gmrp| |docker_bioconductor-gmrp|

   :versions: 1.10.1, 1.8.1, 1.5.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-diagram`  :conda:package:`r-plotrix`  

   :required~by: |required_by_bioconductor-gmrp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gmrp

   and update with::

      conda update bioconductor-gmrp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gmrp


.. |required_by_bioconductor-gmrp| conda:required_by:: bioconductor-gmrp
.. |downloads_bioconductor-gmrp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmrp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gmrp| image:: https://quay.io/repository/biocontainers/bioconductor-gmrp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmrp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmrp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmrp/README.html

