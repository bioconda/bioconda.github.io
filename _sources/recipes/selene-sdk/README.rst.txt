:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selene-sdk'
.. highlight: bash

selene-sdk
==========

.. conda:recipe:: selene-sdk
   :replaces_section_title:
   :noindex:

   Framework for developing sequence\-level deep learning networks.

   :homepage: https://github.com/FunctionLab/selene
   :license: BSD / BSD 3-Clause Clear
   :recipe: /`selene-sdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selene-sdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selene-sdk/meta.yaml>`_

   


.. conda:package:: selene-sdk

   |downloads_selene-sdk| |docker_selene-sdk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.3-1</code>,  <code>0.5.3-0</code>,  <code>0.5.0-5</code>,  <code>0.5.0-4</code>,  <code>0.5.0-3</code>,  <code>0.5.0-1</code>,  </span></summary>
      

      ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.0-5``,  ``0.5.0-4``,  ``0.5.0-3``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-3``,  ``0.4.8-2``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on h5py: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: ``>=2.2.3``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.21.4``
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyfaidx: 
   :depends on pytabix: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pytorch: ``>=1.0.0,<=2.3.1``
   :depends on pyyaml: ``>=5.1``
   :depends on ruamel.yaml: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on statsmodels: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install selene-sdk

to add into an existing workspace instead, run::

    pixi add selene-sdk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install selene-sdk

Alternatively, to install into a new environment, run::

    conda create -n envname selene-sdk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/selene-sdk:<tag>

(see `selene-sdk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_selene-sdk| image:: https://img.shields.io/conda/dn/bioconda/selene-sdk.svg?style=flat
   :target: https://anaconda.org/bioconda/selene-sdk
   :alt:   (downloads)
.. |docker_selene-sdk| image:: https://quay.io/repository/biocontainers/selene-sdk/status
   :target: https://quay.io/repository/biocontainers/selene-sdk
.. _`selene-sdk/tags`: https://quay.io/repository/biocontainers/selene-sdk?tab=tags


.. raw:: html

    <script>
        var package = "selene-sdk";
        var versions = ["0.6.0","0.6.0","0.6.0","0.5.3","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selene-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selene-sdk/README.html