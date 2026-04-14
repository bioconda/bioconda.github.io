:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foci-3d'
.. highlight: bash

foci-3d
=======

.. conda:recipe:: foci-3d
   :replaces_section_title:
   :noindex:

   FOCI\-3D tools for Micro\-C transcription factor footprint analysis

   :homepage: https://github.com/aryeelab/foci-3d
   :license: MIT
   :recipe: /`foci-3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foci-3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foci-3d/meta.yaml>`_

   FOCI\-3D \(Footprinting Of Chromatin Interactions in 3D\) is a toolkit for
   analyzing transcription factor footprints from Micro\-C and related
   MNase\-based chromosome conformation capture assays.



.. conda:package:: foci-3d

   |downloads_foci-3d| |docker_foci-3d|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on htslib: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22,<2.0a0``
   :depends on pairtools: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on samtools: 
   :depends on scikit-image: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on tqdm: 

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

    pixi global install foci-3d

to add into an existing workspace instead, run::

    pixi add foci-3d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install foci-3d

Alternatively, to install into a new environment, run::

    conda create -n envname foci-3d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/foci-3d:<tag>

(see `foci-3d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_foci-3d| image:: https://img.shields.io/conda/dn/bioconda/foci-3d.svg?style=flat
   :target: https://anaconda.org/bioconda/foci-3d
   :alt:   (downloads)
.. |docker_foci-3d| image:: https://quay.io/repository/biocontainers/foci-3d/status
   :target: https://quay.io/repository/biocontainers/foci-3d
.. _`foci-3d/tags`: https://quay.io/repository/biocontainers/foci-3d?tab=tags


.. raw:: html

    <script>
        var package = "foci-3d";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foci-3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foci-3d/README.html