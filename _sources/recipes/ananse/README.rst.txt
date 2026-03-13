:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ananse'
.. highlight: bash

ananse
======

.. conda:recipe:: ananse
   :replaces_section_title:
   :noindex:

   ANANSE\: ANalysis Algorithm for Networks Specified by Enhancers \- Prediction of key transcription factors in cell fate determination using enhancer networks

   :homepage: https://github.com/vanheeringen-lab/ANANSE
   :license: MIT / MIT License
   :recipe: /`ananse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ananse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ananse/meta.yaml>`_
   :links: biotools: :biotools:`ananse`

   


.. conda:package:: ananse

   |downloads_ananse| |docker_ananse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``v0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: 
   :depends on dask: ``<=2023.9.1``
   :depends on genomepy: ``>=0.14.0``
   :depends on gimmemotifs-minimal: ``>=0.18.0``
   :depends on loguru: 
   :depends on matplotlib-base: ``>=3.3``
   :depends on networkx: 
   :depends on numpy: ``>=1.6``
   :depends on openpyxl: 
   :depends on pandas: ``<2``
   :depends on pybedtools: 
   :depends on pydot: ``>=1.4.1``
   :depends on pygraphviz: ``>=1.7``
   :depends on pyranges: 
   :depends on pytables: 
   :depends on python: ``>=3.7``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.9``
   :depends on seaborn-base: 
   :depends on tqdm: 

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

    pixi global install ananse

to add into an existing workspace instead, run::

    pixi add ananse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ananse

Alternatively, to install into a new environment, run::

    conda create -n envname ananse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ananse:<tag>

(see `ananse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ananse| image:: https://img.shields.io/conda/dn/bioconda/ananse.svg?style=flat
   :target: https://anaconda.org/bioconda/ananse
   :alt:   (downloads)
.. |docker_ananse| image:: https://quay.io/repository/biocontainers/ananse/status
   :target: https://quay.io/repository/biocontainers/ananse
.. _`ananse/tags`: https://quay.io/repository/biocontainers/ananse?tab=tags


.. raw:: html

    <script>
        var package = "ananse";
        var versions = ["0.5.1","0.5.0","0.5.0","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ananse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ananse/README.html