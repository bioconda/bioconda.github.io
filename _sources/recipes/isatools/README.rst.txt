:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isatools'
.. highlight: bash

isatools
========

.. conda:recipe:: isatools
   :replaces_section_title:
   :noindex:

   Metadata tracking tools help to manage an increasingly diverse set of life science\, environmental and biomedical experiments

   :homepage: https://github.com/ISA-tools/isa-api
   :license: OTHER / CPAL
   :recipe: /`isatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isatools/meta.yaml>`_

   


.. conda:package:: isatools

   |downloads_isatools| |docker_isatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  </span></summary>
      

      ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: 
   :depends biopython: 
   :depends chardet: 
   :depends iso8601: 
   :depends jinja2: 
   :depends jsonschema: 
   :depends lxml: 
   :depends mzml2isa: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends progressbar2: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isatools

   and update with::

      conda update isatools

   or use the docker container::

      docker pull quay.io/biocontainers/isatools:<tag>

   (see `isatools/tags`_ for valid values for ``<tag>``)


.. |downloads_isatools| image:: https://img.shields.io/conda/dn/bioconda/isatools.svg?style=flat
   :target: https://anaconda.org/bioconda/isatools
   :alt:   (downloads)
.. |docker_isatools| image:: https://quay.io/repository/biocontainers/isatools/status
   :target: https://quay.io/repository/biocontainers/isatools
.. _`isatools/tags`: https://quay.io/repository/biocontainers/isatools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isatools/README.html