:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-core'
.. highlight: bash

nf-core
=======

.. conda:recipe:: nf-core
   :replaces_section_title:
   :noindex:

   Python package with helper tools for the nf\-core community.

   :homepage: http://nf-co.re/
   :license: MIT
   :recipe: /`nf-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-core/meta.yaml>`_

   


.. conda:package:: nf-core

   |downloads_nf-core| |docker_nf-core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14-0</code>,  <code>1.13.3-0</code>,  <code>1.13.2-0</code>,  <code>1.13.1-0</code>,  <code>1.13-0</code>,  <code>1.12.1-0</code>,  <code>1.12-0</code>,  <code>1.11-0</code>,  <code>1.10.2-0</code>,  </span></summary>
      

      ``1.14-0``,  ``1.13.3-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13-0``,  ``1.12.1-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.2-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends git: 
   :depends gitpython: 
   :depends jinja2: 
   :depends jsonschema: 
   :depends packaging: 
   :depends prompt_toolkit: ``>=3.0.3``
   :depends python: 
   :depends pyyaml: 
   :depends questionary: ``>=1.8.0``
   :depends requests: 
   :depends requests-cache: 
   :depends rich: ``>=9.8.2``
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nf-core

   and update with::

      conda update nf-core

   or use the docker container::

      docker pull quay.io/biocontainers/nf-core:<tag>

   (see `nf-core/tags`_ for valid values for ``<tag>``)


.. |downloads_nf-core| image:: https://img.shields.io/conda/dn/bioconda/nf-core.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-core
   :alt:   (downloads)
.. |docker_nf-core| image:: https://quay.io/repository/biocontainers/nf-core/status
   :target: https://quay.io/repository/biocontainers/nf-core
.. _`nf-core/tags`: https://quay.io/repository/biocontainers/nf-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-core/README.html