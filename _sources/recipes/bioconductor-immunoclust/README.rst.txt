:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunoclust'
.. highlight: bash

bioconductor-immunoclust
========================

.. conda:recipe:: bioconductor-immunoclust
   :replaces_section_title:

   Model based clustering and meta\-clustering of Flow Cytometry Data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/immunoClust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-immunoclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunoclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunoclust/meta.yaml>`_

   


.. conda:package:: bioconductor-immunoclust

   |downloads_bioconductor-immunoclust| |docker_bioconductor-immunoclust|

   :versions: 1.14.1-0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   
   :depends gsl: >=2.4,<2.5.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends openblas: >=0.3.3,<0.3.4.0a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-lattice: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-immunoclust

   and update with::

      conda update bioconductor-immunoclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-immunoclust:<tag>

   (see `bioconductor-immunoclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunoclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunoclust.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-immunoclust| image:: https://quay.io/repository/biocontainers/bioconductor-immunoclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunoclust
.. _`bioconductor-immunoclust/tags`: https://quay.io/repository/biocontainers/bioconductor-immunoclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunoclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunoclust/README.html