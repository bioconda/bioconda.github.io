:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panaroo'
.. highlight: bash

panaroo
=======

.. conda:recipe:: panaroo
   :replaces_section_title:
   :noindex:

   panaroo \- an updated pipeline for pangenome investigation

   :homepage: https://gtonkinhill.github.io/panaroo
   :license: MIT
   :recipe: /`panaroo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo/meta.yaml>`_

   


.. conda:package:: panaroo

   |downloads_panaroo| |docker_panaroo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.0-0</code>,  <code>1.2.10-0</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  </span></summary>
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biocode: 
   :depends biopython: 
   :depends cd-hit: 
   :depends dendropy: 
   :depends gffutils: 
   :depends intbitset: 
   :depends joblib: 
   :depends mafft: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends mkl: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends openmp: 
   :depends plotly: 
   :depends prank: 
   :depends prokka: 
   :depends python: ``>=3``
   :depends python-edlib: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panaroo

   and update with::

      conda update panaroo

   or use the docker container::

      docker pull quay.io/biocontainers/panaroo:<tag>

   (see `panaroo/tags`_ for valid values for ``<tag>``)


.. |downloads_panaroo| image:: https://img.shields.io/conda/dn/bioconda/panaroo.svg?style=flat
   :target: https://anaconda.org/bioconda/panaroo
   :alt:   (downloads)
.. |docker_panaroo| image:: https://quay.io/repository/biocontainers/panaroo/status
   :target: https://quay.io/repository/biocontainers/panaroo
.. _`panaroo/tags`: https://quay.io/repository/biocontainers/panaroo?tab=tags


.. raw:: html

    <script>
        var package = "panaroo";
        var versions = ["1.3.3","1.3.2","1.3.0","1.2.10","1.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panaroo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panaroo/README.html