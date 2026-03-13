:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parm'
.. highlight: bash

parm
====

.. conda:recipe:: parm
   :replaces_section_title:
   :noindex:

   PARM\: Promoter Activity Regulatory Model

   :homepage: https://github.com/vansteensellab/PARM
   :license: https://github.com/vansteensellab/PARM/blob/main/LICENSE
   :recipe: /`parm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parm/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41586-025-10093-z`

   


.. conda:package:: parm

   |downloads_parm| |docker_parm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-0</code>,  <code>0.1.44-0</code>,  <code>0.1.39-0</code>,  <code>0.1.27-0</code>,  <code>0.1.0-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-2</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  </span></summary>
      

      ``0.2.0-0``,  ``0.1.44-0``,  ``0.1.39-0``,  ``0.1.27-0``,  ``0.1.0-0``,  ``0.0.7-0``,  ``0.0.6-2``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on einops: 
   :depends on h5py: 
   :depends on logomaker: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.26.0``
   :depends on optuna: 
   :depends on pandas: 
   :depends on python: 
   :depends on pytorch: 
   :depends on scikit-learn: 
   :depends on seaborn: 
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

    pixi global install parm

to add into an existing workspace instead, run::

    pixi add parm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parm

Alternatively, to install into a new environment, run::

    conda create -n envname parm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parm:<tag>

(see `parm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parm| image:: https://img.shields.io/conda/dn/bioconda/parm.svg?style=flat
   :target: https://anaconda.org/bioconda/parm
   :alt:   (downloads)
.. |docker_parm| image:: https://quay.io/repository/biocontainers/parm/status
   :target: https://quay.io/repository/biocontainers/parm
.. _`parm/tags`: https://quay.io/repository/biocontainers/parm?tab=tags


.. raw:: html

    <script>
        var package = "parm";
        var versions = ["0.2.0","0.1.44","0.1.39","0.1.27","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parm/README.html