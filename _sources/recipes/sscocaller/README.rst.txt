:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sscocaller'
.. highlight: bash

sscocaller
==========

.. conda:recipe:: sscocaller
   :replaces_section_title:
   :noindex:

   Haplotyping single\-cell DNA sequenced gamete cells.

   :homepage: https://gitlab.svi.edu.au/biocellgen-public/sscocaller
   :license: MIT
   :recipe: /`sscocaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sscocaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sscocaller/meta.yaml>`_
   :links: biotools: :biotools:`sscocaller`

   


.. conda:package:: sscocaller

   |downloads_sscocaller| |docker_sscocaller|

   :versions:
      
      

      ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=10.4.0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``
   :depends on zlib: ``>=1.2.13,<1.3.0a0``

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

    pixi global install sscocaller

to add into an existing workspace instead, run::

    pixi add sscocaller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sscocaller

Alternatively, to install into a new environment, run::

    conda create -n envname sscocaller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sscocaller:<tag>

(see `sscocaller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sscocaller| image:: https://img.shields.io/conda/dn/bioconda/sscocaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sscocaller
   :alt:   (downloads)
.. |docker_sscocaller| image:: https://quay.io/repository/biocontainers/sscocaller/status
   :target: https://quay.io/repository/biocontainers/sscocaller
.. _`sscocaller/tags`: https://quay.io/repository/biocontainers/sscocaller?tab=tags


.. raw:: html

    <script>
        var package = "sscocaller";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sscocaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sscocaller/README.html