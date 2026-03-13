:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diatracer'
.. highlight: bash

diatracer
=========

.. conda:recipe:: diatracer
   :replaces_section_title:
   :noindex:

   A diaPASEF spectrum\-centric analysis tool

   :homepage: https://diatracer.nesvilab.org/
   :license: Academic License
   :recipe: /`diatracer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diatracer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diatracer/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-024-55448-8`

   diaTracer is a computational tool that enables spectrum\-centric analysis of Bruker’s diaPASEF data\-independent acquisition proteomics data\,
   facilitating direct \(“spectral\-library free”\) peptide identification and quantification

   diaTracer is available freely for academic research and educational purposes only\, in accordance with the terms at https\:\/\/msfragger.arsci.com\/diatracer\/LICENSE\-ACADEMIC.pdf.



.. conda:package:: diatracer

   |downloads_diatracer| |docker_diatracer|

   :versions:
      
      

      ``1.2.5-0``

      

   
   :depends on msfragger: ``>=4.2``
   :depends on openjdk: ``>=11``
   :depends on python_abi: ``3.11.* *_cp311``

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

    pixi global install diatracer

to add into an existing workspace instead, run::

    pixi add diatracer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install diatracer

Alternatively, to install into a new environment, run::

    conda create -n envname diatracer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/diatracer:<tag>

(see `diatracer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_diatracer| image:: https://img.shields.io/conda/dn/bioconda/diatracer.svg?style=flat
   :target: https://anaconda.org/bioconda/diatracer
   :alt:   (downloads)
.. |docker_diatracer| image:: https://quay.io/repository/biocontainers/diatracer/status
   :target: https://quay.io/repository/biocontainers/diatracer
.. _`diatracer/tags`: https://quay.io/repository/biocontainers/diatracer?tab=tags


.. raw:: html

    <script>
        var package = "diatracer";
        var versions = ["1.2.5"];
    </script>





Notes
-----
The \"diatracer\" command runs the diaTracer java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diatracer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diatracer/README.html