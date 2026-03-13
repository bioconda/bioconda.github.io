:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxpasta'
.. highlight: bash

taxpasta
========

.. conda:recipe:: taxpasta
   :replaces_section_title:
   :noindex:

   TAXonomic Profile Aggregation and STAndardisation

   :homepage: https://github.com/taxprofiler/taxpasta
   :license: Apache-2.0
   :recipe: /`taxpasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxpasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxpasta/meta.yaml>`_

   


.. conda:package:: taxpasta

   |downloads_taxpasta| |docker_taxpasta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biom-format: 
   :depends on depinfo: ``>=2.1``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pandera: 
   :depends on pyarrow: 
   :depends on python: ``>=3.8,<=3.13``
   :depends on taxopy: 
   :depends on typer: 

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

    pixi global install taxpasta

to add into an existing workspace instead, run::

    pixi add taxpasta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxpasta

Alternatively, to install into a new environment, run::

    conda create -n envname taxpasta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxpasta:<tag>

(see `taxpasta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxpasta| image:: https://img.shields.io/conda/dn/bioconda/taxpasta.svg?style=flat
   :target: https://anaconda.org/bioconda/taxpasta
   :alt:   (downloads)
.. |docker_taxpasta| image:: https://quay.io/repository/biocontainers/taxpasta/status
   :target: https://quay.io/repository/biocontainers/taxpasta
.. _`taxpasta/tags`: https://quay.io/repository/biocontainers/taxpasta?tab=tags


.. raw:: html

    <script>
        var package = "taxpasta";
        var versions = ["0.7.0","0.7.0","0.6.1","0.6.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxpasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxpasta/README.html