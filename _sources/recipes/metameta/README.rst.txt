:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metameta'
.. highlight: bash

metameta
========

.. conda:recipe:: metameta
   :replaces_section_title:
   :noindex:

   MetaMeta \- pipeline for integrating metagenome analysis tools to improve taxonomic profiling

   :homepage: https://github.com/pirovc/metameta/
   :license: The MIT License (MIT)
   :recipe: /`metameta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metameta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metameta/meta.yaml>`_

   


.. conda:package:: metameta

   |downloads_metameta| |docker_metameta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-4</code>,  <code>1.2.0-3</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1-2</code>,  </span></summary>
      

      ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends snakemake: ``4.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metameta

   and update with::

      conda update metameta

   or use the docker container::

      docker pull quay.io/biocontainers/metameta:<tag>

   (see `metameta/tags`_ for valid values for ``<tag>``)


.. |downloads_metameta| image:: https://img.shields.io/conda/dn/bioconda/metameta.svg?style=flat
   :target: https://anaconda.org/bioconda/metameta
   :alt:   (downloads)
.. |docker_metameta| image:: https://quay.io/repository/biocontainers/metameta/status
   :target: https://quay.io/repository/biocontainers/metameta
.. _`metameta/tags`: https://quay.io/repository/biocontainers/metameta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metameta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metameta/README.html