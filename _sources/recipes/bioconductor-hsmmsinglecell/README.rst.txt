.. title:: Package Recipe 'bioconductor-hsmmsinglecell'
.. highlight: bash


bioconductor-hsmmsinglecell
===========================

.. conda:recipe:: bioconductor-hsmmsinglecell
   :replaces_section_title:

   Skeletal myoblasts undergo a well\-characterized sequence of morphological and transcriptional changes during differentiation. In this experiment\, primary human skeletal muscle myoblasts \(HSMM\) were expanded under high mitogen conditions \(GM\) and then differentiated by switching to low\-mitogen media \(DM\).  RNA\-Seq libraries were sequenced from each of several hundred cells taken over a time\-course of serum\-induced differentiation. Between 49 and 77 cells were captured at each of four time points \(0\, 24\, 48\, 72 hours\) following serum switch using the Fluidigm C1 microfluidic system. RNA from each cell was isolated and used to construct mRNA\-Seq libraries\, which were then sequenced to a depth of \~4 million reads per library\, resulting in a complete gene expression profile for each cell.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/HSMMSingleCell.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hsmmsinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hsmmsinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hsmmsinglecell/meta.yaml>`_

   


.. conda:package:: bioconductor-hsmmsinglecell

   |downloads_bioconductor-hsmmsinglecell| |docker_bioconductor-hsmmsinglecell|

   :versions: 1.2.0, 0.114.0, 0.112.0, 0.110.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hsmmsinglecell|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hsmmsinglecell

   and update with::

      conda update bioconductor-hsmmsinglecell

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hsmmsinglecell


.. |required_by_bioconductor-hsmmsinglecell| conda:required_by:: bioconductor-hsmmsinglecell
.. |downloads_bioconductor-hsmmsinglecell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hsmmsinglecell.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hsmmsinglecell| image:: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hsmmsinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hsmmsinglecell/README.html

