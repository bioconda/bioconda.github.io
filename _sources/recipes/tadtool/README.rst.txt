:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadtool'
.. highlight: bash

tadtool
=======

.. conda:recipe:: tadtool
   :replaces_section_title:
   :noindex:

   TADtool is an interactive tool for the identification of meaningful parameters in TAD\-calling algorithms for Hi\-C data

   :homepage: https://github.com/vaquerizaslab/tadtool
   :license: MIT / MIT License
   :recipe: /`tadtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadtool/meta.yaml>`_

   


.. conda:package:: tadtool

   |downloads_tadtool| |docker_tadtool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.84-0</code>,  <code>0.82-0</code>,  <code>0.81-1</code>,  <code>0.81-0</code>,  <code>0.80-0</code>,  <code>0.79-0</code>,  <code>0.78-0</code>,  <code>0.77-0</code>,  <code>0.75-1</code>,  </span></summary>
      

      ``0.84-0``,  ``0.82-0``,  ``0.81-1``,  ``0.81-0``,  ``0.80-0``,  ``0.79-0``,  ``0.78-0``,  ``0.77-0``,  ``0.75-1``,  ``0.75-0``

      
      .. raw:: html

         </details>
      

   
   :depends on future: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.9.0``
   :depends on progressbar2: 
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

    pixi global install tadtool

to add into an existing workspace instead, run::

    pixi add tadtool

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tadtool

Alternatively, to install into a new environment, run::

    conda create -n envname tadtool

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tadtool:<tag>

(see `tadtool/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tadtool| image:: https://img.shields.io/conda/dn/bioconda/tadtool.svg?style=flat
   :target: https://anaconda.org/bioconda/tadtool
   :alt:   (downloads)
.. |docker_tadtool| image:: https://quay.io/repository/biocontainers/tadtool/status
   :target: https://quay.io/repository/biocontainers/tadtool
.. _`tadtool/tags`: https://quay.io/repository/biocontainers/tadtool?tab=tags


.. raw:: html

    <script>
        var package = "tadtool";
        var versions = ["0.84","0.82","0.81","0.81","0.80"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadtool/README.html