:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedbreastdata'
.. highlight: bash

bioconductor-curatedbreastdata
==============================

.. conda:recipe:: bioconductor-curatedbreastdata
   :replaces_section_title:
   :noindex:

   Curated breast cancer gene expression data with survival and treatment information

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/curatedBreastData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-curatedbreastdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedbreastdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedbreastdata/meta.yaml>`_

   Curated human breast cancer tissue S4 ExpresionSet datasets from over 16 clinical trials comprising over 2\,000 patients. All datasets contain at least one type of outcomes variable and treatment information \(minimum level\: whether they had chemotherapy and whether they had hormonal therapy\). Includes code to post\-process these datasets.


.. conda:package:: bioconductor-curatedbreastdata

   |downloads_bioconductor-curatedbreastdata| |docker_bioconductor-curatedbreastdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocstyle: ``>=2.26.0,<2.27.0``
   :depends bioconductor-data-packages: ``>=20221104``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedbreastdata

   and update with::

      conda update bioconductor-curatedbreastdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedbreastdata:<tag>

   (see `bioconductor-curatedbreastdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedbreastdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedbreastdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedbreastdata
   :alt:   (downloads)
.. |docker_bioconductor-curatedbreastdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedbreastdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedbreastdata
.. _`bioconductor-curatedbreastdata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedbreastdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedbreastdata";
        var versions = ["2.26.0","2.22.0","2.22.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedbreastdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedbreastdata/README.html