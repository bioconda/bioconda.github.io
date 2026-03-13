:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcdl'
.. highlight: bash

pcdl
====

.. conda:recipe:: pcdl
   :replaces_section_title:
   :noindex:

   physicell data loader \(pcdl\) provides a platform independent\, python3 based\, pip installable interface to transform output\, generated with the PhysiCell agent based modeling framework\, into standard formats.

   :homepage: https://github.com/elmbeech/physicelldataloader
   :documentation: https://github.com/elmbeech/physicelldataloader/blob/v3.3.8/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pcdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcdl/meta.yaml>`_

   


.. conda:package:: pcdl

   |downloads_pcdl| |docker_pcdl|

   :versions:
      
      

      ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``

      

   
   :depends on anndata: ``>=0.10.8``
   :depends on ffmpeg: 
   :depends on imagemagick: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.9,<4.0``
   :depends on requests: 
   :depends on scipy: ``>=1.13.0``
   :depends on vtk: 

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

    pixi global install pcdl

to add into an existing workspace instead, run::

    pixi add pcdl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pcdl

Alternatively, to install into a new environment, run::

    conda create -n envname pcdl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pcdl:<tag>

(see `pcdl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pcdl| image:: https://img.shields.io/conda/dn/bioconda/pcdl.svg?style=flat
   :target: https://anaconda.org/bioconda/pcdl
   :alt:   (downloads)
.. |docker_pcdl| image:: https://quay.io/repository/biocontainers/pcdl/status
   :target: https://quay.io/repository/biocontainers/pcdl
.. _`pcdl/tags`: https://quay.io/repository/biocontainers/pcdl?tab=tags


.. raw:: html

    <script>
        var package = "pcdl";
        var versions = ["3.3.8","3.3.7","3.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcdl/README.html