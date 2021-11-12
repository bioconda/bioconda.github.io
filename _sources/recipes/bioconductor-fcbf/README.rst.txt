:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fcbf'
.. highlight: bash

bioconductor-fcbf
=================

.. conda:recipe:: bioconductor-fcbf
   :replaces_section_title:
   :noindex:

   Fast Correlation Based Filter for Feature Selection

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/FCBF.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fcbf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcbf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcbf/meta.yaml>`_

   This package provides a simple R implementation for the Fast Correlation Based Filter described in Yu\, L. and Liu\, H.\; Feature Selection for High\-Dimensional Data\: A Fast Correlation Based Filter Solution\,Proc. 20th Intl. Conf. Mach. Learn. \(ICML\-2003\)\, Washington DC\, 2003 The current package is an intent to make easier for bioinformaticians to use FCBF for feature selection\, especially regarding transcriptomic data.This implies discretizing expression \(function discretize\_exprs\) before calculating the features that explain the class\, but are not predictable by other features. The functions are implemented based on the algorithm of Yu and Liu\, 2003 and Rajarshi Guha\'s implementation from 13\/05\/2005 available \(as of 26\/08\/2018\) at http\:\/\/www.rguha.net\/code\/R\/fcbf.R .


.. conda:package:: bioconductor-fcbf

   |downloads_bioconductor-fcbf| |docker_bioconductor-fcbf|

   :versions:
      
      

      ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-mclust: 
   :depends r-pbapply: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fcbf

   and update with::

      conda update bioconductor-fcbf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fcbf:<tag>

   (see `bioconductor-fcbf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fcbf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fcbf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fcbf
   :alt:   (downloads)
.. |docker_bioconductor-fcbf| image:: https://quay.io/repository/biocontainers/bioconductor-fcbf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fcbf
.. _`bioconductor-fcbf/tags`: https://quay.io/repository/biocontainers/bioconductor-fcbf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fcbf";
        var versions = ["2.2.0","2.0.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fcbf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fcbf/README.html