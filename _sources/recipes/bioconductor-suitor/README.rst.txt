:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-suitor'
.. highlight: bash

bioconductor-suitor
===================

.. conda:recipe:: bioconductor-suitor
   :replaces_section_title:
   :noindex:

   Selecting the number of mutational signatures through cross\-validation

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SUITOR.html
   :license: GPL-2
   :recipe: /`bioconductor-suitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suitor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suitor/meta.yaml>`_

   An unsupervised cross\-validation method to select the optimal number of mutational signatures. A data set of mutational counts is split into training and validation data.Signatures are estimated in the training data and then used to predict the mutations in the validation data.


.. conda:package:: bioconductor-suitor

   |downloads_bioconductor-suitor| |docker_bioconductor-suitor|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-suitor

   and update with::

      conda update bioconductor-suitor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-suitor:<tag>

   (see `bioconductor-suitor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-suitor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-suitor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-suitor
   :alt:   (downloads)
.. |docker_bioconductor-suitor| image:: https://quay.io/repository/biocontainers/bioconductor-suitor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-suitor
.. _`bioconductor-suitor/tags`: https://quay.io/repository/biocontainers/bioconductor-suitor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-suitor";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-suitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-suitor/README.html