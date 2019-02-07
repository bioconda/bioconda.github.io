.. title:: Package Recipe 'bioconductor-tissuetreg'
.. highlight: bash


bioconductor-tissuetreg
=======================

.. conda:recipe:: bioconductor-tissuetreg
   :replaces_section_title:

   The package provides ready to use epigenomes \(obtained from TWGBS\) and transcriptomes \(RNA\-seq\) from various tissues as obtained in the study \(Delacher and Imbusch 2017\, PMID\: 28783152\). Regulatory T cells \(Treg cells\) perform two distinct functions\: they maintain self\-tolerance\, and they support organ homeostasis by differentiating into specialized tissue Treg cells. The underlying dataset characterises the epigenetic and transcriptomic modifications for specialized tissue Treg cells.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/tissueTreg.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tissuetreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissuetreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissuetreg/meta.yaml>`_

   


.. conda:package:: bioconductor-tissuetreg

   |downloads_bioconductor-tissuetreg| |docker_bioconductor-tissuetreg|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tissuetreg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tissuetreg

   and update with::

      conda update bioconductor-tissuetreg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tissuetreg


.. |required_by_bioconductor-tissuetreg| conda:required_by:: bioconductor-tissuetreg
.. |downloads_bioconductor-tissuetreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tissuetreg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tissuetreg| image:: https://quay.io/repository/biocontainers/bioconductor-tissuetreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tissuetreg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tissuetreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tissuetreg/README.html

