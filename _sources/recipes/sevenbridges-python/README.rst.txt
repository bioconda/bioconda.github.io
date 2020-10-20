:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sevenbridges-python'
.. highlight: bash

sevenbridges-python
===================

.. conda:recipe:: sevenbridges-python
   :replaces_section_title:
   :noindex:

   SBG API python client bindings

   :homepage: https://github.com/sbg/sevenbridges-python
   :license: Apache / Apache-2.0
   :recipe: /`sevenbridges-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python/meta.yaml>`_

   sevenbridges\-python is a Python library that provides an interface for the Seven Bridges Platform the Cancer Genomics Cloud and Cavatica public APIs. It works with Python versions 2.6\+ and supports Python 3.


.. conda:package:: sevenbridges-python

   |downloads_sevenbridges-python| |docker_sevenbridges-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.29.3-0</code>,  </span></summary>
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.29.3-0``,  ``0.29.2-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.25.1-0``,  ``0.25.0-0``,  ``0.24.5-0``,  ``0.24.0-0``,  ``0.23.3-0``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.3-0``,  ``0.20.2-0``,  ``0.20.0-0``,  ``0.18.2-1``,  ``0.18.2-0``,  ``0.17.7-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.2-0``,  ``0.15.0-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :depends requests: ``>=2.20.0``
   :depends six: ``>=1.10.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sevenbridges-python

   and update with::

      conda update sevenbridges-python

   or use the docker container::

      docker pull quay.io/biocontainers/sevenbridges-python:<tag>

   (see `sevenbridges-python/tags`_ for valid values for ``<tag>``)


.. |downloads_sevenbridges-python| image:: https://img.shields.io/conda/dn/bioconda/sevenbridges-python.svg?style=flat
   :target: https://anaconda.org/bioconda/sevenbridges-python
   :alt:   (downloads)
.. |docker_sevenbridges-python| image:: https://quay.io/repository/biocontainers/sevenbridges-python/status
   :target: https://quay.io/repository/biocontainers/sevenbridges-python
.. _`sevenbridges-python/tags`: https://quay.io/repository/biocontainers/sevenbridges-python?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sevenbridges-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sevenbridges-python/README.html