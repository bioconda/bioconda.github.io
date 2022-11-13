:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iasva'
.. highlight: bash

bioconductor-iasva
==================

.. conda:recipe:: bioconductor-iasva
   :replaces_section_title:
   :noindex:

   Iteratively Adjusted Surrogate Variable Analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/iasva.html
   :license: GPL-2
   :recipe: /`bioconductor-iasva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iasva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iasva/meta.yaml>`_

   Iteratively Adjusted Surrogate Variable Analysis \(IA\-SVA\) is a statistical framework to uncover hidden sources of variation even when these sources are correlated. IA\-SVA provides a flexible methodology to i\) identify a hidden factor for unwanted heterogeneity while adjusting for all known factors\; ii\) test the significance of the putative hidden factor for explaining the unmodeled variation in the data\; and iii\)\, if significant\, use the estimated factor as an additional known factor in the next iteration to uncover further hidden factors.


.. conda:package:: bioconductor-iasva

   |downloads_bioconductor-iasva| |docker_bioconductor-iasva|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cluster: 
   :depends r-irlba: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iasva

   and update with::

      conda update bioconductor-iasva

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iasva:<tag>

   (see `bioconductor-iasva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iasva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iasva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iasva
   :alt:   (downloads)
.. |docker_bioconductor-iasva| image:: https://quay.io/repository/biocontainers/bioconductor-iasva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iasva
.. _`bioconductor-iasva/tags`: https://quay.io/repository/biocontainers/bioconductor-iasva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iasva";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iasva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iasva/README.html