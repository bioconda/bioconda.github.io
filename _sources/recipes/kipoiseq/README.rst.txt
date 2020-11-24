:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoiseq'
.. highlight: bash

kipoiseq
========

.. conda:recipe:: kipoiseq
   :replaces_section_title:
   :noindex:

   kipoiseq\: sequence\-based data\-laoders for Kipoi

   :homepage: https://github.com/kipoi/kipoiseq
   :documentation: https://kipoi.org/kipoiseq/
   
   :license: MIT / MIT
   :recipe: /`kipoiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq/meta.yaml>`_

   kipoiseq\: sequence\-based data\-laoders for Kipoi


.. conda:package:: kipoiseq

   |downloads_kipoiseq| |docker_kipoiseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-0</code>,  <code>0.4.1-0</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.5.2-0``,  ``0.4.1-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends gffutils: 
   :depends kipoi: ``>=0.5.5``
   :depends kipoi-conda: ``>=0.1.0``
   :depends kipoi-utils: ``>=0.1.1``
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: 
   :depends python: ``>=3.6``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoiseq

   and update with::

      conda update kipoiseq

   or use the docker container::

      docker pull quay.io/biocontainers/kipoiseq:<tag>

   (see `kipoiseq/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoiseq| image:: https://img.shields.io/conda/dn/bioconda/kipoiseq.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoiseq
   :alt:   (downloads)
.. |docker_kipoiseq| image:: https://quay.io/repository/biocontainers/kipoiseq/status
   :target: https://quay.io/repository/biocontainers/kipoiseq
.. _`kipoiseq/tags`: https://quay.io/repository/biocontainers/kipoiseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoiseq/README.html