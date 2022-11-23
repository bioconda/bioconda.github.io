:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kb-python'
.. highlight: bash

kb-python
=========

.. conda:recipe:: kb-python
   :replaces_section_title:
   :noindex:

   A wrapper for the kallisto \| bustools workflow for single\-cell RNA\-seq pre\-processing 

   :homepage: https://github.com/pachterlab/kb_python
   :documentation: https://www.kallistobus.tools/
   
   :license: BSD / BSD
   :recipe: /`kb-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kb-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kb-python/meta.yaml>`_

   


.. conda:package:: kb-python

   |downloads_kb-python| |docker_kb-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.27.3-1</code>,  <code>0.27.3-0</code>,  <code>0.27.2-0</code>,  <code>0.27.1-0</code>,  <code>0.27.0-0</code>,  <code>0.26.4-0</code>,  <code>0.26.3-0</code>,  <code>0.26.2-0</code>,  <code>0.26.1-0</code>,  </span></summary>
      

      ``0.27.3-1``,  ``0.27.3-0``,  ``0.27.2-0``,  ``0.27.1-0``,  ``0.27.0-0``,  ``0.26.4-0``,  ``0.26.3-0``,  ``0.26.2-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.1-0``,  ``0.25.0-0``,  ``0.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.6.22.post1``
   :depends bustools: ``>=0.40.0``
   :depends h5py: ``>=2.10.0``
   :depends jinja2: ``>2.10.1``
   :depends kallisto: ``>=0.46.2``
   :depends loompy: ``>=3.0.6``
   :depends nbconvert: ``>=5.6.0``
   :depends nbformat: ``>=4.4.0``
   :depends ngs-tools: ``>=1.5.11``
   :depends numpy: ``>=1.17.2``
   :depends pandas: ``>=1.0.0``
   :depends plotly: ``>=4.5.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.22.0``
   :depends scanpy: ``>=1.4.4.post1``
   :depends scikit-learn: ``>=0.21.3``
   :depends tqdm: ``>=4.39.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kb-python

   and update with::

      conda update kb-python

   or use the docker container::

      docker pull quay.io/biocontainers/kb-python:<tag>

   (see `kb-python/tags`_ for valid values for ``<tag>``)


.. |downloads_kb-python| image:: https://img.shields.io/conda/dn/bioconda/kb-python.svg?style=flat
   :target: https://anaconda.org/bioconda/kb-python
   :alt:   (downloads)
.. |docker_kb-python| image:: https://quay.io/repository/biocontainers/kb-python/status
   :target: https://quay.io/repository/biocontainers/kb-python
.. _`kb-python/tags`: https://quay.io/repository/biocontainers/kb-python?tab=tags


.. raw:: html

    <script>
        var package = "kb-python";
        var versions = ["0.27.3","0.27.3","0.27.2","0.27.1","0.27.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kb-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kb-python/README.html