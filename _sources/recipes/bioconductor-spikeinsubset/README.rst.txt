:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spikeinsubset'
.. highlight: bash

bioconductor-spikeinsubset
==========================

.. conda:recipe:: bioconductor-spikeinsubset
   :replaces_section_title:
   :noindex:

   Part of Affymetrix\'s Spike\-In Experiment Data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/SpikeInSubset.html
   :license: LGPL
   :recipe: /`bioconductor-spikeinsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeinsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeinsubset/meta.yaml>`_

   Includes probe\-level and expression data for the HGU133 and HGU95 spike\-in experiments


.. conda:package:: bioconductor-spikeinsubset

   |downloads_bioconductor-spikeinsubset| |docker_bioconductor-spikeinsubset|

   :versions:
      
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spikeinsubset

   and update with::

      conda update bioconductor-spikeinsubset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spikeinsubset:<tag>

   (see `bioconductor-spikeinsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spikeinsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spikeinsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spikeinsubset
   :alt:   (downloads)
.. |docker_bioconductor-spikeinsubset| image:: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset
.. _`bioconductor-spikeinsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spikeinsubset";
        var versions = ["1.34.0","1.34.0","1.32.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spikeinsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spikeinsubset/README.html