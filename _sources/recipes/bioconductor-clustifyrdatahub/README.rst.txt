:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustifyrdatahub'
.. highlight: bash

bioconductor-clustifyrdatahub
=============================

.. conda:recipe:: bioconductor-clustifyrdatahub
   :replaces_section_title:
   :noindex:

   External data sets for clustifyr in ExperimentHub

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/clustifyrdatahub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clustifyrdatahub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyrdatahub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyrdatahub/meta.yaml>`_

   References made from external single\-cell mRNA sequencing data sets\, stored as average gene expression matrices. For use with clustifyr \<https\:\/\/bioconductor.org\/packages\/clustifyr\> to assign cell type identities.


.. conda:package:: bioconductor-clustifyrdatahub

   |downloads_bioconductor-clustifyrdatahub| |docker_bioconductor-clustifyrdatahub|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clustifyrdatahub

   and update with::

      conda update bioconductor-clustifyrdatahub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustifyrdatahub:<tag>

   (see `bioconductor-clustifyrdatahub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustifyrdatahub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustifyrdatahub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustifyrdatahub
   :alt:   (downloads)
.. |docker_bioconductor-clustifyrdatahub| image:: https://quay.io/repository/biocontainers/bioconductor-clustifyrdatahub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustifyrdatahub
.. _`bioconductor-clustifyrdatahub/tags`: https://quay.io/repository/biocontainers/bioconductor-clustifyrdatahub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustifyrdatahub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustifyrdatahub/README.html