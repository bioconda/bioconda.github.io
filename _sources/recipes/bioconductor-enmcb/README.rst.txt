:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enmcb'
.. highlight: bash

bioconductor-enmcb
==================

.. conda:recipe:: bioconductor-enmcb
   :replaces_section_title:
   :noindex:

   Predicting Disease Progression Based on Methylation Correlated Blocks using Ensemble Models

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/EnMCB.html
   :license: GPL-2
   :recipe: /`bioconductor-enmcb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmcb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmcb/meta.yaml>`_

   Creation of the correlated blocks using DNA methylation profiles. A stacked ensemble of machine learning models\, which combined the cox\, support vector machine and elastic\-net regression model\, can be constructed to predict disease progression.


.. conda:package:: bioconductor-enmcb

   |downloads_bioconductor-enmcb| |docker_bioconductor-enmcb|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-minfi: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-boot: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-mboost: 
   :depends r-rms: 
   :depends r-survival: 
   :depends r-survivalroc: 
   :depends r-survivalsvm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enmcb

   and update with::

      conda update bioconductor-enmcb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enmcb:<tag>

   (see `bioconductor-enmcb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enmcb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enmcb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enmcb
   :alt:   (downloads)
.. |docker_bioconductor-enmcb| image:: https://quay.io/repository/biocontainers/bioconductor-enmcb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enmcb
.. _`bioconductor-enmcb/tags`: https://quay.io/repository/biocontainers/bioconductor-enmcb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enmcb";
        var versions = ["1.6.0","1.4.0","1.2.2","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enmcb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enmcb/README.html