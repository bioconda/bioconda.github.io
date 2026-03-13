:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-flowtools'
.. highlight: bash

ig-flowtools
============

.. conda:recipe:: ig-flowtools
   :replaces_section_title:
   :noindex:

   set of tools for flow cytometry analysis

   :homepage: https://github.com/ImmPortDB/ig-flowtools
   :license: BSD / BSD License
   :recipe: /`ig-flowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools/meta.yaml>`_

   


.. conda:package:: ig-flowtools

   |downloads_ig-flowtools| |docker_ig-flowtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-5</code>,  <code>2.0.2-4</code>,  <code>2.0.2-3</code>,  <code>2.0.2-2</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.4.1-1</code>,  </span></summary>
      

      ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowai: 
   :depends on bioconductor-flowcl: 
   :depends on bioconductor-flowcore: 
   :depends on bioconductor-flowdensity: 
   :depends on bioconductor-flowsom: 
   :depends on bioconductor-flowviz: 
   :depends on bioconductor-ggcyto: 
   :depends on clustergrammer: 
   :depends on flock: 
   :depends on jinja2: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on r-base: 
   :depends on scipy: 

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

    pixi global install ig-flowtools

to add into an existing workspace instead, run::

    pixi add ig-flowtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ig-flowtools

Alternatively, to install into a new environment, run::

    conda create -n envname ig-flowtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ig-flowtools:<tag>

(see `ig-flowtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ig-flowtools| image:: https://img.shields.io/conda/dn/bioconda/ig-flowtools.svg?style=flat
   :target: https://anaconda.org/bioconda/ig-flowtools
   :alt:   (downloads)
.. |docker_ig-flowtools| image:: https://quay.io/repository/biocontainers/ig-flowtools/status
   :target: https://quay.io/repository/biocontainers/ig-flowtools
.. _`ig-flowtools/tags`: https://quay.io/repository/biocontainers/ig-flowtools?tab=tags


.. raw:: html

    <script>
        var package = "ig-flowtools";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-flowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-flowtools/README.html