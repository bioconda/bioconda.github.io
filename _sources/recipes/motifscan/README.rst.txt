:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motifscan'
.. highlight: bash

motifscan
=========

.. conda:recipe:: motifscan
   :replaces_section_title:
   :noindex:

   A package for motif discovery and motif enrichment analysis

   :homepage: https://github.com/shao-lab/MotifScan
   :license: BSD / BSD License
   :recipe: /`motifscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifscan/meta.yaml>`_

   


.. conda:package:: motifscan

   |downloads_motifscan| |docker_motifscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-3</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3.0.0``
   :depends numpy: ``>=1.15``
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
   :depends scipy: ``>=1.0``
   :depends tqdm: ``>=4.42.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install motifscan

   and update with::

      conda update motifscan

   or use the docker container::

      docker pull quay.io/biocontainers/motifscan:<tag>

   (see `motifscan/tags`_ for valid values for ``<tag>``)


.. |downloads_motifscan| image:: https://img.shields.io/conda/dn/bioconda/motifscan.svg?style=flat
   :target: https://anaconda.org/bioconda/motifscan
   :alt:   (downloads)
.. |docker_motifscan| image:: https://quay.io/repository/biocontainers/motifscan/status
   :target: https://quay.io/repository/biocontainers/motifscan
.. _`motifscan/tags`: https://quay.io/repository/biocontainers/motifscan?tab=tags


.. raw:: html

    <script>
        var package = "motifscan";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motifscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motifscan/README.html