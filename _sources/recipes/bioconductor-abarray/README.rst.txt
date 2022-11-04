:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-abarray'
.. highlight: bash

bioconductor-abarray
====================

.. conda:recipe:: bioconductor-abarray
   :replaces_section_title:
   :noindex:

   Microarray QA and statistical data analysis for Applied Biosystems Genome Survey Microrarray \(AB1700\) gene expression data.

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ABarray.html
   :license: GPL
   :recipe: /`bioconductor-abarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abarray/meta.yaml>`_

   Automated pipline to perform gene expression analysis for Applied Biosystems Genome Survey Microarray \(AB1700\) data format. Functions include data preprocessing\, filtering\, control probe analysis\, statistical analysis in one single function. A GUI interface is also provided. The raw data\, processed data\, graphics output and statistical results are organized into folders according to the analysis settings used.


.. conda:package:: bioconductor-abarray

   |downloads_bioconductor-abarray| |docker_bioconductor-abarray|

   :versions:
      
      

      ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-multtest: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-abarray

   and update with::

      conda update bioconductor-abarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-abarray:<tag>

   (see `bioconductor-abarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-abarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-abarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-abarray
   :alt:   (downloads)
.. |docker_bioconductor-abarray| image:: https://quay.io/repository/biocontainers/bioconductor-abarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-abarray
.. _`bioconductor-abarray/tags`: https://quay.io/repository/biocontainers/bioconductor-abarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-abarray";
        var versions = ["1.66.0","1.62.0","1.60.0","1.58.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-abarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-abarray/README.html