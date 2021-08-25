:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treesapp'
.. highlight: bash

treesapp
========

.. conda:recipe:: treesapp
   :replaces_section_title:
   :noindex:

   TreeSAPP is a functional and taxonomic annotation tool for microbial genomes and proteins

   :homepage: https://github.com/hallamlab/TreeSAPP
   :license: GPL3 / GPL-3.0-only
   :recipe: /`treesapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesapp/meta.yaml>`_

   


.. conda:package:: treesapp

   |downloads_treesapp| |docker_treesapp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.2-0</code>,  <code>0.11.0-0</code>,  <code>0.10.4-1</code>,  <code>0.10.4-0</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  </span></summary>
      

      ``0.11.2-0``,  ``0.11.0-0``,  ``0.10.4-1``,  ``0.10.4-0``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends bwa: ``>=0.7.17``
   :depends epa-ng: ``>=0.3.8``
   :depends ete3: ``>=3.1.2``
   :depends fasttree: ``>=2.1.10``
   :depends hmmer: ``>=3.3``
   :depends joblib: ``1.0.0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends mafft: ``>=7.471``
   :depends matplotlib-base: ``>=3.3.0``
   :depends mmseqs2: ``>=12.113e3``
   :depends numpy: ``>=1.18.1``
   :depends packaging: ``>=20.4``
   :depends pandas: ``>=1.1.0``
   :depends prodigal: ``>=2.6.2``
   :depends pyfastx: ``>=0.8.2``
   :depends pygtrie: ``>=2.3.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends raxml-ng: ``>=1.0.1``
   :depends samsum: ``>=0.1.4``
   :depends scikit-learn: ``0.23.1``
   :depends scipy: ``>=1.5.2``
   :depends seaborn: ``>=0.11.0``
   :depends six: ``>=1.15.0``
   :depends tqdm: ``>=4.50.0``
   :depends vsearch: ``>=2.15.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treesapp

   and update with::

      conda update treesapp

   or use the docker container::

      docker pull quay.io/biocontainers/treesapp:<tag>

   (see `treesapp/tags`_ for valid values for ``<tag>``)


.. |downloads_treesapp| image:: https://img.shields.io/conda/dn/bioconda/treesapp.svg?style=flat
   :target: https://anaconda.org/bioconda/treesapp
   :alt:   (downloads)
.. |docker_treesapp| image:: https://quay.io/repository/biocontainers/treesapp/status
   :target: https://quay.io/repository/biocontainers/treesapp
.. _`treesapp/tags`: https://quay.io/repository/biocontainers/treesapp?tab=tags


.. raw:: html

    <script>
        var package = "treesapp";
        var versions = ["0.11.2","0.11.0","0.10.4","0.10.4","0.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treesapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treesapp/README.html