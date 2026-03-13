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

         <details><summary><span class="truncated-version-list"><code>0.30.1-0</code>,  <code>0.30.0-0</code>,  <code>0.29.5-0</code>,  <code>0.29.4-1</code>,  <code>0.29.4-0</code>,  <code>0.29.3-0</code>,  <code>0.29.1-0</code>,  <code>0.28.2-2</code>,  <code>0.28.2-1</code>,  </span></summary>
      

      ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.5-0``,  ``0.29.4-1``,  ``0.29.4-0``,  ``0.29.3-0``,  ``0.29.1-0``,  ``0.28.2-2``,  ``0.28.2-1``,  ``0.28.2-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.3-1``,  ``0.27.3-0``,  ``0.27.2-0``,  ``0.27.1-0``,  ``0.27.0-0``,  ``0.26.4-0``,  ``0.26.3-0``,  ``0.26.2-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.1-0``,  ``0.25.0-0``,  ``0.24.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.9.2``
   :depends on biopython: ``>=1.8``
   :depends on h5py: ``>=2.10.0``
   :depends on jinja2: ``>2.10.1``
   :depends on loompy: ``>=3.0.6``
   :depends on nbconvert: ``>=5.6.0``
   :depends on nbformat: ``>=4.4.0``
   :depends on ngs-tools: ``>=1.8.6``
   :depends on numpy: ``>=1.17.2``
   :depends on pandas: ``>=1.5.3``
   :depends on plotly: ``>=4.5.0``
   :depends on python: ``>=3.8``
   :depends on requests: ``>=2.22.0``
   :depends on scanpy: ``>=1.4.4.post1``
   :depends on scikit-learn: ``>=0.21.3``
   :depends on tqdm: ``>=4.39.0``
   :depends on typing-extensions: ``>=3.7.4``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install kb-python

to add into an existing workspace instead, run::

    pixi add kb-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kb-python

Alternatively, to install into a new environment, run::

    conda create -n envname kb-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kb-python:<tag>

(see `kb-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kb-python| image:: https://img.shields.io/conda/dn/bioconda/kb-python.svg?style=flat
   :target: https://anaconda.org/bioconda/kb-python
   :alt:   (downloads)
.. |docker_kb-python| image:: https://quay.io/repository/biocontainers/kb-python/status
   :target: https://quay.io/repository/biocontainers/kb-python
.. _`kb-python/tags`: https://quay.io/repository/biocontainers/kb-python?tab=tags


.. raw:: html

    <script>
        var package = "kb-python";
        var versions = ["0.30.1","0.30.0","0.29.5","0.29.4","0.29.4"];
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