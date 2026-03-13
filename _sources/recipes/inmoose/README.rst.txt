:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'inmoose'
.. highlight: bash

inmoose
=======

.. conda:recipe:: inmoose
   :replaces_section_title:
   :noindex:

   InMoose is the Integrated Multi Omic Open Source Environment. It is a collection of tools for the analysis of omic data.

   :homepage: https://github.com/epigenelabs/inmoose
   :documentation: https://inmoose.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`inmoose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inmoose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inmoose/meta.yaml>`_

   


.. conda:package:: inmoose

   |downloads_inmoose| |docker_inmoose|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.8-0</code>,  <code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.2-1</code>,  </span></summary>
      

      ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on click: 
   :depends on fastcluster: 
   :depends on jinja2: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: 
   :depends on mpmath: ``>=1.1.0``
   :depends on numpy: ``>=1.23,<3``
   :depends on pandas: 
   :depends on patsy: 
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on statsmodels: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install inmoose

to add into an existing workspace instead, run::

    pixi add inmoose

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install inmoose

Alternatively, to install into a new environment, run::

    conda create -n envname inmoose

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/inmoose:<tag>

(see `inmoose/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_inmoose| image:: https://img.shields.io/conda/dn/bioconda/inmoose.svg?style=flat
   :target: https://anaconda.org/bioconda/inmoose
   :alt:   (downloads)
.. |docker_inmoose| image:: https://quay.io/repository/biocontainers/inmoose/status
   :target: https://quay.io/repository/biocontainers/inmoose
.. _`inmoose/tags`: https://quay.io/repository/biocontainers/inmoose?tab=tags


.. raw:: html

    <script>
        var package = "inmoose";
        var versions = ["0.9.1","0.9.1","0.9.0","0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inmoose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inmoose/README.html