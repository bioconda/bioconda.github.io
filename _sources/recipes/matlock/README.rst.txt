:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matlock'
.. highlight: bash

matlock
=======

.. conda:recipe:: matlock
   :replaces_section_title:
   :noindex:

   Simple tools for working with Hi\-C data

   :homepage: https://github.com/phasegenomics/matlock
   :license: GNU Affero General Public License v3
   :recipe: /`matlock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matlock/meta.yaml>`_

   


.. conda:package:: matlock

   |downloads_matlock| |docker_matlock|

   :versions:
      
      

      ``20181227-8``,  ``20181227-7``,  ``20181227-6``,  ``20181227-5``,  ``20181227-4``,  ``20181227-3``,  ``20181227-2``,  ``20181227-1``,  ``20181227-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
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

    pixi global install matlock

to add into an existing workspace instead, run::

    pixi add matlock

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install matlock

Alternatively, to install into a new environment, run::

    conda create -n envname matlock

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/matlock:<tag>

(see `matlock/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_matlock| image:: https://img.shields.io/conda/dn/bioconda/matlock.svg?style=flat
   :target: https://anaconda.org/bioconda/matlock
   :alt:   (downloads)
.. |docker_matlock| image:: https://quay.io/repository/biocontainers/matlock/status
   :target: https://quay.io/repository/biocontainers/matlock
.. _`matlock/tags`: https://quay.io/repository/biocontainers/matlock?tab=tags


.. raw:: html

    <script>
        var package = "matlock";
        var versions = ["20181227","20181227","20181227","20181227","20181227"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matlock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matlock/README.html