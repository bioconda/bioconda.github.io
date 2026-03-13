:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psass'
.. highlight: bash

psass
=====

.. conda:recipe:: psass
   :replaces_section_title:
   :noindex:

   Comparison of pooled\-sequencing data for two populations

   :homepage: https://github.com/RomainFeron/PSASS
   :license: GPL3
   :recipe: /`psass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psass/meta.yaml>`_

   


.. conda:package:: psass

   |downloads_psass| |docker_psass|

   :versions:
      
      

      ``3.1.0-5``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.1b-1``,  ``3.0.1b-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcxx: ``>=18``
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

    pixi global install psass

to add into an existing workspace instead, run::

    pixi add psass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psass

Alternatively, to install into a new environment, run::

    conda create -n envname psass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psass:<tag>

(see `psass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psass| image:: https://img.shields.io/conda/dn/bioconda/psass.svg?style=flat
   :target: https://anaconda.org/bioconda/psass
   :alt:   (downloads)
.. |docker_psass| image:: https://quay.io/repository/biocontainers/psass/status
   :target: https://quay.io/repository/biocontainers/psass
.. _`psass/tags`: https://quay.io/repository/biocontainers/psass?tab=tags


.. raw:: html

    <script>
        var package = "psass";
        var versions = ["3.1.0","3.1.0","3.1.0","3.1.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psass/README.html