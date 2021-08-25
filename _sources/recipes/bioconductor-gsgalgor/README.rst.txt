:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsgalgor'
.. highlight: bash

bioconductor-gsgalgor
=====================

.. conda:recipe:: bioconductor-gsgalgor
   :replaces_section_title:
   :noindex:

   An Evolutionary Framework for the Identification and Study of Prognostic Gene Expression Signatures in Cancer

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GSgalgoR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gsgalgor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsgalgor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsgalgor/meta.yaml>`_

   A multi\-objective optimization algorithm for disease sub\-type discovery based on a non\-dominated sorting genetic algorithm. The \'Galgo\' framework combines the advantages of clustering algorithms for grouping heterogeneous \'omics\' data and the searching properties of genetic algorithms for feature selection. The algorithm search for the optimal number of clusters determination considering the features that maximize the survival difference between sub\-types while keeping cluster consistency high.


.. conda:package:: bioconductor-gsgalgor

   |downloads_bioconductor-gsgalgor| |docker_bioconductor-gsgalgor|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-matchingr: 
   :depends r-nsga2r: 
   :depends r-proxy: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsgalgor

   and update with::

      conda update bioconductor-gsgalgor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsgalgor:<tag>

   (see `bioconductor-gsgalgor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsgalgor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsgalgor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsgalgor
   :alt:   (downloads)
.. |docker_bioconductor-gsgalgor| image:: https://quay.io/repository/biocontainers/bioconductor-gsgalgor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsgalgor
.. _`bioconductor-gsgalgor/tags`: https://quay.io/repository/biocontainers/bioconductor-gsgalgor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsgalgor";
        var versions = ["1.2.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsgalgor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsgalgor/README.html