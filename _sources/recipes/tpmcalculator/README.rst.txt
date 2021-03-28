:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tpmcalculator'
.. highlight: bash

tpmcalculator
=============

.. conda:recipe:: tpmcalculator
   :replaces_section_title:
   :noindex:

   TPMCalculator quantifies mRNA abundance directly from the alignments by parsing BAM files.

   :homepage: https://github.com/ncbi/TPMCalculator
   :license: Public Domain
   :recipe: /`tpmcalculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpmcalculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpmcalculator/meta.yaml>`_

   


.. conda:package:: tpmcalculator

   |downloads_tpmcalculator| |docker_tpmcalculator|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tpmcalculator

   and update with::

      conda update tpmcalculator

   or use the docker container::

      docker pull quay.io/biocontainers/tpmcalculator:<tag>

   (see `tpmcalculator/tags`_ for valid values for ``<tag>``)


.. |downloads_tpmcalculator| image:: https://img.shields.io/conda/dn/bioconda/tpmcalculator.svg?style=flat
   :target: https://anaconda.org/bioconda/tpmcalculator
   :alt:   (downloads)
.. |docker_tpmcalculator| image:: https://quay.io/repository/biocontainers/tpmcalculator/status
   :target: https://quay.io/repository/biocontainers/tpmcalculator
.. _`tpmcalculator/tags`: https://quay.io/repository/biocontainers/tpmcalculator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tpmcalculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tpmcalculator/README.html