:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elector'
.. highlight: bash

elector
=======

.. conda:recipe:: elector
   :replaces_section_title:
   :noindex:

   ELECTOR EvaLuator of Error Correction Tools for lOng Reads

   :homepage: https://github.com/kamimrcht/ELECTOR
   :license: AGPL-3.0
   :recipe: /`elector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elector/meta.yaml>`_

   


.. conda:package:: elector

   |downloads_elector| |docker_elector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-2</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends minimap2: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install elector

   and update with::

      conda update elector

   or use the docker container::

      docker pull quay.io/biocontainers/elector:<tag>

   (see `elector/tags`_ for valid values for ``<tag>``)


.. |downloads_elector| image:: https://img.shields.io/conda/dn/bioconda/elector.svg?style=flat
   :target: https://anaconda.org/bioconda/elector
   :alt:   (downloads)
.. |docker_elector| image:: https://quay.io/repository/biocontainers/elector/status
   :target: https://quay.io/repository/biocontainers/elector
.. _`elector/tags`: https://quay.io/repository/biocontainers/elector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elector/README.html