:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saturn'
.. highlight: bash

bioconductor-saturn
===================

.. conda:recipe:: bioconductor-saturn
   :replaces_section_title:
   :noindex:

   Scalable Analysis of Differential Transcript Usage for Bulk and Single\-Cell RNA\-sequencing Applications

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/satuRn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-saturn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saturn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saturn/meta.yaml>`_

   satuRn provides a higly performant and scalable framework for performing differential transcript usage analyses. The package consists of three main functions. The first function\, fitDTU\, fits quasi\-binomial generalized linear models that model transcript usage in different groups of interest. The second function\, testDTU\, tests for differential usage of transcripts between groups of interest. Finally\, plotDTU visualizes the usage profiles of transcripts in groups of interest.


.. conda:package:: bioconductor-saturn

   |downloads_bioconductor-saturn| |docker_bioconductor-saturn|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-boot: 
   :depends r-ggplot2: 
   :depends r-locfdr: 
   :depends r-matrix: 
   :depends r-pbapply: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-saturn

   and update with::

      conda update bioconductor-saturn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-saturn:<tag>

   (see `bioconductor-saturn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-saturn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saturn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saturn
   :alt:   (downloads)
.. |docker_bioconductor-saturn| image:: https://quay.io/repository/biocontainers/bioconductor-saturn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saturn
.. _`bioconductor-saturn/tags`: https://quay.io/repository/biocontainers/bioconductor-saturn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-saturn";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saturn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saturn/README.html