:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfdist'
.. highlight: bash

vcfdist
=======

.. conda:recipe:: vcfdist
   :replaces_section_title:
   :noindex:

   vcfdist\: benchmarking phased germline variant calls in VCF format.

   :homepage: https://github.com/TimD1/vcfdist
   :documentation: https://github.com/TimD1/vcfdist/wiki
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`vcfdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfdist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfdist/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.8368282`

   


.. conda:package:: vcfdist

   |downloads_vcfdist| |docker_vcfdist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.4-0</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.3-1</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  </span></summary>
      

      ``2.6.4-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install vcfdist

to add into an existing workspace instead, run::

    pixi add vcfdist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcfdist

Alternatively, to install into a new environment, run::

    conda create -n envname vcfdist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcfdist:<tag>

(see `vcfdist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcfdist| image:: https://img.shields.io/conda/dn/bioconda/vcfdist.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfdist
   :alt:   (downloads)
.. |docker_vcfdist| image:: https://quay.io/repository/biocontainers/vcfdist/status
   :target: https://quay.io/repository/biocontainers/vcfdist
.. _`vcfdist/tags`: https://quay.io/repository/biocontainers/vcfdist?tab=tags


.. raw:: html

    <script>
        var package = "vcfdist";
        var versions = ["2.6.4","2.6.3","2.6.2","2.6.1","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfdist/README.html