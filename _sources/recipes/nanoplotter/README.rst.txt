:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplotter'
.. highlight: bash

nanoplotter
===========

.. conda:recipe:: nanoplotter
   :replaces_section_title:
   :noindex:

   Plotting functions of Oxford Nanopore sequencing data for NanoPack

   :homepage: https://github.com/wdecoster/nanoplotter
   :license: GPL / GPL-3.0
   :recipe: /`nanoplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplotter/meta.yaml>`_

   


.. conda:package:: nanoplotter

   |downloads_nanoplotter| |docker_nanoplotter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.1-0</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.2.1-1</code>,  </span></summary>
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.0-2``,  ``0.39.1-2``,  ``0.39.1-0``,  ``0.38.0-0``,  ``0.35.4-0``,  ``0.35.3-0``,  ``0.29.0-0``,  ``0.24.1-0``,  ``0.22.1-0``,  ``0.13.3-0``,  ``0.13.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on joypy: 
   :depends on matplotlib: ``>=2.1.0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pauvre: ``0.1.86``
   :depends on plotly: ``>=3.4.2``
   :depends on python: ``>3``
   :depends on scipy: 
   :depends on seaborn: ``>=0.9.0``
   :depends on statsmodels: ``>=0.8.0``

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

    pixi global install nanoplotter

to add into an existing workspace instead, run::

    pixi add nanoplotter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanoplotter

Alternatively, to install into a new environment, run::

    conda create -n envname nanoplotter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanoplotter:<tag>

(see `nanoplotter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanoplotter| image:: https://img.shields.io/conda/dn/bioconda/nanoplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoplotter
   :alt:   (downloads)
.. |docker_nanoplotter| image:: https://quay.io/repository/biocontainers/nanoplotter/status
   :target: https://quay.io/repository/biocontainers/nanoplotter
.. _`nanoplotter/tags`: https://quay.io/repository/biocontainers/nanoplotter?tab=tags


.. raw:: html

    <script>
        var package = "nanoplotter";
        var versions = ["1.10.0","1.10.0","1.9.1","1.9.0","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplotter/README.html