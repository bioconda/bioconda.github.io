:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'auspice'
.. highlight: bash

auspice
=======

.. conda:recipe:: auspice
   :replaces_section_title:
   :noindex:

   Auspice is an open\-source interactive tool for visualising phylogenomic data.

   :homepage: https://github.com/nextstrain/auspice
   :documentation: https://docs.nextstrain.org/projects/auspice
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`auspice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty407`

   


.. conda:package:: auspice

   |downloads_auspice| |docker_auspice|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.66.0-2</code>,  <code>2.66.0-1</code>,  <code>2.66.0-0</code>,  <code>2.65.0-0</code>,  <code>2.64.0-0</code>,  <code>2.63.0-0</code>,  <code>2.62.0-0</code>,  <code>2.59.1-1</code>,  <code>2.59.1-0</code>,  </span></summary>
      

      ``2.66.0-2``,  ``2.66.0-1``,  ``2.66.0-0``,  ``2.65.0-0``,  ``2.64.0-0``,  ``2.63.0-0``,  ``2.62.0-0``,  ``2.59.1-1``,  ``2.59.1-0``,  ``2.59.0-0``,  ``2.58.0-0``,  ``2.57.0-0``,  ``2.56.1-0``,  ``2.56.0-3``,  ``2.56.0-2``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.1-1``,  ``2.54.1-0``,  ``2.53.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.49.0-0``,  ``2.48.0-0``,  ``2.47.0-0``,  ``2.46.0-2``,  ``2.46.0-0``,  ``2.45.1-2``,  ``2.45.1-1``,  ``2.45.1-0``,  ``2.45.0-0``,  ``2.44.0-0``,  ``2.43.0-0``,  ``2.42.0-0``,  ``2.40.1-0``,  ``2.40.0-0``,  ``2.39.0-1``,  ``2.39.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.37.3-1``,  ``2.37.3-0``,  ``2.37.1-1``,  ``2.37.1-0``,  ``2.29.1-1``,  ``2.29.1-0``,  ``2.23.0-1``,  ``2.23.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on nodejs: ``20.*|22.*``

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

    pixi global install auspice

to add into an existing workspace instead, run::

    pixi add auspice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install auspice

Alternatively, to install into a new environment, run::

    conda create -n envname auspice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/auspice:<tag>

(see `auspice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_auspice| image:: https://img.shields.io/conda/dn/bioconda/auspice.svg?style=flat
   :target: https://anaconda.org/bioconda/auspice
   :alt:   (downloads)
.. |docker_auspice| image:: https://quay.io/repository/biocontainers/auspice/status
   :target: https://quay.io/repository/biocontainers/auspice
.. _`auspice/tags`: https://quay.io/repository/biocontainers/auspice?tab=tags


.. raw:: html

    <script>
        var package = "auspice";
        var versions = ["2.66.0","2.66.0","2.66.0","2.65.0","2.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/auspice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/auspice/README.html