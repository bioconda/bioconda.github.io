:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'presto'
.. highlight: bash

presto
======

.. conda:recipe:: presto
   :replaces_section_title:
   :noindex:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data.

   :homepage: https://github.com/immcantation/presto
   :documentation: https://presto.readthedocs.io
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`presto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/presto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/presto/meta.yaml>`_

   


.. conda:package:: presto

   |downloads_presto| |docker_presto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.8-0</code>,  <code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  </span></summary>
      

      ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.13-1``,  ``0.5.13-0``,  ``0.5.12-0``,  ``0.5.10-0``,  ``0.5.4-1``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.81``
   :depends on blast: 
   :depends on muscle: 
   :depends on numpy: ``>=1.8``
   :depends on packaging: 
   :depends on pandas: ``>=0.24``
   :depends on python: ``>=3``
   :depends on scipy: ``>=0.14``
   :depends on vsearch: 

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

    pixi global install presto

to add into an existing workspace instead, run::

    pixi add presto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install presto

Alternatively, to install into a new environment, run::

    conda create -n envname presto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/presto:<tag>

(see `presto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_presto| image:: https://img.shields.io/conda/dn/bioconda/presto.svg?style=flat
   :target: https://anaconda.org/bioconda/presto
   :alt:   (downloads)
.. |docker_presto| image:: https://quay.io/repository/biocontainers/presto/status
   :target: https://quay.io/repository/biocontainers/presto
.. _`presto/tags`: https://quay.io/repository/biocontainers/presto?tab=tags


.. raw:: html

    <script>
        var package = "presto";
        var versions = ["0.7.8","0.7.7","0.7.6","0.7.5","0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/presto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/presto/README.html