:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longcalld'
.. highlight: bash

longcalld
=========

.. conda:recipe:: longcalld
   :replaces_section_title:
   :noindex:

   longcallD\: local\-haplotagging\-based small and structural variant calling

   :homepage: https://github.com/yangao07/longcallD
   :license: MIT / MIT
   :recipe: /`longcalld <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcalld>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcalld/meta.yaml>`_

   


.. conda:package:: longcalld

   |downloads_longcalld| |docker_longcalld|

   :versions:
      
      

      ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.5,<4.0a0``

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

    pixi global install longcalld

to add into an existing workspace instead, run::

    pixi add longcalld

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longcalld

Alternatively, to install into a new environment, run::

    conda create -n envname longcalld

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longcalld:<tag>

(see `longcalld/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longcalld| image:: https://img.shields.io/conda/dn/bioconda/longcalld.svg?style=flat
   :target: https://anaconda.org/bioconda/longcalld
   :alt:   (downloads)
.. |docker_longcalld| image:: https://quay.io/repository/biocontainers/longcalld/status
   :target: https://quay.io/repository/biocontainers/longcalld
.. _`longcalld/tags`: https://quay.io/repository/biocontainers/longcalld?tab=tags


.. raw:: html

    <script>
        var package = "longcalld";
        var versions = ["0.0.10","0.0.9","0.0.8","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longcalld/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longcalld/README.html