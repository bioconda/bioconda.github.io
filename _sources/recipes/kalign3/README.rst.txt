:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalign3'
.. highlight: bash

kalign3
=======

.. conda:recipe:: kalign3
   :replaces_section_title:
   :noindex:

   Kalign is a fast and accurate multiple sequence alignment algorithm.

   :homepage: https://github.com/TimoLassmann/kalign
   :license: GPL-3.0-only
   :recipe: /`kalign3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign3/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz795`

   


.. conda:package:: kalign3

   |downloads_kalign3| |docker_kalign3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.5-0</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.2.2-3</code>,  <code>3.2.2-2</code>,  </span></summary>
      

      ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.5-0``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.2.2-3``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install kalign3

to add into an existing workspace instead, run::

    pixi add kalign3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kalign3

Alternatively, to install into a new environment, run::

    conda create -n envname kalign3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kalign3:<tag>

(see `kalign3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kalign3| image:: https://img.shields.io/conda/dn/bioconda/kalign3.svg?style=flat
   :target: https://anaconda.org/bioconda/kalign3
   :alt:   (downloads)
.. |docker_kalign3| image:: https://quay.io/repository/biocontainers/kalign3/status
   :target: https://quay.io/repository/biocontainers/kalign3
.. _`kalign3/tags`: https://quay.io/repository/biocontainers/kalign3?tab=tags


.. raw:: html

    <script>
        var package = "kalign3";
        var versions = ["3.4.0","3.4.0","3.4.0","3.3.5","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalign3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalign3/README.html