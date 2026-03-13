:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lusstr'
.. highlight: bash

lusstr
======

.. conda:recipe:: lusstr
   :replaces_section_title:
   :noindex:

   Tool for converting NGS sequence data of forensic STR loci to various annotation styles

   :homepage: https://www.github.com/bioforensics/lusSTR
   :license: BSD / BSD-3-Clause
   :recipe: /`lusstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lusstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lusstr/meta.yaml>`_

   


.. conda:package:: lusstr

   |downloads_lusstr| |docker_lusstr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11-0</code>,  <code>0.10-0</code>,  <code>0.9-0</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-0</code>,  <code>0.6.4-0</code>,  <code>0.5-0</code>,  <code>0.4-0</code>,  </span></summary>
      

      ``0.11-0``,  ``0.10-0``,  ``0.9-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``,  ``0.6.4-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2.1-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: ``>=3.5.3``
   :depends on numpy: ``1.26.4``
   :depends on openpyxl: ``>=3.0.6``
   :depends on pandas: ``>=1.0,<2.0``
   :depends on plotly: ``>=5.24.1,<6.0``
   :depends on python: ``>=3,<3.12``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=7.22.0,<8.0``
   :depends on streamlit: ``>=1.31.0``
   :depends on streamlit_option_menu: ``>=0.3.13``
   :depends on xlrd: ``>=1.0,<2.0``

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

    pixi global install lusstr

to add into an existing workspace instead, run::

    pixi add lusstr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lusstr

Alternatively, to install into a new environment, run::

    conda create -n envname lusstr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lusstr:<tag>

(see `lusstr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lusstr| image:: https://img.shields.io/conda/dn/bioconda/lusstr.svg?style=flat
   :target: https://anaconda.org/bioconda/lusstr
   :alt:   (downloads)
.. |docker_lusstr| image:: https://quay.io/repository/biocontainers/lusstr/status
   :target: https://quay.io/repository/biocontainers/lusstr
.. _`lusstr/tags`: https://quay.io/repository/biocontainers/lusstr?tab=tags


.. raw:: html

    <script>
        var package = "lusstr";
        var versions = ["0.11","0.10","0.9","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lusstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lusstr/README.html