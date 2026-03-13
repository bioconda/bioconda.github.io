:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioinfokit'
.. highlight: bash

bioinfokit
==========

.. conda:recipe:: bioinfokit
   :replaces_section_title:
   :noindex:

   The bioinfokit toolkit aimed to provide various easy\-to\-use functionalities to analyze\, visualize\, and interpret the biological data generated from genome\-scale omics experiments.

   :homepage: https://reneshbedre.github.io/blog/howtoinstall.html
   :license: MIT
   :recipe: /`bioinfokit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioinfokit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioinfokit/meta.yaml>`_

   


.. conda:package:: bioinfokit

   |downloads_bioinfokit| |docker_bioinfokit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: 
   :depends on matplotlib-base: 
   :depends on matplotlib-venn: 
   :depends on pandas: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on tabulate: 
   :depends on textwrap3: 

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

    pixi global install bioinfokit

to add into an existing workspace instead, run::

    pixi add bioinfokit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioinfokit

Alternatively, to install into a new environment, run::

    conda create -n envname bioinfokit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioinfokit:<tag>

(see `bioinfokit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioinfokit| image:: https://img.shields.io/conda/dn/bioconda/bioinfokit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioinfokit
   :alt:   (downloads)
.. |docker_bioinfokit| image:: https://quay.io/repository/biocontainers/bioinfokit/status
   :target: https://quay.io/repository/biocontainers/bioinfokit
.. _`bioinfokit/tags`: https://quay.io/repository/biocontainers/bioinfokit?tab=tags


.. raw:: html

    <script>
        var package = "bioinfokit";
        var versions = ["2.1.3","2.1.2","2.1.1","2.1.0","2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioinfokit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioinfokit/README.html