:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzml2isa'
.. highlight: bash

mzml2isa
========

.. conda:recipe:: mzml2isa
   :replaces_section_title:
   :noindex:

   mzml2isa \- mzML to ISA\-tab parsing tool

   :homepage: https://github.com/ISA-tools/mzml2isa
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`mzml2isa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa/meta.yaml>`_

   


.. conda:package:: mzml2isa

   |downloads_mzml2isa| |docker_mzml2isa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.4.24-2</code>,  <code>0.4.24-1</code>,  </span></summary>
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.24-2``,  ``0.4.24-1``,  ``0.4.24-0``

      
      .. raw:: html

         </details>
      

   
   :depends cached-property: 
   :depends fs: 
   :depends lxml: 
   :depends openpyxl: 
   :depends pronto: ``>=0.10.0,<1``
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mzml2isa

   and update with::

      conda update mzml2isa

   or use the docker container::

      docker pull quay.io/biocontainers/mzml2isa:<tag>

   (see `mzml2isa/tags`_ for valid values for ``<tag>``)


.. |downloads_mzml2isa| image:: https://img.shields.io/conda/dn/bioconda/mzml2isa.svg?style=flat
   :target: https://anaconda.org/bioconda/mzml2isa
   :alt:   (downloads)
.. |docker_mzml2isa| image:: https://quay.io/repository/biocontainers/mzml2isa/status
   :target: https://quay.io/repository/biocontainers/mzml2isa
.. _`mzml2isa/tags`: https://quay.io/repository/biocontainers/mzml2isa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzml2isa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzml2isa/README.html