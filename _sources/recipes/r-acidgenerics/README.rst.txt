:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgenerics'
.. highlight: bash

r-acidgenerics
==============

.. conda:recipe:: r-acidgenerics
   :replaces_section_title:
   :noindex:

   S4 generic functions for Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidgenerics/
   :developer docs: https://github.com/acidgenomics/r-acidgenerics
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenerics/meta.yaml>`_

   


.. conda:package:: r-acidgenerics

   |downloads_r-acidgenerics| |docker_r-acidgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.10-0</code>,  <code>0.7.9-0</code>,  <code>0.7.8-1</code>,  <code>0.7.8-0</code>,  <code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-2``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.20-0``,  ``0.5.19-0``,  ``0.5.18-0``,  ``0.5.17-2``,  ``0.5.17-1``,  ``0.5.17-0``,  ``0.5.16-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.14-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-acidgenerics

to add into an existing workspace instead, run::

    pixi add r-acidgenerics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidgenerics

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidgenerics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidgenerics:<tag>

(see `r-acidgenerics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidgenerics| image:: https://img.shields.io/conda/dn/bioconda/r-acidgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgenerics
   :alt:   (downloads)
.. |docker_r-acidgenerics| image:: https://quay.io/repository/biocontainers/r-acidgenerics/status
   :target: https://quay.io/repository/biocontainers/r-acidgenerics
.. _`r-acidgenerics/tags`: https://quay.io/repository/biocontainers/r-acidgenerics?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgenerics";
        var versions = ["0.7.10","0.7.9","0.7.8","0.7.8","0.7.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgenerics/README.html