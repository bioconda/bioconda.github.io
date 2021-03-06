:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fuc'
.. highlight: bash

fuc
===

.. conda:recipe:: fuc
   :replaces_section_title:
   :noindex:

   Frequently used commands in bioinformatics

   :homepage: https://github.com/sbslee/fuc
   :documentation: https://sbslee-fuc.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`fuc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuc/meta.yaml>`_

   


.. conda:package:: fuc

   |downloads_fuc| |docker_fuc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends numpy: 
   :depends pandas: 
   :depends pyranges: 
   :depends pysam: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fuc

   and update with::

      conda update fuc

   or use the docker container::

      docker pull quay.io/biocontainers/fuc:<tag>

   (see `fuc/tags`_ for valid values for ``<tag>``)


.. |downloads_fuc| image:: https://img.shields.io/conda/dn/bioconda/fuc.svg?style=flat
   :target: https://anaconda.org/bioconda/fuc
   :alt:   (downloads)
.. |docker_fuc| image:: https://quay.io/repository/biocontainers/fuc/status
   :target: https://quay.io/repository/biocontainers/fuc
.. _`fuc/tags`: https://quay.io/repository/biocontainers/fuc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fuc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fuc/README.html