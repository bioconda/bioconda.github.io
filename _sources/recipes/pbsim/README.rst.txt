:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbsim'
.. highlight: bash

pbsim
=====

.. conda:recipe:: pbsim
   :replaces_section_title:
   :noindex:

   PBSIM simulates PacBio reads.

   :homepage: https://code.google.com/archive/p/pbsim
   :license: GPL-2.0-or-later
   :recipe: /`pbsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim/meta.yaml>`_

   


.. conda:package:: pbsim

   |downloads_pbsim| |docker_pbsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-9</code>,  <code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  </span></summary>
      

      ``1.0.3-9``,  ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
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

    pixi global install pbsim

to add into an existing workspace instead, run::

    pixi add pbsim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbsim

Alternatively, to install into a new environment, run::

    conda create -n envname pbsim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbsim:<tag>

(see `pbsim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbsim| image:: https://img.shields.io/conda/dn/bioconda/pbsim.svg?style=flat
   :target: https://anaconda.org/bioconda/pbsim
   :alt:   (downloads)
.. |docker_pbsim| image:: https://quay.io/repository/biocontainers/pbsim/status
   :target: https://quay.io/repository/biocontainers/pbsim
.. _`pbsim/tags`: https://quay.io/repository/biocontainers/pbsim?tab=tags


.. raw:: html

    <script>
        var package = "pbsim";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsim/README.html