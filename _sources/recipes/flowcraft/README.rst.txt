:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flowcraft'
.. highlight: bash

flowcraft
=========

.. conda:recipe:: flowcraft
   :replaces_section_title:
   :noindex:

   A Nextflow pipeline assembler for genomics. Pick your modules. Assemble them. Run the pipeline.

   :homepage: https://github.com/assemblerflow/flowcraft
   :documentation: http://assemblerflow.readthedocs.io/en/latest/
   
   :developer docs: http://assemblerflow.readthedocs.io/en/latest/
   :license: GPL3 / GPL3
   :recipe: /`flowcraft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flowcraft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flowcraft/meta.yaml>`_

   


.. conda:package:: flowcraft

   |downloads_flowcraft| |docker_flowcraft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.1-1</code>,  <code>1.3.0-1</code>,  <code>1.2.2-1</code>,  <code>1.2.1-1</code>,  <code>1.2.0.post1-1</code>,  </span></summary>
      

      ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-1``,  ``1.3.0-1``,  ``1.2.2-1``,  ``1.2.1-1``,  ``1.2.0.post1-1``,  ``1.2.0.post1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on jinja2: 
   :depends on nextflow: ``>=0.28``
   :depends on pympler: 
   :depends on python: ``>=3``
   :depends on python-dateutil: 
   :depends on requests: 

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

    pixi global install flowcraft

to add into an existing workspace instead, run::

    pixi add flowcraft

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flowcraft

Alternatively, to install into a new environment, run::

    conda create -n envname flowcraft

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flowcraft:<tag>

(see `flowcraft/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flowcraft| image:: https://img.shields.io/conda/dn/bioconda/flowcraft.svg?style=flat
   :target: https://anaconda.org/bioconda/flowcraft
   :alt:   (downloads)
.. |docker_flowcraft| image:: https://quay.io/repository/biocontainers/flowcraft/status
   :target: https://quay.io/repository/biocontainers/flowcraft
.. _`flowcraft/tags`: https://quay.io/repository/biocontainers/flowcraft?tab=tags


.. raw:: html

    <script>
        var package = "flowcraft";
        var versions = ["1.4.1","1.4.1","1.4.0","1.4.0","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flowcraft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flowcraft/README.html