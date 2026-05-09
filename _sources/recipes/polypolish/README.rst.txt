:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polypolish'
.. highlight: bash

polypolish
==========

.. conda:recipe:: polypolish
   :replaces_section_title:
   :noindex:

   Polishing genome assemblies with short reads.

   :homepage: https://github.com/rrwick/Polypolish
   :documentation: https://github.com/rrwick/Polypolish/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`polypolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polypolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polypolish/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1009802`, biotools: :biotools:`polypolish`

   


.. conda:package:: polypolish

   |downloads_polypolish| |docker_polypolish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-0</code>,  <code>0.6.0-3</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.0-4</code>,  <code>0.5.0-3</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  </span></summary>
      

      ``0.6.1-0``,  ``0.6.0-3``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-4``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      
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

    pixi global install polypolish

to add into an existing workspace instead, run::

    pixi add polypolish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install polypolish

Alternatively, to install into a new environment, run::

    conda create -n envname polypolish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/polypolish:<tag>

(see `polypolish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_polypolish| image:: https://img.shields.io/conda/dn/bioconda/polypolish.svg?style=flat
   :target: https://anaconda.org/bioconda/polypolish
   :alt:   (downloads)
.. |docker_polypolish| image:: https://quay.io/repository/biocontainers/polypolish/status
   :target: https://quay.io/repository/biocontainers/polypolish
.. _`polypolish/tags`: https://quay.io/repository/biocontainers/polypolish?tab=tags


.. raw:: html

    <script>
        var package = "polypolish";
        var versions = ["0.6.1","0.6.0","0.6.0","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polypolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polypolish/README.html