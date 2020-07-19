:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenometracks'
.. highlight: bash

pygenometracks
==============

.. conda:recipe:: pygenometracks
   :replaces_section_title:
   :noindex:

   Standalone program and library to plot beautiful genome browser tracks.

   :homepage: https://github.com/deeptools/pyGenomeTracks/
   :license: GPL3
   :recipe: /`pygenometracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks/meta.yaml>`_

   


.. conda:package:: pygenometracks

   |downloads_pygenometracks| |docker_pygenometracks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5-0</code>,  <code>3.4-0</code>,  <code>3.3-1</code>,  <code>3.3-0</code>,  <code>3.2.1-0</code>,  <code>3.2-0</code>,  <code>3.1.2-1</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  </span></summary>
      

      ``3.5-0``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0-0``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.0-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: ``>=0.17.0``
   :depends gffutils: ``>=0.9``
   :depends hicmatrix: ``>=13``
   :depends intervaltree: ``>=2.1.0``
   :depends libopenblas: ``<0.3.10``
   :depends matplotlib-base: ``3.1.1.*``
   :depends numpy: ``>=1.16``
   :depends pybedtools: ``>=0.8.1``
   :depends pybigwig: ``>=0.3.16``
   :depends pysam: ``>=0.14``
   :depends python: ``>=3.6``
   :depends tqdm: ``>=4.20``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygenometracks

   and update with::

      conda update pygenometracks

   or use the docker container::

      docker pull quay.io/biocontainers/pygenometracks:<tag>

   (see `pygenometracks/tags`_ for valid values for ``<tag>``)


.. |downloads_pygenometracks| image:: https://img.shields.io/conda/dn/bioconda/pygenometracks.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenometracks
   :alt:   (downloads)
.. |docker_pygenometracks| image:: https://quay.io/repository/biocontainers/pygenometracks/status
   :target: https://quay.io/repository/biocontainers/pygenometracks
.. _`pygenometracks/tags`: https://quay.io/repository/biocontainers/pygenometracks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenometracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenometracks/README.html