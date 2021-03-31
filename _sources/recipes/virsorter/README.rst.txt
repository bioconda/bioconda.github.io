:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virsorter'
.. highlight: bash

virsorter
=========

.. conda:recipe:: virsorter
   :replaces_section_title:
   :noindex:

   VirSorter2 \-\-  A multi\-classifier\, expert\-guided approach to detect diverse DNA and RNA virus genomes

   :homepage: https://github.com/jiarong/VirSorter2
   :developer docs: https://github.com/jiarong/VirSorter2/virsorter
   :license: GPL / GPL-2.0
   :recipe: /`virsorter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virsorter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virsorter/meta.yaml>`_

   


.. conda:package:: virsorter

   |downloads_virsorter| |docker_virsorter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>2.0.beta-1</code>,  <code>2.0.beta-0</code>,  <code>2.0.alpha-2</code>,  <code>2.0.alpha-1</code>,  <code>2.0.alpha-0</code>,  <code>1.0.6-1</code>,  </span></summary>
      

      ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``2.0.beta-1``,  ``2.0.beta-0``,  ``2.0.alpha-2``,  ``2.0.alpha-1``,  ``2.0.alpha-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=7``
   :depends cookiecutter: 
   :depends git: 
   :depends mamba: 
   :depends python: ``>=3.6``
   :depends ruamel.yaml: ``0.16.*``
   :depends snakemake-minimal: ``>=5.18,<=5.26``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virsorter

   and update with::

      conda update virsorter

   or use the docker container::

      docker pull quay.io/biocontainers/virsorter:<tag>

   (see `virsorter/tags`_ for valid values for ``<tag>``)


.. |downloads_virsorter| image:: https://img.shields.io/conda/dn/bioconda/virsorter.svg?style=flat
   :target: https://anaconda.org/bioconda/virsorter
   :alt:   (downloads)
.. |docker_virsorter| image:: https://quay.io/repository/biocontainers/virsorter/status
   :target: https://quay.io/repository/biocontainers/virsorter
.. _`virsorter/tags`: https://quay.io/repository/biocontainers/virsorter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virsorter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virsorter/README.html