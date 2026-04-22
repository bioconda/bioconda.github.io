:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'daligner'
.. highlight: bash

daligner
========

.. conda:recipe:: daligner
   :replaces_section_title:
   :noindex:

   DALIGNER\: Find all significant local alignments between reads.

   :homepage: https://github.com/thegenemyers/DALIGNER
   :documentation: https://github.com/thegenemyers/DALIGNER/blob/master/README.md
   
   :license: Custom
   :recipe: /`daligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daligner/meta.yaml>`_

   


.. conda:package:: daligner

   |downloads_daligner| |docker_daligner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.20240118-0</code>,  <code>1.0.20230620-1</code>,  <code>1.0.20230620-0</code>,  <code>1.0.20200322-4</code>,  <code>1.0.20200322-3</code>,  <code>1.0.20200322-2</code>,  <code>1.0.20200322-1</code>,  <code>1.0.20200322-0</code>,  <code>1.0-0</code>,  </span></summary>
      

      ``2.0.20240118-0``,  ``1.0.20230620-1``,  ``1.0.20230620-0``,  ``1.0.20200322-4``,  ``1.0.20200322-3``,  ``1.0.20200322-2``,  ``1.0.20200322-1``,  ``1.0.20200322-0``,  ``1.0-0``,  ``1.0p2-1``,  ``1.0p2-0``,  ``1.0p1-2``,  ``1.0p1-1``,  ``1.0p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install daligner

to add into an existing workspace instead, run::

    pixi add daligner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install daligner

Alternatively, to install into a new environment, run::

    conda create -n envname daligner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/daligner:<tag>

(see `daligner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_daligner| image:: https://img.shields.io/conda/dn/bioconda/daligner.svg?style=flat
   :target: https://anaconda.org/bioconda/daligner
   :alt:   (downloads)
.. |docker_daligner| image:: https://quay.io/repository/biocontainers/daligner/status
   :target: https://quay.io/repository/biocontainers/daligner
.. _`daligner/tags`: https://quay.io/repository/biocontainers/daligner?tab=tags


.. raw:: html

    <script>
        var package = "daligner";
        var versions = ["2.0.20240118","1.0.20230620","1.0.20230620","1.0.20200322","1.0.20200322"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/daligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/daligner/README.html