:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trim-galore'
.. highlight: bash

trim-galore
===========

.. conda:recipe:: trim-galore
   :replaces_section_title:
   :noindex:

   Trim Galore\! is a wrapper script to automate quality and adapter trimming as well as quality control

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/trim_galore/
   :developer docs: https://github.com/FelixKrueger/TrimGalore
   :license: GPL / GPL
   :recipe: /`trim-galore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim-galore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim-galore/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`trim_galore`

   


.. conda:package:: trim-galore

   |downloads_trim-galore| |docker_trim-galore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.7-0</code>,  <code>0.6.6-1</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.5-2``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends cutadapt: 
   :depends fastqc: 
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trim-galore

   and update with::

      conda update trim-galore

   or use the docker container::

      docker pull quay.io/biocontainers/trim-galore:<tag>

   (see `trim-galore/tags`_ for valid values for ``<tag>``)


.. |downloads_trim-galore| image:: https://img.shields.io/conda/dn/bioconda/trim-galore.svg?style=flat
   :target: https://anaconda.org/bioconda/trim-galore
   :alt:   (downloads)
.. |docker_trim-galore| image:: https://quay.io/repository/biocontainers/trim-galore/status
   :target: https://quay.io/repository/biocontainers/trim-galore
.. _`trim-galore/tags`: https://quay.io/repository/biocontainers/trim-galore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trim-galore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trim-galore/README.html