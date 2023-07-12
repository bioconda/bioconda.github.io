:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-islet'
.. highlight: bash

bioconductor-islet
==================

.. conda:recipe:: bioconductor-islet
   :replaces_section_title:
   :noindex:

   Individual\-Specific ceLl typE referencing Tool

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ISLET.html
   :license: GPL-2
   :recipe: /`bioconductor-islet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-islet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-islet/meta.yaml>`_

   ISLET is a method to conduct signal deconvolution for general \-omics data. It can estimate the individual\-specific and cell\-type\-specific reference panels\, when there are multiple samples observed from each subject. It takes the input of the observed mixture data \(feature by sample matrix\)\, and the cell type mixture proportions \(sample by cell type matrix\)\, and the sample\-to\-subject information. It can solve for the reference panel on the individual\-basis. It can also conduct test to identify cell\-type\-specific differential expression \(csDE\) genes.


.. conda:package:: bioconductor-islet

   |downloads_bioconductor-islet| |docker_bioconductor-islet|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-islet

   and update with::

      conda update bioconductor-islet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-islet:<tag>

   (see `bioconductor-islet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-islet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-islet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-islet
   :alt:   (downloads)
.. |docker_bioconductor-islet| image:: https://quay.io/repository/biocontainers/bioconductor-islet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-islet
.. _`bioconductor-islet/tags`: https://quay.io/repository/biocontainers/bioconductor-islet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-islet";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-islet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-islet/README.html