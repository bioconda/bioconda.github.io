:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'andi'
.. highlight: bash

andi
====

.. conda:recipe:: andi
   :replaces_section_title:
   :noindex:

   Efficient Estimation of Evolutionary Distances

   :homepage: https://github.com/evolbioinf/andi/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`andi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/andi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/andi/meta.yaml>`_
   :links: biotools: :biotools:`andi`, doi: :doi:`10.1093/bioinformatics/btu815`

   


.. conda:package:: andi

   |downloads_andi| |docker_andi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13-3</code>,  <code>0.13-2</code>,  <code>0.13-1</code>,  <code>0.13-0</code>,  <code>0.12-4</code>,  <code>0.12-3</code>,  <code>0.12-0</code>,  <code>0.11-1</code>,  <code>0.11-0</code>,  </span></summary>
      

      ``0.13-3``,  ``0.13-2``,  ``0.13-1``,  ``0.13-0``,  ``0.12-4``,  ``0.12-3``,  ``0.12-0``,  ``0.11-1``,  ``0.11-0``,  ``0.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libdivsufsort: 
   :depends openblas: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install andi

   and update with::

      conda update andi

   or use the docker container::

      docker pull quay.io/biocontainers/andi:<tag>

   (see `andi/tags`_ for valid values for ``<tag>``)


.. |downloads_andi| image:: https://img.shields.io/conda/dn/bioconda/andi.svg?style=flat
   :target: https://anaconda.org/bioconda/andi
   :alt:   (downloads)
.. |docker_andi| image:: https://quay.io/repository/biocontainers/andi/status
   :target: https://quay.io/repository/biocontainers/andi
.. _`andi/tags`: https://quay.io/repository/biocontainers/andi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/andi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/andi/README.html