:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydeseq2'
.. highlight: bash

pydeseq2
========

.. conda:recipe:: pydeseq2
   :replaces_section_title:
   :noindex:

   A python implementation of DESeq2.

   :homepage: https://github.com/owkin/PyDESeq2
   :documentation: https://pydeseq2.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`pydeseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydeseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydeseq2/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.14.520412`

   


.. conda:package:: pydeseq2

   |downloads_pydeseq2| |docker_pydeseq2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.12-0</code>,  <code>0.4.11-0</code>,  <code>0.4.10-0</code>,  </span></summary>
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.8.0``
   :depends on formulaic: ``>=1.0.2``
   :depends on formulaic-contrasts: ``>=0.2.0``
   :depends on ipython: 
   :depends on jupyter: 
   :depends on matplotlib-base: ``>=3.6.2``
   :depends on numpy: ``>=1.23.0``
   :depends on pandas: ``>=1.4.0``
   :depends on python: ``>=3.10``
   :depends on scikit-learn: ``>=1.1.0``
   :depends on scipy: ``>=1.11.0``

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

    pixi global install pydeseq2

to add into an existing workspace instead, run::

    pixi add pydeseq2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pydeseq2

Alternatively, to install into a new environment, run::

    conda create -n envname pydeseq2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pydeseq2:<tag>

(see `pydeseq2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pydeseq2| image:: https://img.shields.io/conda/dn/bioconda/pydeseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/pydeseq2
   :alt:   (downloads)
.. |docker_pydeseq2| image:: https://quay.io/repository/biocontainers/pydeseq2/status
   :target: https://quay.io/repository/biocontainers/pydeseq2
.. _`pydeseq2/tags`: https://quay.io/repository/biocontainers/pydeseq2?tab=tags


.. raw:: html

    <script>
        var package = "pydeseq2";
        var versions = ["0.5.4","0.5.3","0.5.2","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydeseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydeseq2/README.html