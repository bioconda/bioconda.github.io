:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tweedeseqcountdata'
.. highlight: bash

bioconductor-tweedeseqcountdata
===============================

.. conda:recipe:: bioconductor-tweedeseqcountdata
   :replaces_section_title:
   :noindex:

   RNA\-seq count data employed in the vignette of the tweeDEseq package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/tweeDEseqCountData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tweedeseqcountdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseqcountdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseqcountdata/meta.yaml>`_

   RNA\-seq count data from Pickrell et al. \(2010\) employed to illustrate the use of the Poisson\-Tweedie family of distributions with the tweeDEseq package.


.. conda:package:: bioconductor-tweedeseqcountdata

   |downloads_bioconductor-tweedeseqcountdata| |docker_bioconductor-tweedeseqcountdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tweedeseqcountdata

   and update with::

      conda update bioconductor-tweedeseqcountdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tweedeseqcountdata:<tag>

   (see `bioconductor-tweedeseqcountdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tweedeseqcountdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tweedeseqcountdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tweedeseqcountdata
   :alt:   (downloads)
.. |docker_bioconductor-tweedeseqcountdata| image:: https://quay.io/repository/biocontainers/bioconductor-tweedeseqcountdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tweedeseqcountdata
.. _`bioconductor-tweedeseqcountdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tweedeseqcountdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tweedeseqcountdata";
        var versions = ["1.38.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tweedeseqcountdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tweedeseqcountdata/README.html