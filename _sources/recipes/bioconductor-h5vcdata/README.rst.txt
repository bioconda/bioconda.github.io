:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5vcdata'
.. highlight: bash

bioconductor-h5vcdata
=====================

.. conda:recipe:: bioconductor-h5vcdata
   :replaces_section_title:
   :noindex:

   Example data for the h5vc package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/h5vcData.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-h5vcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vcdata/meta.yaml>`_

   This package contains the data used in the vignettes and examples of the \'h5vc\' package


.. conda:package:: bioconductor-h5vcdata

   |downloads_bioconductor-h5vcdata| |docker_bioconductor-h5vcdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.17.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.17.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221107``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-h5vcdata

   and update with::

      conda update bioconductor-h5vcdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h5vcdata:<tag>

   (see `bioconductor-h5vcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h5vcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5vcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h5vcdata
   :alt:   (downloads)
.. |docker_bioconductor-h5vcdata| image:: https://quay.io/repository/biocontainers/bioconductor-h5vcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5vcdata
.. _`bioconductor-h5vcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-h5vcdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h5vcdata";
        var versions = ["2.18.0","2.17.0","2.14.0","2.14.0","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5vcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5vcdata/README.html