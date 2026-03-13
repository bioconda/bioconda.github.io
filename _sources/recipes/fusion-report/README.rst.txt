:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-report'
.. highlight: bash

fusion-report
=============

.. conda:recipe:: fusion-report
   :replaces_section_title:
   :noindex:

   Tool for parsing outputs from fusion detection tools. Part of the nf\-core\/rnafusion pipeline.

   :homepage: https://github.com/Clinical-Genomics/fusion-report
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fusion-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-report/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.2609024`

   


.. conda:package:: fusion-report

   |downloads_fusion-report| |docker_fusion-report|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-0</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  </span></summary>
      

      ``4.0.1-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on beautifulsoup4: ``>=4.12.0``
   :depends on click: ``>=8.1.0``
   :depends on colorlog: 
   :depends on jinja2: ``>=3.1.0``
   :depends on markupsafe: ``>=2.1.1``
   :depends on numpy: ``>=1.26.0``
   :depends on openpyxl: 
   :depends on pandas: ``>=2.2.0``
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=4.2b1``
   :depends on requests: ``>=2.31.0``
   :depends on sqlite: ``>=3.39``
   :depends on tabulate: ``>=0.9.0``
   :depends on tqdm: ``>=4.66.0``
   :depends on xlrd: ``>=2.0.0``

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

    pixi global install fusion-report

to add into an existing workspace instead, run::

    pixi add fusion-report

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fusion-report

Alternatively, to install into a new environment, run::

    conda create -n envname fusion-report

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fusion-report:<tag>

(see `fusion-report/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fusion-report| image:: https://img.shields.io/conda/dn/bioconda/fusion-report.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-report
   :alt:   (downloads)
.. |docker_fusion-report| image:: https://quay.io/repository/biocontainers/fusion-report/status
   :target: https://quay.io/repository/biocontainers/fusion-report
.. _`fusion-report/tags`: https://quay.io/repository/biocontainers/fusion-report?tab=tags


.. raw:: html

    <script>
        var package = "fusion-report";
        var versions = ["4.0.1","4.0.0","4.0.0","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-report/README.html