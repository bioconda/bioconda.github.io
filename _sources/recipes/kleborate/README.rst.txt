:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kleborate'
.. highlight: bash

kleborate
=========

.. conda:recipe:: kleborate
   :replaces_section_title:
   :noindex:

   Screening Klebsiella genome assemblies for MLST\, sub\-species\, and other Klebsiella related genes of interest

   :homepage: https://github.com/katholt/Kleborate
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`kleborate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate/meta.yaml>`_

   


.. conda:package:: kleborate

   |downloads_kleborate| |docker_kleborate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73,<1.78``
   :depends blast: ``>=2.2.31``
   :depends kaptive: 
   :depends mash: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kleborate

   and update with::

      conda update kleborate

   or use the docker container::

      docker pull quay.io/biocontainers/kleborate:<tag>

   (see `kleborate/tags`_ for valid values for ``<tag>``)


.. |downloads_kleborate| image:: https://img.shields.io/conda/dn/bioconda/kleborate.svg?style=flat
   :target: https://anaconda.org/bioconda/kleborate
   :alt:   (downloads)
.. |docker_kleborate| image:: https://quay.io/repository/biocontainers/kleborate/status
   :target: https://quay.io/repository/biocontainers/kleborate
.. _`kleborate/tags`: https://quay.io/repository/biocontainers/kleborate?tab=tags


.. raw:: html

    <script>
        var package = "kleborate";
        var versions = ["2.1.0","2.0.4","2.0.4","2.0.3","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kleborate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kleborate/README.html