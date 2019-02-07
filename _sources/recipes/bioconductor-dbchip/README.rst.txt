.. title:: Package Recipe 'bioconductor-dbchip'
.. highlight: bash


bioconductor-dbchip
===================

.. conda:recipe:: bioconductor-dbchip
   :replaces_section_title:

   DBChIP detects differentially bound sharp binding sites across multiple conditions\, with or without matching control samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DBChIP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dbchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dbchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dbchip/meta.yaml>`_

   


.. conda:package:: bioconductor-dbchip

   |downloads_bioconductor-dbchip| |docker_bioconductor-dbchip|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-deseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-dbchip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dbchip

   and update with::

      conda update bioconductor-dbchip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dbchip


.. |required_by_bioconductor-dbchip| conda:required_by:: bioconductor-dbchip
.. |downloads_bioconductor-dbchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dbchip.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dbchip| image:: https://quay.io/repository/biocontainers/bioconductor-dbchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dbchip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dbchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dbchip/README.html

