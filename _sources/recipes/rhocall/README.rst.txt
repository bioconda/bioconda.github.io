:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhocall'
.. highlight: bash

rhocall
=======

.. conda:recipe:: rhocall
   :replaces_section_title:
   :noindex:

   Call regions of homozygosity and make tentative UPD calls.

   :homepage: https://github.com/dnil/rhocall
   :developer docs: https://github.com/dnil
   :license: GPL / GPLv3
   :recipe: /`rhocall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhocall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhocall/meta.yaml>`_

   


.. conda:package:: rhocall

   |downloads_rhocall| |docker_rhocall|

   :versions:
      
      

      ``0.5.1-5``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends on click: 
   :depends on cyvcf2: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on tk: 
   :depends on xorg-libx11: 

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

    pixi global install rhocall

to add into an existing workspace instead, run::

    pixi add rhocall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rhocall

Alternatively, to install into a new environment, run::

    conda create -n envname rhocall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rhocall:<tag>

(see `rhocall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rhocall| image:: https://img.shields.io/conda/dn/bioconda/rhocall.svg?style=flat
   :target: https://anaconda.org/bioconda/rhocall
   :alt:   (downloads)
.. |docker_rhocall| image:: https://quay.io/repository/biocontainers/rhocall/status
   :target: https://quay.io/repository/biocontainers/rhocall
.. _`rhocall/tags`: https://quay.io/repository/biocontainers/rhocall?tab=tags


.. raw:: html

    <script>
        var package = "rhocall";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhocall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhocall/README.html