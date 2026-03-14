:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scmidas'
.. highlight: bash

scmidas
=======

.. conda:recipe:: scmidas
   :replaces_section_title:
   :noindex:

   A torch\-based integration method for single\-cell multi\-omic data.

   :homepage: https://github.com/labomics/midas
   :documentation: https://scmidas.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`scmidas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scmidas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scmidas/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-02040-y`

   


.. conda:package:: scmidas

   |downloads_scmidas| |docker_scmidas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.16-0</code>,  <code>0.1.15-0</code>,  <code>0.1.13-0</code>,  <code>0.1.12-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  </span></summary>
      

      ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.0.18-0``,  ``0.0.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on ipykernel: 
   :depends on lightning: ``>=2.4.0``
   :depends on lightning-utilities: ``>=0.11.8``
   :depends on matplotlib-base: 
   :depends on mudata: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on pytorch: ``>=2.5.1``
   :depends on requests: 
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on tensorboard: 
   :depends on toml: 
   :depends on torchaudio: ``>=2.5.1``
   :depends on torchmetrics: ``>=1.5.1``
   :depends on torchvision: ``>=0.20.1``
   :depends on tornado: 
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

    pixi global install scmidas

to add into an existing workspace instead, run::

    pixi add scmidas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scmidas

Alternatively, to install into a new environment, run::

    conda create -n envname scmidas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scmidas:<tag>

(see `scmidas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scmidas| image:: https://img.shields.io/conda/dn/bioconda/scmidas.svg?style=flat
   :target: https://anaconda.org/bioconda/scmidas
   :alt:   (downloads)
.. |docker_scmidas| image:: https://quay.io/repository/biocontainers/scmidas/status
   :target: https://quay.io/repository/biocontainers/scmidas
.. _`scmidas/tags`: https://quay.io/repository/biocontainers/scmidas?tab=tags


.. raw:: html

    <script>
        var package = "scmidas";
        var versions = ["0.1.16","0.1.15","0.1.13","0.1.12","0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scmidas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scmidas/README.html