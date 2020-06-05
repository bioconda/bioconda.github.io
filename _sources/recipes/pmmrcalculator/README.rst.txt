:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmmrcalculator'
.. highlight: bash

pmmrcalculator
==============

.. conda:recipe:: pmmrcalculator
   :replaces_section_title:
   :noindex:

   A small python tool to calculate pairwise mismatch rate between all individuals in an EigenStrat dataset.

   :homepage: https://github.com/TCLamnidis/pMMRCalculator
   :license: GPL-3.0
   :recipe: /`pmmrcalculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmmrcalculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmmrcalculator/meta.yaml>`_

   


.. conda:package:: pmmrcalculator

   |downloads_pmmrcalculator| |docker_pmmrcalculator|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pmmrcalculator

   and update with::

      conda update pmmrcalculator

   or use the docker container::

      docker pull quay.io/biocontainers/pmmrcalculator:<tag>

   (see `pmmrcalculator/tags`_ for valid values for ``<tag>``)


.. |downloads_pmmrcalculator| image:: https://img.shields.io/conda/dn/bioconda/pmmrcalculator.svg?style=flat
   :target: https://anaconda.org/bioconda/pmmrcalculator
   :alt:   (downloads)
.. |docker_pmmrcalculator| image:: https://quay.io/repository/biocontainers/pmmrcalculator/status
   :target: https://quay.io/repository/biocontainers/pmmrcalculator
.. _`pmmrcalculator/tags`: https://quay.io/repository/biocontainers/pmmrcalculator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmmrcalculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmmrcalculator/README.html