:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancermainz'
.. highlight: bash

bioconductor-breastcancermainz
==============================

.. conda:recipe:: bioconductor-breastcancermainz
   :replaces_section_title:

   Gene expression data from the breast cancer study published by Schmidt et al. in 2008\, provided as an eSet.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/breastCancerMAINZ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancermainz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancermainz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancermainz/meta.yaml>`_

   


.. conda:package:: bioconductor-breastcancermainz

   |downloads_bioconductor-breastcancermainz| |docker_bioconductor-breastcancermainz|

   :versions: 1.20.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancermainz

   and update with::

      conda update bioconductor-breastcancermainz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancermainz:<tag>

   (see `bioconductor-breastcancermainz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancermainz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancermainz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-breastcancermainz| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancermainz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancermainz
.. _`bioconductor-breastcancermainz/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancermainz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancermainz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancermainz/README.html