:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homer'
.. highlight: bash

homer
=====

.. conda:recipe:: homer
   :replaces_section_title:
   :noindex:

   Software for motif discovery and next generation sequencing analysis

   :homepage: http://homer.ucsd.edu/homer/index.html
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`homer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homer/meta.yaml>`_

   


.. conda:package:: homer

   |downloads_homer| |docker_homer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.11-1</code>,  <code>4.11-0</code>,  <code>4.10-0</code>,  <code>4.9.1-6</code>,  <code>4.9.1-5</code>,  <code>4.9.1-4</code>,  <code>4.9.1-3</code>,  <code>4.9.1-2</code>,  <code>4.9.1-1</code>,  </span></summary>
      

      ``4.11-1``,  ``4.11-0``,  ``4.10-0``,  ``4.9.1-6``,  ``4.9.1-5``,  ``4.9.1-4``,  ``4.9.1-3``,  ``4.9.1-2``,  ``4.9.1-1``,  ``4.9.1-0``,  ``4.8.3-3``,  ``4.8-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install homer

   and update with::

      conda update homer

   or use the docker container::

      docker pull quay.io/biocontainers/homer:<tag>

   (see `homer/tags`_ for valid values for ``<tag>``)


.. |downloads_homer| image:: https://img.shields.io/conda/dn/bioconda/homer.svg?style=flat
   :target: https://anaconda.org/bioconda/homer
   :alt:   (downloads)
.. |docker_homer| image:: https://quay.io/repository/biocontainers/homer/status
   :target: https://quay.io/repository/biocontainers/homer
.. _`homer/tags`: https://quay.io/repository/biocontainers/homer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homer/README.html