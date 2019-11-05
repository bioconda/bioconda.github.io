:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topdownrdata'
.. highlight: bash

bioconductor-topdownrdata
=========================

.. conda:recipe:: bioconductor-topdownrdata
   :replaces_section_title:

   Example data for the topdownr package generated on a Thermo Orbitrap Fusion Lumos MS device.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/topdownrdata.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-topdownrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topdownrdata/meta.yaml>`_

   


.. conda:package:: bioconductor-topdownrdata

   |downloads_bioconductor-topdownrdata| |docker_bioconductor-topdownrdata|

   :versions: 1.7.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-topdownr: >=1.8.0,<1.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topdownrdata

   and update with::

      conda update bioconductor-topdownrdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topdownrdata:<tag>

   (see `bioconductor-topdownrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topdownrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topdownrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topdownrdata
   :alt:   (downloads)
.. |docker_bioconductor-topdownrdata| image:: https://quay.io/repository/biocontainers/bioconductor-topdownrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topdownrdata
.. _`bioconductor-topdownrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-topdownrdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topdownrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topdownrdata/README.html