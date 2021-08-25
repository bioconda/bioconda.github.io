:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisetadhub'
.. highlight: bash

bioconductor-precisetadhub
==========================

.. conda:recipe:: bioconductor-precisetadhub
   :replaces_section_title:
   :noindex:

   Pre\-trained random forest models obtained using preciseTAD

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/preciseTADhub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-precisetadhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetadhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetadhub/meta.yaml>`_

   An experimentdata package to supplement the preciseTAD package containing pre\-trained models and the variable importances of each genomic annotation used to build the model parsed into list objects and available in ExperimentHub. In total\, preciseTADhub provides access to n\=84 random forest classification models optimized to predict TAD\/chromatin loop boundary regions and stored as .RDS files. The value\, n\, comes from the fact that we considered l\=2 cell lines \{GM12878\, K562\}\, g\=2 ground truth boundaries \{Arrowhead\, Peakachu\}\, and c\=21 autosomal chromosomes \{CHR1\, CHR2\, ...\, CHR22\} \(omitting CHR9\). Furthermore\, each object is itself a two\-item list containing\: \(1\) the model object\, and \(2\) the variable importances for CTCF\, RAD21\, SMC3\, and ZNF143 used to predict boundary regions. Each model is trained via a \"holdout\" strategy\, in which data from chromosomes \{CHR1\, CHR2\, ...\, CHRi\-1\, CHRi\+1\, ...\, CHR22\} were used to build the model and the ith chromosome was reserved for testing. See https\:\/\/doi.org\/10.1101\/2020.09.03.282186 for more detail on the model building strategy.


.. conda:package:: bioconductor-precisetadhub

   |downloads_bioconductor-precisetadhub| |docker_bioconductor-precisetadhub|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-precisetadhub

   and update with::

      conda update bioconductor-precisetadhub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-precisetadhub:<tag>

   (see `bioconductor-precisetadhub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-precisetadhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisetadhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisetadhub
   :alt:   (downloads)
.. |docker_bioconductor-precisetadhub| image:: https://quay.io/repository/biocontainers/bioconductor-precisetadhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisetadhub
.. _`bioconductor-precisetadhub/tags`: https://quay.io/repository/biocontainers/bioconductor-precisetadhub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-precisetadhub";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisetadhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisetadhub/README.html