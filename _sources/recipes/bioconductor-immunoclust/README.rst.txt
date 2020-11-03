:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunoclust'
.. highlight: bash

bioconductor-immunoclust
========================

.. conda:recipe:: bioconductor-immunoclust
   :replaces_section_title:
   :noindex:

   immunoClust \- Automated Pipeline for Population Detection in Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/immunoClust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-immunoclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunoclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunoclust/meta.yaml>`_

   immunoClust is a model based clustering approach for Flow Cytometry samples. The cell\-events of single Flow Cytometry samples are modelled by a mixture of multinominal normal\- or t\-distributions. The cell\-event clusters of several samples are modelled by a mixture of multinominal normal\-distributions aiming stable co\-clusters across these samples.


.. conda:package:: bioconductor-immunoclust

   |downloads_bioconductor-immunoclust| |docker_bioconductor-immunoclust|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``

      

   
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-immunoclust

   and update with::

      conda update bioconductor-immunoclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunoclust:<tag>

   (see `bioconductor-immunoclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunoclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunoclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunoclust
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