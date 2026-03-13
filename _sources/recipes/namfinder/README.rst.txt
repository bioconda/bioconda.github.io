:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'namfinder'
.. highlight: bash

namfinder
=========

.. conda:recipe:: namfinder
   :replaces_section_title:
   :noindex:

   Finds Non\-overlapping Approximate Matches \(NAMs\) between query and reference sequences using strobemers 

   :homepage: https://github.com/ksahlin/namfinder
   :license: MIT License
   :recipe: /`namfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/namfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/namfinder/meta.yaml>`_

   


.. conda:package:: namfinder

   |downloads_namfinder| |docker_namfinder|

   :versions:
      
      

      ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install namfinder

to add into an existing workspace instead, run::

    pixi add namfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install namfinder

Alternatively, to install into a new environment, run::

    conda create -n envname namfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/namfinder:<tag>

(see `namfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_namfinder| image:: https://img.shields.io/conda/dn/bioconda/namfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/namfinder
   :alt:   (downloads)
.. |docker_namfinder| image:: https://quay.io/repository/biocontainers/namfinder/status
   :target: https://quay.io/repository/biocontainers/namfinder
.. _`namfinder/tags`: https://quay.io/repository/biocontainers/namfinder?tab=tags


.. raw:: html

    <script>
        var package = "namfinder";
        var versions = ["0.1.3","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/namfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/namfinder/README.html