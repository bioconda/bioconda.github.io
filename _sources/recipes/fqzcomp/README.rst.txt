:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqzcomp'
.. highlight: bash

fqzcomp
=======

.. conda:recipe:: fqzcomp
   :replaces_section_title:
   :noindex:

   Fqzcomp is a basic fastq compressor\, designed primarily for high performance.

   :homepage: https://sourceforge.net/projects/fqzcomp/
   :license: BSD / BSD License
   :recipe: /`fqzcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqzcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqzcomp/meta.yaml>`_

   


.. conda:package:: fqzcomp

   |downloads_fqzcomp| |docker_fqzcomp|

   :versions:
      
      

      ``4.6-6``,  ``4.6-5``,  ``4.6-4``,  ``4.6-3``,  ``4.6-2``,  ``4.6-1``,  ``4.6-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install fqzcomp

to add into an existing workspace instead, run::

    pixi add fqzcomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fqzcomp

Alternatively, to install into a new environment, run::

    conda create -n envname fqzcomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fqzcomp:<tag>

(see `fqzcomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fqzcomp| image:: https://img.shields.io/conda/dn/bioconda/fqzcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/fqzcomp
   :alt:   (downloads)
.. |docker_fqzcomp| image:: https://quay.io/repository/biocontainers/fqzcomp/status
   :target: https://quay.io/repository/biocontainers/fqzcomp
.. _`fqzcomp/tags`: https://quay.io/repository/biocontainers/fqzcomp?tab=tags


.. raw:: html

    <script>
        var package = "fqzcomp";
        var versions = ["4.6","4.6","4.6","4.6","4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqzcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqzcomp/README.html