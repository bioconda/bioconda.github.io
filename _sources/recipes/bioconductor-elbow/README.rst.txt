:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elbow'
.. highlight: bash

bioconductor-elbow
==================

.. conda:recipe:: bioconductor-elbow
   :replaces_section_title:
   :noindex:

   ELBOW \- Evaluating foLd change By the lOgit Way

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ELBOW.html
   :license: file LICENSE
   :recipe: /`bioconductor-elbow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elbow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elbow/meta.yaml>`_

   Elbow an improved fold change test that uses cluster analysis and pattern recognition to set cut off limits that are derived directly from intrareplicate variance without assuming a normal distribution for as few as 2 biological replicates. Elbow also provides the same consistency as fold testing in cross platform analysis. Elbow has lower false positive and false negative rates than standard fold testing when both are evaluated using T testing and Statistical Analysis of Microarray using 12 replicates \(six replicates each for initial and final conditions\). Elbow provides a null value based on initial condition replicates and gives error bounds for results to allow better evaluation of significance.


.. conda:package:: bioconductor-elbow

   |downloads_bioconductor-elbow| |docker_bioconductor-elbow|

   :versions:
      
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-elbow

   and update with::

      conda update bioconductor-elbow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-elbow:<tag>

   (see `bioconductor-elbow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-elbow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elbow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-elbow
   :alt:   (downloads)
.. |docker_bioconductor-elbow| image:: https://quay.io/repository/biocontainers/bioconductor-elbow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elbow
.. _`bioconductor-elbow/tags`: https://quay.io/repository/biocontainers/bioconductor-elbow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-elbow";
        var versions = ["1.26.0","1.26.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elbow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elbow/README.html