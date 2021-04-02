:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yacrd'
.. highlight: bash

yacrd
=====

.. conda:recipe:: yacrd
   :replaces_section_title:
   :noindex:

   Yet Another Chimeric Read Detector\, with long\-read mapper result as input.

   :homepage: https://github.com/natir/yacrd
   :license: MIT / MIT
   :recipe: /`yacrd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacrd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacrd/meta.yaml>`_

   


.. conda:package:: yacrd

   |downloads_yacrd| |docker_yacrd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-2</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4-1``,  ``0.3-1``,  ``0.2.1-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yacrd

   and update with::

      conda update yacrd

   or use the docker container::

      docker pull quay.io/biocontainers/yacrd:<tag>

   (see `yacrd/tags`_ for valid values for ``<tag>``)


.. |downloads_yacrd| image:: https://img.shields.io/conda/dn/bioconda/yacrd.svg?style=flat
   :target: https://anaconda.org/bioconda/yacrd
   :alt:   (downloads)
.. |docker_yacrd| image:: https://quay.io/repository/biocontainers/yacrd/status
   :target: https://quay.io/repository/biocontainers/yacrd
.. _`yacrd/tags`: https://quay.io/repository/biocontainers/yacrd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yacrd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yacrd/README.html