:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peco'
.. highlight: bash

bioconductor-peco
=================

.. conda:recipe:: bioconductor-peco
   :replaces_section_title:
   :noindex:

   A Supervised Approach for \*\*P\*\*r\*\*e\*\*dicting \*\*c\*\*ell Cycle Pr\*\*o\*\*gression using scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/peco.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-peco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peco/meta.yaml>`_

   Our approach provides a way to assign continuous cell cycle phase using scRNA\-seq data\, and consequently\, allows to identify cyclic trend of gene expression levels along the cell cycle. This package provides method and training data\, which includes scRNA\-seq data collected from 6 individual cell lines of induced pluripotent stem cells \(iPSCs\)\, and also continuous cell cycle phase derived from FUCCI fluorescence imaging data.


.. conda:package:: bioconductor-peco

   |downloads_bioconductor-peco| |docker_bioconductor-peco|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circular: 
   :depends r-conicfit: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-genlasso: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-peco

   and update with::

      conda update bioconductor-peco

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peco:<tag>

   (see `bioconductor-peco/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peco
   :alt:   (downloads)
.. |docker_bioconductor-peco| image:: https://quay.io/repository/biocontainers/bioconductor-peco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peco
.. _`bioconductor-peco/tags`: https://quay.io/repository/biocontainers/bioconductor-peco?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peco";
        var versions = ["1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peco/README.html