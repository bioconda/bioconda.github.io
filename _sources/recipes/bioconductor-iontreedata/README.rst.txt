:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iontreedata'
.. highlight: bash

bioconductor-iontreedata
========================

.. conda:recipe:: bioconductor-iontreedata
   :replaces_section_title:

   Raw MS2\, MS3 scans from direct infusion mass spectrometry \(DIMS\) and a demo ion tree database \'mzDB\' derived from the DIMS data are included. The demo database is used to show the functionalities provided by the \'iontree\' package\, not for the purpose of compound identification by any means.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/iontreeData.html
   :license: GPL-2
   :recipe: /`bioconductor-iontreedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iontreedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iontreedata/meta.yaml>`_

   


.. conda:package:: bioconductor-iontreedata

   |downloads_bioconductor-iontreedata| |docker_bioconductor-iontreedata|

   :versions: 1.18.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iontreedata

   and update with::

      conda update bioconductor-iontreedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iontreedata:<tag>

   (see `bioconductor-iontreedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iontreedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iontreedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iontreedata| image:: https://quay.io/repository/biocontainers/bioconductor-iontreedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iontreedata
.. _`bioconductor-iontreedata/tags`: https://quay.io/repository/biocontainers/bioconductor-iontreedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iontreedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iontreedata/README.html