:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sentieon'
.. highlight: bash

sentieon
========

.. conda:recipe:: sentieon
   :replaces_section_title:
   :noindex:

   Accelerated performance bioinformatics tools for mapping and variant calling

   :homepage: https://www.sentieon.com
   :license: Commercial (requires license for use; redistribution allowed)
   :recipe: /`sentieon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon/meta.yaml>`_

   


.. conda:package:: sentieon

   |downloads_sentieon| |docker_sentieon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>202503.02-0</code>,  <code>202503.01-0</code>,  <code>202503-0</code>,  <code>202308.03-3</code>,  <code>202308.03-2</code>,  <code>202308.03-1</code>,  <code>202308.03-0</code>,  <code>202308.02-1</code>,  <code>202308.02-0</code>,  </span></summary>
      

      ``202503.02-0``,  ``202503.01-0``,  ``202503-0``,  ``202308.03-3``,  ``202308.03-2``,  ``202308.03-1``,  ``202308.03-0``,  ``202308.02-1``,  ``202308.02-0``,  ``202308.01-1``,  ``202308.01-0``,  ``202308-1``,  ``202308-0``,  ``202112.07-4``,  ``202112.07-3``,  ``202112.07-2``,  ``202112.07-1``,  ``202112.07-0``,  ``202112.06-2``,  ``202112.06-1``,  ``202112.06-0``,  ``202112.05-2``,  ``202112.05-1``,  ``202112.05-0``,  ``202112.04-2``,  ``202112.04-1``,  ``202112.04-0``,  ``202112.02-1``,  ``202112.02-0``,  ``202112.01-1``,  ``202112.01-0``,  ``202112-2``,  ``202112-1``,  ``202112-0``,  ``202010.04-1``,  ``202010.04-0``,  ``202010.02-1``,  ``202010.02-0``,  ``201808.08-2``,  ``201808.08-1``,  ``201808.08-0``,  ``201808.07-1``,  ``201808.07-0``,  ``201808.05-1``,  ``201808.05-0``,  ``201808.03-1``,  ``201808.03-0``,  ``201808.02-0``,  ``201808.01-1``,  ``201808.01-0``,  ``201808-1``,  ``201808-0``,  ``201711.04-4``,  ``201711.04-3``,  ``201711.04-2``,  ``201711.03-2``,  ``201711.03-1``,  ``201711.03-0``,  ``201711.02-1``,  ``201711.02-0``,  ``201711.01-3``,  ``201711.01-2``,  ``201711.01-1``,  ``201711.01-0``,  ``201711-1``,  ``201711-0``,  ``201704.03-1``,  ``201704.03-0``,  ``201704.02-1``,  ``201704.02-0``,  ``201704-0``,  ``201611.03-0``,  ``201611-0``,  ``201606-0``,  ``201603.02-1``,  ``201603.02-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libudev: 
   :depends on libudev1: ``>=257.10``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=2.7``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install sentieon

to add into an existing workspace instead, run::

    pixi add sentieon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sentieon

Alternatively, to install into a new environment, run::

    conda create -n envname sentieon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sentieon:<tag>

(see `sentieon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sentieon| image:: https://img.shields.io/conda/dn/bioconda/sentieon.svg?style=flat
   :target: https://anaconda.org/bioconda/sentieon
   :alt:   (downloads)
.. |docker_sentieon| image:: https://quay.io/repository/biocontainers/sentieon/status
   :target: https://quay.io/repository/biocontainers/sentieon
.. _`sentieon/tags`: https://quay.io/repository/biocontainers/sentieon?tab=tags


.. raw:: html

    <script>
        var package = "sentieon";
        var versions = ["202503.02","202503.01","202503","202308.03","202308.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sentieon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sentieon/README.html