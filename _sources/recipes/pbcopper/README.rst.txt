:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcopper'
.. highlight: bash

pbcopper
========

.. conda:recipe:: pbcopper
   :replaces_section_title:
   :noindex:

   Core C\+\+ library for data structures\, algorithms\, and utilities

   :homepage: https://github.com/PacificBiosciences/pbcopper
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcopper/meta.yaml>`_

   


.. conda:package:: pbcopper

   |downloads_pbcopper| |docker_pbcopper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-2</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbcopper

   and update with::

      conda update pbcopper

   or use the docker container::

      docker pull quay.io/biocontainers/pbcopper:<tag>

   (see `pbcopper/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcopper| image:: https://img.shields.io/conda/dn/bioconda/pbcopper.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcopper
   :alt:   (downloads)
.. |docker_pbcopper| image:: https://quay.io/repository/biocontainers/pbcopper/status
   :target: https://quay.io/repository/biocontainers/pbcopper
.. _`pbcopper/tags`: https://quay.io/repository/biocontainers/pbcopper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcopper/README.html