:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-target'
.. highlight: bash

bioconductor-target
===================

.. conda:recipe:: bioconductor-target
   :replaces_section_title:
   :noindex:

   Predict Combined Function of Transcription Factors

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/target.html
   :license: GPL-3
   :recipe: /`bioconductor-target <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-target>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-target/meta.yaml>`_

   Implement the BETA algorithm for infering direct target genes from DNA\-binding and perturbation expression data Wang et al. \(2013\) \<doi\: 10.1038\/nprot.2013.150\>. Extend the algorithm to predict the combined function of two DNA\-binding elements from comprable binding and expression data.


.. conda:package:: bioconductor-target

   |downloads_bioconductor-target| |docker_bioconductor-target|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrixstats: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-target

   and update with::

      conda update bioconductor-target

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-target:<tag>

   (see `bioconductor-target/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-target| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-target.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-target
   :alt:   (downloads)
.. |docker_bioconductor-target| image:: https://quay.io/repository/biocontainers/bioconductor-target/status
   :target: https://quay.io/repository/biocontainers/bioconductor-target
.. _`bioconductor-target/tags`: https://quay.io/repository/biocontainers/bioconductor-target?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-target";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-target/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-target/README.html