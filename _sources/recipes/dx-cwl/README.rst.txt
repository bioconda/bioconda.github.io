:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dx-cwl'
.. highlight: bash

dx-cwl
======

.. conda:recipe:: dx-cwl
   :replaces_section_title:
   :noindex:

   Import and run CWL workflows on DNAnexus

   :homepage: https://github.com/dnanexus/dx-cwl
   :license: Apache v2.0
   :recipe: /`dx-cwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dx-cwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dx-cwl/meta.yaml>`_

   


.. conda:package:: dx-cwl

   |downloads_dx-cwl| |docker_dx-cwl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0a20180905-3</code>,  <code>0.1.0a20180905-2</code>,  <code>0.1.0a20180905-1</code>,  <code>0.1.0a20180905-0</code>,  <code>0.1.0a20180829-0</code>,  <code>0.1.0a20180820-0</code>,  <code>0.1.0a20180119-1</code>,  <code>0.1.0a20180119-0</code>,  <code>0.1.0a20180116-0</code>,  </span></summary>
      

      ``0.1.0a20180905-3``,  ``0.1.0a20180905-2``,  ``0.1.0a20180905-1``,  ``0.1.0a20180905-0``,  ``0.1.0a20180829-0``,  ``0.1.0a20180820-0``,  ``0.1.0a20180119-1``,  ``0.1.0a20180119-0``,  ``0.1.0a20180116-0``,  ``0.1.0a20171231-0``,  ``0.1.0a20171222-0``,  ``0.1.0a20171221-0``,  ``0.1.0a20171213-0``,  ``0.1.0a20171211-0``,  ``0.1.0a20171206-0``,  ``0.1.0a20171029-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cwltool: 
   :depends on dxpy: 
   :depends on futures: 
   :depends on python: ``<3``
   :depends on pyyaml: 

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

    pixi global install dx-cwl

to add into an existing workspace instead, run::

    pixi add dx-cwl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dx-cwl

Alternatively, to install into a new environment, run::

    conda create -n envname dx-cwl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dx-cwl:<tag>

(see `dx-cwl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dx-cwl| image:: https://img.shields.io/conda/dn/bioconda/dx-cwl.svg?style=flat
   :target: https://anaconda.org/bioconda/dx-cwl
   :alt:   (downloads)
.. |docker_dx-cwl| image:: https://quay.io/repository/biocontainers/dx-cwl/status
   :target: https://quay.io/repository/biocontainers/dx-cwl
.. _`dx-cwl/tags`: https://quay.io/repository/biocontainers/dx-cwl?tab=tags


.. raw:: html

    <script>
        var package = "dx-cwl";
        var versions = ["0.1.0a20180905","0.1.0a20180905","0.1.0a20180905","0.1.0a20180905","0.1.0a20180829"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dx-cwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dx-cwl/README.html