:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sinto'
.. highlight: bash

sinto
=====

.. conda:recipe:: sinto
   :replaces_section_title:
   :noindex:

   sinto\: tools for single\-cell data processing

   :homepage: https://timoast.github.io/sinto/
   :developer docs: https://github.com/timoast/sinto
   :license: MIT / MIT
   :recipe: /`sinto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sinto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sinto/meta.yaml>`_

   


.. conda:package:: sinto

   |downloads_sinto| |docker_sinto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  </span></summary>
      

      ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: 
   :depends on pysam: ``>=0.14,<0.21``
   :depends on python: ``>=3.8``
   :depends on scipy: 
   :depends on umi_tools: 

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

    pixi global install sinto

to add into an existing workspace instead, run::

    pixi add sinto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sinto

Alternatively, to install into a new environment, run::

    conda create -n envname sinto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sinto:<tag>

(see `sinto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sinto| image:: https://img.shields.io/conda/dn/bioconda/sinto.svg?style=flat
   :target: https://anaconda.org/bioconda/sinto
   :alt:   (downloads)
.. |docker_sinto| image:: https://quay.io/repository/biocontainers/sinto/status
   :target: https://quay.io/repository/biocontainers/sinto
.. _`sinto/tags`: https://quay.io/repository/biocontainers/sinto?tab=tags


.. raw:: html

    <script>
        var package = "sinto";
        var versions = ["0.10.1","0.10.0","0.9.0","0.8.4","0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sinto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sinto/README.html