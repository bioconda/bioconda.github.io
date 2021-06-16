:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbknn'
.. highlight: bash

bbknn
=====

.. conda:recipe:: bbknn
   :replaces_section_title:
   :noindex:

   Batch balanced KNN

   :homepage: https://github.com/Teichlab/bbknn
   :license: MIT / MIT
   :recipe: /`bbknn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbknn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbknn/meta.yaml>`_

   


.. conda:package:: bbknn

   |downloads_bbknn| |docker_bbknn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.12-1</code>,  <code>1.3.12-0</code>,  <code>1.3.9-1</code>,  <code>1.3.9-0</code>,  <code>1.3.8-0</code>,  </span></summary>
      

      ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.12-1``,  ``1.3.12-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends numpy: ``>=1.13``
   :depends packaging: 
   :depends pandas: 
   :depends pynndescent: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-annoy: 
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-learn: 
   :depends scipy: 
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bbknn

   and update with::

      conda update bbknn

   or use the docker container::

      docker pull quay.io/biocontainers/bbknn:<tag>

   (see `bbknn/tags`_ for valid values for ``<tag>``)


.. |downloads_bbknn| image:: https://img.shields.io/conda/dn/bioconda/bbknn.svg?style=flat
   :target: https://anaconda.org/bioconda/bbknn
   :alt:   (downloads)
.. |docker_bbknn| image:: https://quay.io/repository/biocontainers/bbknn/status
   :target: https://quay.io/repository/biocontainers/bbknn
.. _`bbknn/tags`: https://quay.io/repository/biocontainers/bbknn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbknn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbknn/README.html