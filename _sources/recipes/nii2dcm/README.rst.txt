:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nii2dcm'
.. highlight: bash

nii2dcm
=======

.. conda:recipe:: nii2dcm
   :replaces_section_title:
   :noindex:

   nii2dcm\: NIfTI to DICOM creation with Python

   :homepage: https://github.com/tomaroberts/nii2dcm
   :license: BSD / BSD-3
   :recipe: /`nii2dcm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nii2dcm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nii2dcm/meta.yaml>`_

   


.. conda:package:: nii2dcm

   |downloads_nii2dcm| |docker_nii2dcm|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on dunamai: ``1.18.0``
   :depends on matplotlib-base: ``3.6.2``
   :depends on nibabel: ``5.0.0``
   :depends on numpy: ``1.23.2``
   :depends on pydicom: ``2.3.0``
   :depends on python: ``<3.11``
   :depends on twine: ``4.0.2``

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

    pixi global install nii2dcm

to add into an existing workspace instead, run::

    pixi add nii2dcm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nii2dcm

Alternatively, to install into a new environment, run::

    conda create -n envname nii2dcm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nii2dcm:<tag>

(see `nii2dcm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nii2dcm| image:: https://img.shields.io/conda/dn/bioconda/nii2dcm.svg?style=flat
   :target: https://anaconda.org/bioconda/nii2dcm
   :alt:   (downloads)
.. |docker_nii2dcm| image:: https://quay.io/repository/biocontainers/nii2dcm/status
   :target: https://quay.io/repository/biocontainers/nii2dcm
.. _`nii2dcm/tags`: https://quay.io/repository/biocontainers/nii2dcm?tab=tags


.. raw:: html

    <script>
        var package = "nii2dcm";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nii2dcm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nii2dcm/README.html