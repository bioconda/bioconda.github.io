:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymix'
.. highlight: bash

pymix
=====

.. conda:recipe:: pymix
   :replaces_section_title:
   :noindex:

   Python mixture package

   :homepage: http://www.pymix.org/pymix
   :license: GPL2
   :recipe: /`pymix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix/meta.yaml>`_

   


.. conda:package:: pymix

   |downloads_pymix| |docker_pymix|

   :versions:
      
      

      ``0.8-1``,  ``0.8-0``

      

   
   :depends on ghmm: 
   :depends on glib: 
   :depends on gsl: ``>=2.2.1,<2.3.0a0``
   :depends on libgcc-ng: ``>=4.9``
   :depends on matplotlib: ``>=1.1.0,!=1.4.2,<1.5.0``
   :depends on numpy: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on xorg-libsm: 
   :depends on xorg-libxau: 
   :depends on xorg-libxdmcp: 
   :depends on xorg-libxext: 
   :depends on xorg-libxrender: 

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

    pixi global install pymix

to add into an existing workspace instead, run::

    pixi add pymix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pymix

Alternatively, to install into a new environment, run::

    conda create -n envname pymix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pymix:<tag>

(see `pymix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pymix| image:: https://img.shields.io/conda/dn/bioconda/pymix.svg?style=flat
   :target: https://anaconda.org/bioconda/pymix
   :alt:   (downloads)
.. |docker_pymix| image:: https://quay.io/repository/biocontainers/pymix/status
   :target: https://quay.io/repository/biocontainers/pymix
.. _`pymix/tags`: https://quay.io/repository/biocontainers/pymix?tab=tags


.. raw:: html

    <script>
        var package = "pymix";
        var versions = ["0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymix/README.html