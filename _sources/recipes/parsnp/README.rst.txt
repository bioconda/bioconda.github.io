:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parsnp'
.. highlight: bash

parsnp
======

.. conda:recipe:: parsnp
   :replaces_section_title:
   :noindex:

   Parsnp is a command\-line\-tool for efficient microbial core genome alignment and SNP detection.

   :homepage: https://github.com/marbl/parsnp
   :license: custom; see https://raw.githubusercontent.com/marbl/parsnp/master/LICENSE
   :recipe: /`parsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp/meta.yaml>`_

   


.. conda:package:: parsnp

   |downloads_parsnp| |docker_parsnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.6-0</code>,  <code>1.5.4-1</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-1</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-4</code>,  <code>1.5.0-3</code>,  </span></summary>
      

      ``1.5.6-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends fastani: 
   :depends fasttree: 
   :depends harvesttools: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends mash: 
   :depends numpy: 
   :depends openmp: 
   :depends phipack: 
   :depends raxml: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parsnp

   and update with::

      conda update parsnp

   or use the docker container::

      docker pull quay.io/biocontainers/parsnp:<tag>

   (see `parsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_parsnp| image:: https://img.shields.io/conda/dn/bioconda/parsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/parsnp
   :alt:   (downloads)
.. |docker_parsnp| image:: https://quay.io/repository/biocontainers/parsnp/status
   :target: https://quay.io/repository/biocontainers/parsnp
.. _`parsnp/tags`: https://quay.io/repository/biocontainers/parsnp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parsnp/README.html