:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kb-python'
.. highlight: bash

kb-python
=========

.. conda:recipe:: kb-python
   :replaces_section_title:
   :noindex:

   A wrapper for the kallisto \| bustools workflow for single\-cell RNA\-seq pre\-processing.

   :homepage: https://github.com/pachterlab/kb_python
   :documentation: https://www.kallistobus.tools
   
   :license: BSD / BSD-2-Clause
   :recipe: /`kb-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kb-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kb-python/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.11.21.568164`

   


.. conda:package:: kb-python

   |downloads_kb-python| |docker_kb-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.0-0</code>,  <code>0.29.5-0</code>,  <code>0.29.4-1</code>,  <code>0.29.4-0</code>,  <code>0.29.3-0</code>,  <code>0.29.1-0</code>,  <code>0.28.2-2</code>,  <code>0.28.2-1</code>,  <code>0.28.2-0</code>,  </span></summary>
      

      ``0.30.0-0``,  ``0.29.5-0``,  ``0.29.4-1``,  ``0.29.4-0``,  ``0.29.3-0``,  ``0.29.1-0``,  ``0.28.2-2``,  ``0.28.2-1``,  ``0.28.2-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.3-1``,  ``0.27.3-0``,  ``0.27.2-0``,  ``0.27.1-0``,  ``0.27.0-0``,  ``0.26.4-0``,  ``0.26.3-0``,  ``0.26.2-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.1-0``,  ``0.25.0-0``,  ``0.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.9.2``
   :depends biopython: ``>=1.8``
   :depends h5py: ``>=2.10.0``
   :depends jinja2: ``>2.10.1``
   :depends loompy: ``>=3.0.6``
   :depends nbconvert: ``>=5.6.0``
   :depends nbformat: ``>=4.4.0``
   :depends ngs-tools: ``>=1.8.6``
   :depends numpy: ``>=1.17.2``
   :depends pandas: ``>=1.5.3``
   :depends plotly: ``>=4.5.0``
   :depends python: ``>=3.8``
   :depends requests: ``>=2.22.0``
   :depends scanpy: ``>=1.4.4.post1``
   :depends scikit-learn: ``>=0.21.3``
   :depends tqdm: ``>=4.39.0``
   :depends typing-extensions: ``>=3.7.4``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kb-python

   and update with::

      mamba update kb-python

  To create a new environment, run::

      mamba create --name myenvname kb-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.30.0","0.29.5","0.29.4","0.29.4","0.29.3"];
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