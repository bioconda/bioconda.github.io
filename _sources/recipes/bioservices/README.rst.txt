:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioservices'
.. highlight: bash

bioservices
===========

.. conda:recipe:: bioservices
   :replaces_section_title:
   :noindex:

   Access to Biological Web Services from Python

   :homepage: http://pypi.python.org/pypi/bioservices
   :license: GPLv3
   :recipe: /`bioservices <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioservices>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioservices/meta.yaml>`_

   


.. conda:package:: bioservices

   |downloads_bioservices| |docker_bioservices|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.11-0</code>,  <code>1.7.10-0</code>,  <code>1.7.9-0</code>,  <code>1.7.8-0</code>,  <code>1.7.7-1</code>,  <code>1.7.7-0</code>,  <code>1.7.6-1</code>,  <code>1.7.6-0</code>,  <code>1.7.5-0</code>,  </span></summary>
      

      ``1.7.11-0``,  ``1.7.10-0``,  ``1.7.9-0``,  ``1.7.8-0``,  ``1.7.7-1``,  ``1.7.7-0``,  ``1.7.6-1``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.17-0``,  ``1.4.16-1``,  ``1.4.10-1``,  ``1.4.7-0``,  ``1.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends beautifulsoup4: 
   :depends easydev: ``>=0.9.36``
   :depends grequests: 
   :depends numpydoc: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends requests-cache: 
   :depends suds-jurko: 
   :depends wrapt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioservices

   and update with::

      conda update bioservices

   or use the docker container::

      docker pull quay.io/biocontainers/bioservices:<tag>

   (see `bioservices/tags`_ for valid values for ``<tag>``)


.. |downloads_bioservices| image:: https://img.shields.io/conda/dn/bioconda/bioservices.svg?style=flat
   :target: https://anaconda.org/bioconda/bioservices
   :alt:   (downloads)
.. |docker_bioservices| image:: https://quay.io/repository/biocontainers/bioservices/status
   :target: https://quay.io/repository/biocontainers/bioservices
.. _`bioservices/tags`: https://quay.io/repository/biocontainers/bioservices?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioservices/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioservices/README.html