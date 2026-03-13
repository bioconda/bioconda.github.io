:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakedeploy'
.. highlight: bash

snakedeploy
===========

.. conda:recipe:: snakedeploy
   :replaces_section_title:
   :noindex:

   Helper for deploying published Snakemake pipelines.

   :homepage: https://github.com/snakemake/snakedeploy
   :license: MPL-2.0
   :recipe: /`snakedeploy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakedeploy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakedeploy/meta.yaml>`_

   


.. conda:package:: snakedeploy

   |downloads_snakedeploy| |docker_snakedeploy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.4-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  </span></summary>
      

      ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.11.0-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.3-0``,  ``0.1.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on jinja2: ``>=3.1.6,<4``
   :depends on packaging: ``>=25.0,<26``
   :depends on pandas: ``>=2.3.1,<3``
   :depends on pygithub: ``>=2.6.1,<3``
   :depends on python: ``>=3.11,<3.13``
   :depends on pyyaml: ``>=6.0.2,<7``
   :depends on requests: ``>=2.32.4,<3``
   :depends on reretry: ``>=0.11.8,<1``
   :depends on setuptools: 
   :depends on toml: ``>=0.10.2,<1``

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

    pixi global install snakedeploy

to add into an existing workspace instead, run::

    pixi add snakedeploy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakedeploy

Alternatively, to install into a new environment, run::

    conda create -n envname snakedeploy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakedeploy:<tag>

(see `snakedeploy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakedeploy| image:: https://img.shields.io/conda/dn/bioconda/snakedeploy.svg?style=flat
   :target: https://anaconda.org/bioconda/snakedeploy
   :alt:   (downloads)
.. |docker_snakedeploy| image:: https://quay.io/repository/biocontainers/snakedeploy/status
   :target: https://quay.io/repository/biocontainers/snakedeploy
.. _`snakedeploy/tags`: https://quay.io/repository/biocontainers/snakedeploy?tab=tags


.. raw:: html

    <script>
        var package = "snakedeploy";
        var versions = ["0.16.0","0.15.0","0.14.0","0.11.0","0.10.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakedeploy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakedeploy/README.html