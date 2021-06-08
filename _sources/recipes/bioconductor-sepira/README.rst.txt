:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sepira'
.. highlight: bash

bioconductor-sepira
===================

.. conda:recipe:: bioconductor-sepira
   :replaces_section_title:
   :noindex:

   Systems EPigenomics Inference of Regulatory Activity

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SEPIRA.html
   :license: GPL-3
   :recipe: /`bioconductor-sepira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepira/meta.yaml>`_

   SEPIRA \(Systems EPigenomics Inference of Regulatory Activity\) is an algorithm that infers sample\-specific transcription factor activity from the genome\-wide expression or DNA methylation profile of the sample.


.. conda:package:: bioconductor-sepira

   |downloads_bioconductor-sepira| |docker_bioconductor-sepira|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corpcor: ``>=1.6.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sepira

   and update with::

      conda update bioconductor-sepira

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sepira:<tag>

   (see `bioconductor-sepira/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sepira| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sepira.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sepira
   :alt:   (downloads)
.. |docker_bioconductor-sepira| image:: https://quay.io/repository/biocontainers/bioconductor-sepira/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sepira
.. _`bioconductor-sepira/tags`: https://quay.io/repository/biocontainers/bioconductor-sepira?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sepira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sepira/README.html