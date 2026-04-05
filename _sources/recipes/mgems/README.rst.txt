:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgems'
.. highlight: bash

mgems
=====

.. conda:recipe:: mgems
   :replaces_section_title:
   :noindex:

   mGEMS \- sequencing data binning based on probabilistic classification

   :homepage: https://github.com/PROBIC/mGEMS
   :license: MIT / MIT
   :recipe: /`mgems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgems/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000691`

   


.. conda:package:: mgems

   |downloads_mgems| |docker_mgems|

   :versions:
      
      

      ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
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

    pixi global install mgems

to add into an existing workspace instead, run::

    pixi add mgems

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mgems

Alternatively, to install into a new environment, run::

    conda create -n envname mgems

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mgems:<tag>

(see `mgems/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mgems| image:: https://img.shields.io/conda/dn/bioconda/mgems.svg?style=flat
   :target: https://anaconda.org/bioconda/mgems
   :alt:   (downloads)
.. |docker_mgems| image:: https://quay.io/repository/biocontainers/mgems/status
   :target: https://quay.io/repository/biocontainers/mgems
.. _`mgems/tags`: https://quay.io/repository/biocontainers/mgems?tab=tags


.. raw:: html

    <script>
        var package = "mgems";
        var versions = ["1.3.3","1.3.3","1.3.3","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgems/README.html