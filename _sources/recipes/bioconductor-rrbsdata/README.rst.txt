:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrbsdata'
.. highlight: bash

bioconductor-rrbsdata
=====================

.. conda:recipe:: bioconductor-rrbsdata
   :replaces_section_title:

   RRBS data set comprising 12 samples with simulated differentially methylated regions \(DMRs\).

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/RRBSdata.html
   :license: LGPL-3
   :recipe: /`bioconductor-rrbsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrbsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrbsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-rrbsdata

   |downloads_bioconductor-rrbsdata| |docker_bioconductor-rrbsdata|

   :versions: 1.2.0-0
   
   :depends bioconductor-biseq: >=1.22.0,<1.23.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrbsdata

   and update with::

      conda update bioconductor-rrbsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrbsdata:<tag>

   (see `bioconductor-rrbsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrbsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrbsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrbsdata
   :alt:   (downloads)
.. |docker_bioconductor-rrbsdata| image:: https://quay.io/repository/biocontainers/bioconductor-rrbsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrbsdata
.. _`bioconductor-rrbsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rrbsdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrbsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrbsdata/README.html