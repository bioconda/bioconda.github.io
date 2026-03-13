:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gustaf'
.. highlight: bash

gustaf
======

.. conda:recipe:: gustaf
   :replaces_section_title:
   :noindex:

   Gustaf is a tool primarily designed for multi\-split mapping of sequencing reads.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/gustaf/README.rst
   :developer docs: https://github.com/seqan/seqan/tree/master/apps/gustaf
   :license: https://github.com/seqan/seqan/tree/master/apps/gustaf/LICENSE
   :recipe: /`gustaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gustaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gustaf/meta.yaml>`_

   


.. conda:package:: gustaf

   |downloads_gustaf| |docker_gustaf|

   :versions:
      
      

      ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.8-3``,  ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libxml2: ``>=2.14.5,<2.15.0a0``
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

    pixi global install gustaf

to add into an existing workspace instead, run::

    pixi add gustaf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gustaf

Alternatively, to install into a new environment, run::

    conda create -n envname gustaf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gustaf:<tag>

(see `gustaf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gustaf| image:: https://img.shields.io/conda/dn/bioconda/gustaf.svg?style=flat
   :target: https://anaconda.org/bioconda/gustaf
   :alt:   (downloads)
.. |docker_gustaf| image:: https://quay.io/repository/biocontainers/gustaf/status
   :target: https://quay.io/repository/biocontainers/gustaf
.. _`gustaf/tags`: https://quay.io/repository/biocontainers/gustaf?tab=tags


.. raw:: html

    <script>
        var package = "gustaf";
        var versions = ["1.0.10","1.0.10","1.0.8","1.0.8","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gustaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gustaf/README.html