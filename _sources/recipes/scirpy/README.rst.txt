:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scirpy'
.. highlight: bash

scirpy
======

.. conda:recipe:: scirpy
   :replaces_section_title:
   :noindex:

   A Scanpy extension for analyzing single\-cell T\-cell receptor sequencing data.

   :homepage: https://icbi-lab.github.io/scirpy
   :developer docs: https://github.com/icbi-lab/scirpy
   :license: BSD / BSD-3
   :recipe: /`scirpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scirpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scirpy/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.04.10.035865`

   


.. conda:package:: scirpy

   |downloads_scirpy| |docker_scirpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends airr: ``>=1.2``
   :depends anndata: ``>=0.7.6``
   :depends networkx: ``>=2.5``
   :depends numba: ``>=0.41.0``
   :depends numpy: 
   :depends pandas: ``>=1.0``
   :depends parasail-python: 
   :depends python: ``>=3.7``
   :depends python-igraph: 
   :depends python-levenshtein: 
   :depends scanpy: ``>=1.6.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends squarify: 
   :depends tqdm: ``>=4.44.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scirpy

   and update with::

      conda update scirpy

   or use the docker container::

      docker pull quay.io/biocontainers/scirpy:<tag>

   (see `scirpy/tags`_ for valid values for ``<tag>``)


.. |downloads_scirpy| image:: https://img.shields.io/conda/dn/bioconda/scirpy.svg?style=flat
   :target: https://anaconda.org/bioconda/scirpy
   :alt:   (downloads)
.. |docker_scirpy| image:: https://quay.io/repository/biocontainers/scirpy/status
   :target: https://quay.io/repository/biocontainers/scirpy
.. _`scirpy/tags`: https://quay.io/repository/biocontainers/scirpy?tab=tags


.. raw:: html

    <script>
        var package = "scirpy";
        var versions = ["0.10.0","0.9.1","0.9.0","0.8.0","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scirpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scirpy/README.html