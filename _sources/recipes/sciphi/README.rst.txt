:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sciphi'
.. highlight: bash

sciphi
======

.. conda:recipe:: sciphi
   :replaces_section_title:
   :noindex:

   Single\-cell mutation identification via phylogenetic inference

   :homepage: https://github.com/cbg-ethz/SCIPhI
   :license: GNU GENERAL PUBLIC LICENSE Version 3 for SCIPhI and Boost Software License - Version 1.0 for dlib (as an upstream project)
   :recipe: /`sciphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphi/meta.yaml>`_

   


.. conda:package:: sciphi

   |downloads_sciphi| |docker_sciphi|

   :versions:
      
      

      ``0.1.7-6``,  ``0.1.7-5``,  ``0.1.7-4``,  ``0.1.7-3``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install sciphi

to add into an existing workspace instead, run::

    pixi add sciphi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sciphi

Alternatively, to install into a new environment, run::

    conda create -n envname sciphi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sciphi:<tag>

(see `sciphi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sciphi| image:: https://img.shields.io/conda/dn/bioconda/sciphi.svg?style=flat
   :target: https://anaconda.org/bioconda/sciphi
   :alt:   (downloads)
.. |docker_sciphi| image:: https://quay.io/repository/biocontainers/sciphi/status
   :target: https://quay.io/repository/biocontainers/sciphi
.. _`sciphi/tags`: https://quay.io/repository/biocontainers/sciphi?tab=tags


.. raw:: html

    <script>
        var package = "sciphi";
        var versions = ["0.1.7","0.1.7","0.1.7","0.1.7","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sciphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sciphi/README.html