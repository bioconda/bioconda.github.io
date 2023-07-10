:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tissuetreg'
.. highlight: bash

bioconductor-tissuetreg
=======================

.. conda:recipe:: bioconductor-tissuetreg
   :replaces_section_title:
   :noindex:

   TWGBS and RNA\-seq data from tissue T regulatory cells from mice

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/tissueTreg.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tissuetreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissuetreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissuetreg/meta.yaml>`_

   The package provides ready to use epigenomes \(obtained from TWGBS\) and transcriptomes \(RNA\-seq\) from various tissues as obtained in the study \(Delacher and Imbusch 2017\, PMID\: 28783152\). Regulatory T cells \(Treg cells\) perform two distinct functions\: they maintain self\-tolerance\, and they support organ homeostasis by differentiating into specialized tissue Treg cells. The underlying dataset characterises the epigenetic and transcriptomic modifications for specialized tissue Treg cells.


.. conda:package:: bioconductor-tissuetreg

   |downloads_bioconductor-tissuetreg| |docker_bioconductor-tissuetreg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tissuetreg

   and update with::

      conda update bioconductor-tissuetreg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tissuetreg:<tag>

   (see `bioconductor-tissuetreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tissuetreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tissuetreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tissuetreg
   :alt:   (downloads)
.. |docker_bioconductor-tissuetreg| image:: https://quay.io/repository/biocontainers/bioconductor-tissuetreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tissuetreg
.. _`bioconductor-tissuetreg/tags`: https://quay.io/repository/biocontainers/bioconductor-tissuetreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tissuetreg";
        var versions = ["1.20.0","1.17.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tissuetreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tissuetreg/README.html