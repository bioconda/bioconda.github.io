:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bindingsitefinder'
.. highlight: bash

bioconductor-bindingsitefinder
==============================

.. conda:recipe:: bioconductor-bindingsitefinder
   :replaces_section_title:
   :noindex:

   Binding site defintion based on iCLIP data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BindingSiteFinder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bindingsitefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bindingsitefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bindingsitefinder/meta.yaml>`_

   Precise knowledge on the binding sites of an RNA\-binding protein \(RBP\) is key to understand \(post\-\) transcriptional regulatory processes. Here we present a workflow that describes how exact binding sites can be defined from iCLIP data. The package provides functions for binding site definition and result visualization. For details please see the vignette.


.. conda:package:: bioconductor-bindingsitefinder

   |downloads_bioconductor-bindingsitefinder| |docker_bioconductor-bindingsitefinder|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bindingsitefinder

   and update with::

      conda update bioconductor-bindingsitefinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bindingsitefinder:<tag>

   (see `bioconductor-bindingsitefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bindingsitefinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bindingsitefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bindingsitefinder
   :alt:   (downloads)
.. |docker_bioconductor-bindingsitefinder| image:: https://quay.io/repository/biocontainers/bioconductor-bindingsitefinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bindingsitefinder
.. _`bioconductor-bindingsitefinder/tags`: https://quay.io/repository/biocontainers/bioconductor-bindingsitefinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bindingsitefinder";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bindingsitefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bindingsitefinder/README.html