:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich.mmusculus.background'
.. highlight: bash

bioconductor-pwmenrich.mmusculus.background
===========================================

.. conda:recipe:: bioconductor-pwmenrich.mmusculus.background
   :replaces_section_title:
   :noindex:

   M. musculus background for PWMEnrich

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/PWMEnrich.Mmusculus.background.html
   :license: GPL-3
   :recipe: /`bioconductor-pwmenrich.mmusculus.background <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.mmusculus.background>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.mmusculus.background/meta.yaml>`_

   PWMEnrich pre\-compiled background objects for M.musculus \(mouse\) and MotifDb M. musculus motifs.


.. conda:package:: bioconductor-pwmenrich.mmusculus.background

   |downloads_bioconductor-pwmenrich.mmusculus.background| |docker_bioconductor-pwmenrich.mmusculus.background|

   :versions:
      
      

      ``4.26.1-0``,  ``4.24.0-1``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.18.0-1``,  ``4.16.0-0``

      

   
   :depends bioconductor-pwmenrich: ``>=4.28.0,<4.29.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pwmenrich.mmusculus.background

   and update with::

      conda update bioconductor-pwmenrich.mmusculus.background

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwmenrich.mmusculus.background:<tag>

   (see `bioconductor-pwmenrich.mmusculus.background/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwmenrich.mmusculus.background| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.mmusculus.background.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich.mmusculus.background
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich.mmusculus.background| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background
.. _`bioconductor-pwmenrich.mmusculus.background/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich.mmusculus.background";
        var versions = ["4.26.1","4.24.0","4.24.0","4.22.0","4.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich.mmusculus.background/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich.mmusculus.background/README.html