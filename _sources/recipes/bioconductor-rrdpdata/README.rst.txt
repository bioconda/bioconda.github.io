:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrdpdata'
.. highlight: bash

bioconductor-rrdpdata
=====================

.. conda:recipe:: bioconductor-rrdpdata
   :replaces_section_title:

   Database used by the default RDP Classifier

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/rRDPData.html
   :license: GPL-2
   :recipe: /`bioconductor-rrdpdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdpdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdpdata/meta.yaml>`_

   


.. conda:package:: bioconductor-rrdpdata

   |downloads_bioconductor-rrdpdata| |docker_bioconductor-rrdpdata|

   :versions: 1.2.0-0
   
   :depends bioconductor-rrdp: >=1.16.0,<1.17.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrdpdata

   and update with::

      conda update bioconductor-rrdpdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrdpdata:<tag>

   (see `bioconductor-rrdpdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrdpdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrdpdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rrdpdata| image:: https://quay.io/repository/biocontainers/bioconductor-rrdpdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrdpdata
.. _`bioconductor-rrdpdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rrdpdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrdpdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrdpdata/README.html