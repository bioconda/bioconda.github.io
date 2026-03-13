:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'find_differential_primers'
.. highlight: bash

find_differential_primers
=========================

.. conda:recipe:: find_differential_primers
   :replaces_section_title:
   :noindex:

   Scripts to aid the design of differential primers for diagnostic PCR.

   :homepage: https://github.com/widdowquinn/find_differential_primers
   :license: MIT / MIT
   :recipe: /`find_differential_primers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.9861`

   


.. conda:package:: find_differential_primers

   |downloads_find_differential_primers| |docker_find_differential_primers|

   :versions:
      
      

      ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.3.p1-0``

      

   
   :depends on biopython: ``<1.78``
   :depends on blast: 
   :depends on bx-python: 
   :depends on emboss: 
   :depends on primer3: ``<=1.1.4``
   :depends on prodigal: 
   :depends on python: ``>2``

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

    pixi global install find_differential_primers

to add into an existing workspace instead, run::

    pixi add find_differential_primers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install find_differential_primers

Alternatively, to install into a new environment, run::

    conda create -n envname find_differential_primers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/find_differential_primers:<tag>

(see `find_differential_primers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_find_differential_primers| image:: https://img.shields.io/conda/dn/bioconda/find_differential_primers.svg?style=flat
   :target: https://anaconda.org/bioconda/find_differential_primers
   :alt:   (downloads)
.. |docker_find_differential_primers| image:: https://quay.io/repository/biocontainers/find_differential_primers/status
   :target: https://quay.io/repository/biocontainers/find_differential_primers
.. _`find_differential_primers/tags`: https://quay.io/repository/biocontainers/find_differential_primers?tab=tags


.. raw:: html

    <script>
        var package = "find_differential_primers";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/find_differential_primers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/find_differential_primers/README.html