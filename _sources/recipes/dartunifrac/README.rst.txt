:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dartunifrac'
.. highlight: bash

dartunifrac
===========

.. conda:recipe:: dartunifrac
   :replaces_section_title:
   :noindex:

   DartUniFrac is an ultra\-fast UniFrac algorithm that scales to millions of samples. It was designed based on optimal balanced parenthesis and Weighted MinHash sketching.

   :homepage: https://github.com/jianshu93/DartUniFrac
   :documentation: https://github.com/jianshu93/DartUniFrac/blob/v0.3.0/README.md
   
   :license: MIT / MIT
   :recipe: /`dartunifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dartunifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dartunifrac/meta.yaml>`_

   


.. conda:package:: dartunifrac

   |downloads_dartunifrac| |docker_dartunifrac|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openblas: 
   :depends on openssl: ``>=3.6.1,<4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install dartunifrac

to add into an existing workspace instead, run::

    pixi add dartunifrac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dartunifrac

Alternatively, to install into a new environment, run::

    conda create -n envname dartunifrac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dartunifrac:<tag>

(see `dartunifrac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dartunifrac| image:: https://img.shields.io/conda/dn/bioconda/dartunifrac.svg?style=flat
   :target: https://anaconda.org/bioconda/dartunifrac
   :alt:   (downloads)
.. |docker_dartunifrac| image:: https://quay.io/repository/biocontainers/dartunifrac/status
   :target: https://quay.io/repository/biocontainers/dartunifrac
.. _`dartunifrac/tags`: https://quay.io/repository/biocontainers/dartunifrac?tab=tags


.. raw:: html

    <script>
        var package = "dartunifrac";
        var versions = ["0.3.0","0.2.9","0.2.8","0.2.7","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dartunifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dartunifrac/README.html