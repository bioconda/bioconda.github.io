:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdcytodata'
.. highlight: bash

bioconductor-hdcytodata
=======================

.. conda:recipe:: bioconductor-hdcytodata
   :replaces_section_title:
   :noindex:

   Collection of high\-dimensional cytometry benchmark datasets in Bioconductor object formats

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/HDCytoData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hdcytodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdcytodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdcytodata/meta.yaml>`_

   Data package containing a set of publicly available high\-dimensional cytometry benchmark datasets\, formatted into SummarizedExperiment and flowSet Bioconductor object formats\, including all required metadata. Row metadata includes sample IDs\, group IDs\, patient IDs\, reference cell population or cluster labels \(where available\)\, and labels identifying \'spiked in\' cells \(where available\). Column metadata includes channel names\, protein marker names\, and protein marker classes \(cell type or cell state\).


.. conda:package:: bioconductor-hdcytodata

   |downloads_bioconductor-hdcytodata| |docker_bioconductor-hdcytodata|

   :versions:
      
      

      ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hdcytodata

   and update with::

      conda update bioconductor-hdcytodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdcytodata:<tag>

   (see `bioconductor-hdcytodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdcytodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdcytodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdcytodata
   :alt:   (downloads)
.. |docker_bioconductor-hdcytodata| image:: https://quay.io/repository/biocontainers/bioconductor-hdcytodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdcytodata
.. _`bioconductor-hdcytodata/tags`: https://quay.io/repository/biocontainers/bioconductor-hdcytodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdcytodata";
        var versions = ["1.14.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdcytodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdcytodata/README.html