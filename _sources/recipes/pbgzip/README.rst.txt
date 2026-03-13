:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbgzip'
.. highlight: bash

pbgzip
======

.. conda:recipe:: pbgzip
   :replaces_section_title:
   :noindex:

   Parallel Block GZIP

   :homepage: https://github.com/nh13/pbgzip
   :license: MIT/Expat
   :recipe: /`pbgzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbgzip/meta.yaml>`_

   


.. conda:package:: pbgzip

   |downloads_pbgzip| |docker_pbgzip|

   :versions:
      
      

      ``2016.08.04-6``,  ``2016.08.04-5``,  ``2016.08.04-4``,  ``2016.08.04-3``,  ``2016.08.04-2``,  ``2016.08.04-1``,  ``2016.08.04-0``,  ``2015.10.28-1``,  ``2015.10.28-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install pbgzip

to add into an existing workspace instead, run::

    pixi add pbgzip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbgzip

Alternatively, to install into a new environment, run::

    conda create -n envname pbgzip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbgzip:<tag>

(see `pbgzip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbgzip| image:: https://img.shields.io/conda/dn/bioconda/pbgzip.svg?style=flat
   :target: https://anaconda.org/bioconda/pbgzip
   :alt:   (downloads)
.. |docker_pbgzip| image:: https://quay.io/repository/biocontainers/pbgzip/status
   :target: https://quay.io/repository/biocontainers/pbgzip
.. _`pbgzip/tags`: https://quay.io/repository/biocontainers/pbgzip?tab=tags


.. raw:: html

    <script>
        var package = "pbgzip";
        var versions = ["2016.08.04","2016.08.04","2016.08.04","2016.08.04","2016.08.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbgzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbgzip/README.html