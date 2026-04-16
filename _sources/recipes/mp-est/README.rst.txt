:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mp-est'
.. highlight: bash

mp-est
======

.. conda:recipe:: mp-est
   :replaces_section_title:
   :noindex:

   Maximum Pseudo\-likelihood Estimation of Species Trees.

   :homepage: https://github.com/lliu1871/mp-est
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mp-est <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp-est>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp-est/meta.yaml>`_

   Maximum Pseudo\-likelihood Estimation of Species Trees


.. conda:package:: mp-est

   |downloads_mp-est| |docker_mp-est|

   :versions:
      
      

      ``3.1.0-0``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
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

    pixi global install mp-est

to add into an existing workspace instead, run::

    pixi add mp-est

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mp-est

Alternatively, to install into a new environment, run::

    conda create -n envname mp-est

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mp-est:<tag>

(see `mp-est/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mp-est| image:: https://img.shields.io/conda/dn/bioconda/mp-est.svg?style=flat
   :target: https://anaconda.org/bioconda/mp-est
   :alt:   (downloads)
.. |docker_mp-est| image:: https://quay.io/repository/biocontainers/mp-est/status
   :target: https://quay.io/repository/biocontainers/mp-est
.. _`mp-est/tags`: https://quay.io/repository/biocontainers/mp-est?tab=tags


.. raw:: html

    <script>
        var package = "mp-est";
        var versions = ["3.1.0","3.0.0","3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mp-est/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mp-est/README.html