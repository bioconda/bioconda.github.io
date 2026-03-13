:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agfusion'
.. highlight: bash

agfusion
========

.. conda:recipe:: agfusion
   :replaces_section_title:
   :noindex:

   Python package to annotate and visualize gene fusions.

   :homepage: https://github.com/murphycj/AGFusion
   :license: MIT / MIT
   :recipe: /`agfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agfusion/meta.yaml>`_
   :links: doi: :doi:`10.1101/080903`

   


.. conda:package:: agfusion

   |downloads_agfusion| |docker_agfusion|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.252-1</code>,  <code>1.252-0</code>,  <code>1.251-0</code>,  <code>1.231-0</code>,  <code>1.23-0</code>,  <code>1.4.3-0</code>,  <code>1.4.1-0</code>,  <code>1.2-2</code>,  <code>1.2-0</code>,  </span></summary>
      

      ``1.252-1``,  ``1.252-0``,  ``1.251-0``,  ``1.231-0``,  ``1.23-0``,  ``1.4.3-0``,  ``1.4.1-0``,  ``1.2-2``,  ``1.2-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.67``
   :depends on future: ``>=0.16.0``
   :depends on matplotlib: ``>=1.5.0``
   :depends on nose2: ``>=0.6.5``
   :depends on pandas: ``>=0.18.1``
   :depends on pyensembl: ``>=1.1.0``
   :depends on python: 

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

    pixi global install agfusion

to add into an existing workspace instead, run::

    pixi add agfusion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install agfusion

Alternatively, to install into a new environment, run::

    conda create -n envname agfusion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/agfusion:<tag>

(see `agfusion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_agfusion| image:: https://img.shields.io/conda/dn/bioconda/agfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/agfusion
   :alt:   (downloads)
.. |docker_agfusion| image:: https://quay.io/repository/biocontainers/agfusion/status
   :target: https://quay.io/repository/biocontainers/agfusion
.. _`agfusion/tags`: https://quay.io/repository/biocontainers/agfusion?tab=tags


.. raw:: html

    <script>
        var package = "agfusion";
        var versions = ["1.252","1.252","1.251","1.231","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agfusion/README.html