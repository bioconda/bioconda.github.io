:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digestiflow-demux'
.. highlight: bash

digestiflow-demux
=================

.. conda:recipe:: digestiflow-demux
   :replaces_section_title:
   :noindex:

   Digestiflow Command Line Client.

   :homepage: https://github.com/bihealth/digestiflow-demux
   :license: MIT
   :recipe: /`digestiflow-demux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux/meta.yaml>`_

   A command line client tool to perform semiautomatic demultiplexing of Illumina
   flowcells using data from Digestiflow Server.


.. conda:package:: digestiflow-demux

   |downloads_digestiflow-demux| |docker_digestiflow-demux|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: ``>=18.2.0``
   :depends on coloredlogs: ``>=10.0``
   :depends on git: 
   :depends on python: ``>=3.5``
   :depends on requests: 
   :depends on snakemake: ``>=5.4.0``
   :depends on toml: ``>=0.10.0``

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

    pixi global install digestiflow-demux

to add into an existing workspace instead, run::

    pixi add digestiflow-demux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install digestiflow-demux

Alternatively, to install into a new environment, run::

    conda create -n envname digestiflow-demux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/digestiflow-demux:<tag>

(see `digestiflow-demux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_digestiflow-demux| image:: https://img.shields.io/conda/dn/bioconda/digestiflow-demux.svg?style=flat
   :target: https://anaconda.org/bioconda/digestiflow-demux
   :alt:   (downloads)
.. |docker_digestiflow-demux| image:: https://quay.io/repository/biocontainers/digestiflow-demux/status
   :target: https://quay.io/repository/biocontainers/digestiflow-demux
.. _`digestiflow-demux/tags`: https://quay.io/repository/biocontainers/digestiflow-demux?tab=tags


.. raw:: html

    <script>
        var package = "digestiflow-demux";
        var versions = ["0.5.3","0.5.2","0.5.1","0.5.0","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digestiflow-demux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digestiflow-demux/README.html