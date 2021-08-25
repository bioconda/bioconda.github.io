:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-emtdata'
.. highlight: bash

bioconductor-emtdata
====================

.. conda:recipe:: bioconductor-emtdata
   :replaces_section_title:
   :noindex:

   An ExperimentHub Package for data sets with an Epithelial to Mesenchymal Transition \(EMT\)

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/emtdata.html
   :license: GPL-3
   :recipe: /`bioconductor-emtdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emtdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emtdata/meta.yaml>`_

   This package provides pre\-processed RNA\-seq data where the epithelial to mesenchymal transition was induced on cell lines. These data come from three publications Cursons et al. \(2015\)\, Cursons etl al. \(2018\) and Foroutan et al. \(2017\). In each of these publications\, EMT was induces across multiple cell lines following treatment by TGFb among other stimulants. This data will be useful in determining the regulatory programs modified in order to achieve an EMT. Data were processed by the Davis laboratory in the Bioinformatics division at WEHI.


.. conda:package:: bioconductor-emtdata

   |downloads_bioconductor-emtdata| |docker_bioconductor-emtdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-emtdata

   and update with::

      conda update bioconductor-emtdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-emtdata:<tag>

   (see `bioconductor-emtdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-emtdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-emtdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-emtdata
   :alt:   (downloads)
.. |docker_bioconductor-emtdata| image:: https://quay.io/repository/biocontainers/bioconductor-emtdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-emtdata
.. _`bioconductor-emtdata/tags`: https://quay.io/repository/biocontainers/bioconductor-emtdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-emtdata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-emtdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-emtdata/README.html