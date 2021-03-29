:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobambam'
.. highlight: bash

biobambam
=========

.. conda:recipe:: biobambam
   :replaces_section_title:
   :noindex:

   Tools for early stage alignment file processing

   :homepage: https://gitlab.com/german.tischler/biobambam2
   :license: GPLv3
   :recipe: /`biobambam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobambam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobambam/meta.yaml>`_

   


.. conda:package:: biobambam

   |downloads_biobambam| |docker_biobambam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.180-0</code>,  <code>2.0.179-1</code>,  <code>2.0.179-0</code>,  <code>2.0.87-2</code>,  <code>2.0.87-1</code>,  <code>2.0.87-0</code>,  <code>2.0.79-0</code>,  <code>2.0.78-0</code>,  <code>2.0.72-0</code>,  </span></summary>
      

      ``2.0.180-0``,  ``2.0.179-1``,  ``2.0.179-0``,  ``2.0.87-2``,  ``2.0.87-1``,  ``2.0.87-0``,  ``2.0.79-0``,  ``2.0.78-0``,  ``2.0.72-0``,  ``2.0.62-0``,  ``2.0.58-0``,  ``2.0.57-0``,  ``2.0.44-0``,  ``2.0.42-0``,  ``2.0.39-0``,  ``2.0.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libmaus2: ``>=2.0.774``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobambam

   and update with::

      conda update biobambam

   or use the docker container::

      docker pull quay.io/biocontainers/biobambam:<tag>

   (see `biobambam/tags`_ for valid values for ``<tag>``)


.. |downloads_biobambam| image:: https://img.shields.io/conda/dn/bioconda/biobambam.svg?style=flat
   :target: https://anaconda.org/bioconda/biobambam
   :alt:   (downloads)
.. |docker_biobambam| image:: https://quay.io/repository/biocontainers/biobambam/status
   :target: https://quay.io/repository/biocontainers/biobambam
.. _`biobambam/tags`: https://quay.io/repository/biocontainers/biobambam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobambam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobambam/README.html