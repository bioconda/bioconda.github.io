:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidyp'
.. highlight: bash

tidyp
=====

.. conda:recipe:: tidyp
   :replaces_section_title:
   :noindex:

   Program for cleaning up and validating HTML

   :homepage: http://www.tidyp.com/
   :license: BSD-like
   :recipe: /`tidyp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidyp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidyp/meta.yaml>`_

   


.. conda:package:: tidyp

   |downloads_tidyp| |docker_tidyp|

   :versions:
      
      

      ``1.04-9``,  ``1.04-8``,  ``1.04-7``,  ``1.04-6``,  ``1.04-4``,  ``1.04-3``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``

      

   
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

    pixi global install tidyp

to add into an existing workspace instead, run::

    pixi add tidyp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tidyp

Alternatively, to install into a new environment, run::

    conda create -n envname tidyp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tidyp:<tag>

(see `tidyp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tidyp| image:: https://img.shields.io/conda/dn/bioconda/tidyp.svg?style=flat
   :target: https://anaconda.org/bioconda/tidyp
   :alt:   (downloads)
.. |docker_tidyp| image:: https://quay.io/repository/biocontainers/tidyp/status
   :target: https://quay.io/repository/biocontainers/tidyp
.. _`tidyp/tags`: https://quay.io/repository/biocontainers/tidyp?tab=tags


.. raw:: html

    <script>
        var package = "tidyp";
        var versions = ["1.04","1.04","1.04","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidyp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidyp/README.html