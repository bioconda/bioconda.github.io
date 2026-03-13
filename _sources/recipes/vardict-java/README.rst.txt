:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vardict-java'
.. highlight: bash

vardict-java
============

.. conda:recipe:: vardict-java
   :replaces_section_title:
   :noindex:

   Java port of the VarDict variant discovery program

   :homepage: https://github.com/AstraZeneca-NGS/VarDictJava
   :license: MIT
   :recipe: /`vardict-java <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict-java>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict-java/meta.yaml>`_

   


.. conda:package:: vardict-java

   |downloads_vardict-java| |docker_vardict-java|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.3-0</code>,  <code>1.8.2-3</code>,  <code>1.8.2-2</code>,  <code>1.8.2-1</code>,  <code>1.8.2-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.8.3-0``,  ``1.8.2-3``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.8-1``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-1``,  ``1.4.5-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: 
   :depends on perl: 
   :depends on r-base: ``>=3.5.1``

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

    pixi global install vardict-java

to add into an existing workspace instead, run::

    pixi add vardict-java

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vardict-java

Alternatively, to install into a new environment, run::

    conda create -n envname vardict-java

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vardict-java:<tag>

(see `vardict-java/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vardict-java| image:: https://img.shields.io/conda/dn/bioconda/vardict-java.svg?style=flat
   :target: https://anaconda.org/bioconda/vardict-java
   :alt:   (downloads)
.. |docker_vardict-java| image:: https://quay.io/repository/biocontainers/vardict-java/status
   :target: https://quay.io/repository/biocontainers/vardict-java
.. _`vardict-java/tags`: https://quay.io/repository/biocontainers/vardict-java?tab=tags


.. raw:: html

    <script>
        var package = "vardict-java";
        var versions = ["1.8.3","1.8.2","1.8.2","1.8.2","1.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardict-java/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardict-java/README.html