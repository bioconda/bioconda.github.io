:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plotsr'
.. highlight: bash

plotsr
======

.. conda:recipe:: plotsr
   :replaces_section_title:
   :noindex:

   Visualiser for structural annotations between multiple genomes

   :homepage: https://github.com/schneebergerlab/plotsr
   :license: MIT / MIT
   :recipe: /`plotsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotsr/meta.yaml>`_

   


.. conda:package:: plotsr

   |downloads_plotsr| |docker_plotsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5-1</code>,  <code>0.5-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: ``>=3.3``
   :depends on numpy: ``>=1.21``
   :depends on pandas: ``>=1.2.4``
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

    pixi global install plotsr

to add into an existing workspace instead, run::

    pixi add plotsr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plotsr

Alternatively, to install into a new environment, run::

    conda create -n envname plotsr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plotsr:<tag>

(see `plotsr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plotsr| image:: https://img.shields.io/conda/dn/bioconda/plotsr.svg?style=flat
   :target: https://anaconda.org/bioconda/plotsr
   :alt:   (downloads)
.. |docker_plotsr| image:: https://quay.io/repository/biocontainers/plotsr/status
   :target: https://quay.io/repository/biocontainers/plotsr
.. _`plotsr/tags`: https://quay.io/repository/biocontainers/plotsr?tab=tags


.. raw:: html

    <script>
        var package = "plotsr";
        var versions = ["1.1.1","1.1.0","1.0.0","0.5.4","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plotsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plotsr/README.html