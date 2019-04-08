:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prebsdata'
.. highlight: bash

bioconductor-prebsdata
======================

.. conda:recipe:: bioconductor-prebsdata
   :replaces_section_title:

   This package contains data required to run examples in \'prebs\' package. The data files include\: 1\) Small sample bam files for demonstration purposes 2\) Probe sequence mappings for Custom CDF \(taken from http\:\/\/brainarray.mbni.med.umich.edu\/brainarray\/Database\/CustomCDF\/genomic\_curated\_CDF.asp\) 3\) Probe sequence mappings for manufacturer\'s CDF \(manually created using bowtie\)

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/prebsdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prebsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-prebsdata

   |downloads_bioconductor-prebsdata| |docker_bioconductor-prebsdata|

   :versions: 1.18.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prebsdata

   and update with::

      conda update bioconductor-prebsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prebsdata:<tag>

   (see `bioconductor-prebsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prebsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prebsdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prebsdata| image:: https://quay.io/repository/biocontainers/bioconductor-prebsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prebsdata
.. _`bioconductor-prebsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-prebsdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prebsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prebsdata/README.html