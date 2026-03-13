:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samplot'
.. highlight: bash

samplot
=======

.. conda:recipe:: samplot
   :replaces_section_title:
   :noindex:

   Plot structural variant signals from BAMs and CRAMs.

   :homepage: https://github.com/ryanlayer/samplot
   :license: MIT
   :recipe: /`samplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samplot/meta.yaml>`_

   


.. conda:package:: samplot

   |downloads_samplot| |docker_samplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.3-0</code>,  <code>1.1.0-0</code>,  <code>1.0.21-0</code>,  <code>1.0.20-0</code>,  </span></summary>
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.0-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.19-0``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on jinja2: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pip: 
   :depends on pysam: ``>=0.15.2``
   :depends on python: 
   :depends on wget: 

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

    pixi global install samplot

to add into an existing workspace instead, run::

    pixi add samplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samplot

Alternatively, to install into a new environment, run::

    conda create -n envname samplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samplot:<tag>

(see `samplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samplot| image:: https://img.shields.io/conda/dn/bioconda/samplot.svg?style=flat
   :target: https://anaconda.org/bioconda/samplot
   :alt:   (downloads)
.. |docker_samplot| image:: https://quay.io/repository/biocontainers/samplot/status
   :target: https://quay.io/repository/biocontainers/samplot
.. _`samplot/tags`: https://quay.io/repository/biocontainers/samplot?tab=tags


.. raw:: html

    <script>
        var package = "samplot";
        var versions = ["1.3.0","1.3.0","1.2.0","1.1.6","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samplot/README.html