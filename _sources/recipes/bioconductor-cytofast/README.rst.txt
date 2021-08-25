:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofast'
.. highlight: bash

bioconductor-cytofast
=====================

.. conda:recipe:: bioconductor-cytofast
   :replaces_section_title:
   :noindex:

   cytofast \- A quick visualization and analysis tool for CyTOF data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/cytofast.html
   :license: GPL-3
   :recipe: /`bioconductor-cytofast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofast/meta.yaml>`_

   Multi\-parametric flow and mass cytometry allows exceptional high\-resolution exploration of the cellular composition of the immune system. Together with tools like FlowSOM and Cytosplore it is possible to identify novel cell types. By introducing cytofast we hope to offer a workflow for visualization and quantification of cell clusters for an efficient discovery of cell populations associated with diseases or other clinical outcomes.


.. conda:package:: bioconductor-cytofast

   |downloads_bioconductor-cytofast| |docker_bioconductor-cytofast|

   :versions:
      
      

      ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowsom: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-rcolorbrewer: 
   :depends r-rdpack: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytofast

   and update with::

      conda update bioconductor-cytofast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytofast:<tag>

   (see `bioconductor-cytofast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytofast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytofast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytofast
   :alt:   (downloads)
.. |docker_bioconductor-cytofast| image:: https://quay.io/repository/biocontainers/bioconductor-cytofast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytofast
.. _`bioconductor-cytofast/tags`: https://quay.io/repository/biocontainers/bioconductor-cytofast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytofast";
        var versions = ["1.6.0","1.6.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytofast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytofast/README.html