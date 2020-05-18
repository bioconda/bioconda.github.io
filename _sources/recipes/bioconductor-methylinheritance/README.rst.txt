:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylinheritance'
.. highlight: bash

bioconductor-methylinheritance
==============================

.. conda:recipe:: bioconductor-methylinheritance
   :replaces_section_title:

   Permutation\-Based Analysis associating Conserved Differentially Methylated Elements Across Multiple Generations to a Treatment Effect

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/methylInheritance.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methylinheritance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylinheritance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylinheritance/meta.yaml>`_

   Permutation analysis\, based on Monte Carlo sampling\, for testing the hypothesis that the number of conserved differentially methylated elements\, between several generations\, is associated to an effect inherited from a treatment and that stochastic effect can be dismissed.


.. conda:package:: bioconductor-methylinheritance

   |downloads_bioconductor-methylinheritance| |docker_bioconductor-methylinheritance|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-1, 1.6.1-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-methylkit: >=1.14.0,<1.15.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-rebus: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylinheritance

   and update with::

      conda update bioconductor-methylinheritance

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylinheritance:<tag>

   (see `bioconductor-methylinheritance/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylinheritance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylinheritance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylinheritance
   :alt:   (downloads)
.. |docker_bioconductor-methylinheritance| image:: https://quay.io/repository/biocontainers/bioconductor-methylinheritance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylinheritance
.. _`bioconductor-methylinheritance/tags`: https://quay.io/repository/biocontainers/bioconductor-methylinheritance?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylinheritance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylinheritance/README.html