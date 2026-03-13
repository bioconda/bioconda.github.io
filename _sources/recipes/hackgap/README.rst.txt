:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hackgap'
.. highlight: bash

hackgap
=======

.. conda:recipe:: hackgap
   :replaces_section_title:
   :noindex:

   hackgap \(hash\-based counting of k\-mers with gaps\) provides a fast jit\-compiled k\-kmer counter which supports gapped k\-mers.

   :homepage: https://gitlab.com/rahmannlab/hackgap
   :license: MIT / MIT
   :recipe: /`hackgap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hackgap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hackgap/meta.yaml>`_
   :links: doi: :doi:`10.4230/LIPICS.WABI.2022.12`

   


.. conda:package:: hackgap

   |downloads_hackgap| |docker_hackgap|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bzip2: 
   :depends on numba: ``>=0.60``
   :depends on numpy: ``>=2``
   :depends on pigz: 
   :depends on python: ``>=3.12``
   :depends on xz: 

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

    pixi global install hackgap

to add into an existing workspace instead, run::

    pixi add hackgap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hackgap

Alternatively, to install into a new environment, run::

    conda create -n envname hackgap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hackgap:<tag>

(see `hackgap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hackgap| image:: https://img.shields.io/conda/dn/bioconda/hackgap.svg?style=flat
   :target: https://anaconda.org/bioconda/hackgap
   :alt:   (downloads)
.. |docker_hackgap| image:: https://quay.io/repository/biocontainers/hackgap/status
   :target: https://quay.io/repository/biocontainers/hackgap
.. _`hackgap/tags`: https://quay.io/repository/biocontainers/hackgap?tab=tags


.. raw:: html

    <script>
        var package = "hackgap";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hackgap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hackgap/README.html