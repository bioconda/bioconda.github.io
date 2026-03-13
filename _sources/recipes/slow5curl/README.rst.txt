:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slow5curl'
.. highlight: bash

slow5curl
=========

.. conda:recipe:: slow5curl
   :replaces_section_title:
   :noindex:

   Tool for accessing remote BLOW5 files.

   :homepage: https://github.com/BonsonW/slow5curl
   :license: MIT
   :recipe: /`slow5curl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5curl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5curl/meta.yaml>`_

   slow5curl is a command line tool for fetching reads from remote BLOW5 files\, which is built on top of slow5lib and libcurl.


.. conda:package:: slow5curl

   |downloads_slow5curl| |docker_slow5curl|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends on curl: 
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install slow5curl

to add into an existing workspace instead, run::

    pixi add slow5curl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install slow5curl

Alternatively, to install into a new environment, run::

    conda create -n envname slow5curl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/slow5curl:<tag>

(see `slow5curl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_slow5curl| image:: https://img.shields.io/conda/dn/bioconda/slow5curl.svg?style=flat
   :target: https://anaconda.org/bioconda/slow5curl
   :alt:   (downloads)
.. |docker_slow5curl| image:: https://quay.io/repository/biocontainers/slow5curl/status
   :target: https://quay.io/repository/biocontainers/slow5curl
.. _`slow5curl/tags`: https://quay.io/repository/biocontainers/slow5curl?tab=tags


.. raw:: html

    <script>
        var package = "slow5curl";
        var versions = ["0.3.0","0.2.1","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slow5curl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slow5curl/README.html