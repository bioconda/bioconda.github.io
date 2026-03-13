:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amdirt'
.. highlight: bash

amdirt
======

.. conda:recipe:: amdirt
   :replaces_section_title:
   :noindex:

   amdirt\: AncientMetagenomeDir Toolkit

   :homepage: https://github.com/SPAAM-community/amdirt
   :license: GPL-3.0
   :recipe: /`amdirt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amdirt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amdirt/meta.yaml>`_

   


.. conda:package:: amdirt

   |downloads_amdirt| |docker_amdirt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.5-1</code>,  <code>1.6.5-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-1</code>,  </span></summary>
      

      ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.2-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on colorlog: 
   :depends on jsonschema: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on protobuf: ``<=3.20``
   :depends on python: ``>=3.9``
   :depends on requests: 
   :depends on rich: 
   :depends on streamlit: ``<=1.35.0``
   :depends on streamlit-aggrid: ``0.3.4.post3``
   :depends on tabulate: 

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

    pixi global install amdirt

to add into an existing workspace instead, run::

    pixi add amdirt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amdirt

Alternatively, to install into a new environment, run::

    conda create -n envname amdirt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amdirt:<tag>

(see `amdirt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amdirt| image:: https://img.shields.io/conda/dn/bioconda/amdirt.svg?style=flat
   :target: https://anaconda.org/bioconda/amdirt
   :alt:   (downloads)
.. |docker_amdirt| image:: https://quay.io/repository/biocontainers/amdirt/status
   :target: https://quay.io/repository/biocontainers/amdirt
.. _`amdirt/tags`: https://quay.io/repository/biocontainers/amdirt?tab=tags


.. raw:: html

    <script>
        var package = "amdirt";
        var versions = ["1.7.1","1.7.0","1.6.5","1.6.5","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amdirt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amdirt/README.html