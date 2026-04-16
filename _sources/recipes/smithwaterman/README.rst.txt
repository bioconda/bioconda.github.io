:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smithwaterman'
.. highlight: bash

smithwaterman
=============

.. conda:recipe:: smithwaterman
   :replaces_section_title:
   :noindex:

   Smith\-waterman\-gotoh alignment algorithm.

   :homepage: https://github.com/ekg/smithwaterman
   :license: MIT / MIT
   :recipe: /`smithwaterman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smithwaterman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smithwaterman/meta.yaml>`_

   


.. conda:package:: smithwaterman

   |downloads_smithwaterman| |docker_smithwaterman|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

    pixi global install smithwaterman

to add into an existing workspace instead, run::

    pixi add smithwaterman

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smithwaterman

Alternatively, to install into a new environment, run::

    conda create -n envname smithwaterman

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smithwaterman:<tag>

(see `smithwaterman/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smithwaterman| image:: https://img.shields.io/conda/dn/bioconda/smithwaterman.svg?style=flat
   :target: https://anaconda.org/bioconda/smithwaterman
   :alt:   (downloads)
.. |docker_smithwaterman| image:: https://quay.io/repository/biocontainers/smithwaterman/status
   :target: https://quay.io/repository/biocontainers/smithwaterman
.. _`smithwaterman/tags`: https://quay.io/repository/biocontainers/smithwaterman?tab=tags


.. raw:: html

    <script>
        var package = "smithwaterman";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smithwaterman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smithwaterman/README.html