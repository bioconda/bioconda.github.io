:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvpytor'
.. highlight: bash

cnvpytor
========

.. conda:recipe:: cnvpytor
   :replaces_section_title:
   :noindex:

   Python extension of CNVnator.

   :homepage: https://github.com/abyzovlab/CNVpytor
   :documentation: https://abyzovlab.github.io/CNVpytor
   
   :license: MIT / MIT
   :recipe: /`cnvpytor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvpytor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvpytor/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giab074`, biotools: :biotools:`cnvpytor`

   


.. conda:package:: cnvpytor

   |downloads_cnvpytor| |docker_cnvpytor|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``1.0b3-1``,  ``1.0b3-0``

      

   
   :depends on chardet: 
   :depends on h5py: ``>=2.9``
   :depends on matplotlib-base: ``>=2.2``
   :depends on numpy: ``>=1.16``
   :depends on pathlib: ``>=1.0``
   :depends on pysam: ``>=0.15``
   :depends on python: ``>=3.6``
   :depends on requests: ``>=2.0``
   :depends on scipy: ``>=1.1``
   :depends on xlsxwriter: ``>=1.3``

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

    pixi global install cnvpytor

to add into an existing workspace instead, run::

    pixi add cnvpytor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cnvpytor

Alternatively, to install into a new environment, run::

    conda create -n envname cnvpytor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cnvpytor:<tag>

(see `cnvpytor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cnvpytor| image:: https://img.shields.io/conda/dn/bioconda/cnvpytor.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvpytor
   :alt:   (downloads)
.. |docker_cnvpytor| image:: https://quay.io/repository/biocontainers/cnvpytor/status
   :target: https://quay.io/repository/biocontainers/cnvpytor
.. _`cnvpytor/tags`: https://quay.io/repository/biocontainers/cnvpytor?tab=tags


.. raw:: html

    <script>
        var package = "cnvpytor";
        var versions = ["1.3.2","1.3.1","1.3.1","1.2.1","1.0"];
    </script>





Notes
-----
The package comes with downloaded reference data\, such that \`cnvpytor \-download\` can be omitted.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvpytor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvpytor/README.html