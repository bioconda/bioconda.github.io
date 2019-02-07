.. title:: Package Recipe 'bioconductor-spikeinsubset'
.. highlight: bash


bioconductor-spikeinsubset
==========================

.. conda:recipe:: bioconductor-spikeinsubset
   :replaces_section_title:

   Includes probe\-level and expression data for the HGU133 and HGU95 spike\-in experiments

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/SpikeInSubset.html
   :license: LGPL
   :recipe: /`bioconductor-spikeinsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeinsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeinsubset/meta.yaml>`_

   


.. conda:package:: bioconductor-spikeinsubset

   |downloads_bioconductor-spikeinsubset| |docker_bioconductor-spikeinsubset|

   :versions: 1.22.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-spikeinsubset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spikeinsubset

   and update with::

      conda update bioconductor-spikeinsubset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-spikeinsubset


.. |required_by_bioconductor-spikeinsubset| conda:required_by:: bioconductor-spikeinsubset
.. |downloads_bioconductor-spikeinsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spikeinsubset.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-spikeinsubset| image:: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spikeinsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spikeinsubset/README.html

