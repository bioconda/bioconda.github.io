:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcflurry'
.. highlight: bash

mhcflurry
=========

.. conda:recipe:: mhcflurry
   :replaces_section_title:
   :noindex:

   MHC Binding Predictor

   :homepage: https://github.com/openvax/mhcflurry
   :license: APACHE / Apache-2.0
   :recipe: /`mhcflurry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.014`

   


.. conda:package:: mhcflurry

   |downloads_mhcflurry| |docker_mhcflurry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.5-0</code>,  <code>2.1.4-1</code>,  <code>2.1.4-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.6-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.1.5-0``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.6-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: 
   :depends on mhcgnomes: ``>=0.8.4``
   :depends on np_utils: 
   :depends on pandas: ``>=0.20.3``
   :depends on python: 
   :depends on pyyaml: 
   :depends on scikit-learn: 
   :depends on six: 
   :depends on tensorflow: ``>=2.12.0``
   :depends on tf-keras: 
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

    pixi global install mhcflurry

to add into an existing workspace instead, run::

    pixi add mhcflurry

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mhcflurry

Alternatively, to install into a new environment, run::

    conda create -n envname mhcflurry

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mhcflurry:<tag>

(see `mhcflurry/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mhcflurry| image:: https://img.shields.io/conda/dn/bioconda/mhcflurry.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcflurry
   :alt:   (downloads)
.. |docker_mhcflurry| image:: https://quay.io/repository/biocontainers/mhcflurry/status
   :target: https://quay.io/repository/biocontainers/mhcflurry
.. _`mhcflurry/tags`: https://quay.io/repository/biocontainers/mhcflurry?tab=tags


.. raw:: html

    <script>
        var package = "mhcflurry";
        var versions = ["2.1.5","2.1.4","2.1.4","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcflurry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcflurry/README.html