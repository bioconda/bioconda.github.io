:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biolib'
.. highlight: bash

biolib
======

.. conda:recipe:: biolib
   :replaces_section_title:
   :noindex:

   Package for common tasks in bioinformatics.

   :homepage: http://pypi.python.org/pypi/biolib/
   :license: GPL3 / GPL3
   :recipe: /`biolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolib/meta.yaml>`_

   


.. conda:package:: biolib

   |downloads_biolib| |docker_biolib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.5-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  <code>0.1.0-0</code>,  <code>0.0.52-0</code>,  <code>0.0.51-0</code>,  <code>0.0.46-1</code>,  </span></summary>
      

      ``0.1.5-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.46-1``,  ``0.0.46-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: ``>=0.16.0``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biolib

   and update with::

      conda update biolib

   or use the docker container::

      docker pull quay.io/biocontainers/biolib:<tag>

   (see `biolib/tags`_ for valid values for ``<tag>``)


.. |downloads_biolib| image:: https://img.shields.io/conda/dn/bioconda/biolib.svg?style=flat
   :target: https://anaconda.org/bioconda/biolib
   :alt:   (downloads)
.. |docker_biolib| image:: https://quay.io/repository/biocontainers/biolib/status
   :target: https://quay.io/repository/biocontainers/biolib
.. _`biolib/tags`: https://quay.io/repository/biocontainers/biolib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biolib/README.html