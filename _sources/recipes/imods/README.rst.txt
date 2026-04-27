:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imods'
.. highlight: bash

imods
=====

.. conda:recipe:: imods
   :replaces_section_title:
   :noindex:

   toolkit to perform Normal Mode Analysis \(NMA\) in internal coordinates \(IC\) on both protein and nucleic acid atomic structures.

   :homepage: https://chaconlab.org/multiscale-simulations/imod
   :license: OTHER / Copyright 2018 Chaconlab.org https://chaconlab.org/images/download/License.txt
   :recipe: /`imods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imods/meta.yaml>`_

   iMOD is an versatile toolkit to perform Normal Mode Analysis \(NMA\) in internal coordinates \(IC\) on both protein and nucleic acid atomic structures. Vibrational analysis\, motion animations\, morphing trajectories and Monte\-Carlo simulations can be easily carried out at different scales of resolution using this toolkit.


.. conda:package:: imods

   |downloads_imods| |docker_imods|

   :versions:
      
      

      ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends on arpack: ``>=3.7.0,<3.7.1.0a0``

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

    pixi global install imods

to add into an existing workspace instead, run::

    pixi add imods

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install imods

Alternatively, to install into a new environment, run::

    conda create -n envname imods

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/imods:<tag>

(see `imods/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_imods| image:: https://img.shields.io/conda/dn/bioconda/imods.svg?style=flat
   :target: https://anaconda.org/bioconda/imods
   :alt:   (downloads)
.. |docker_imods| image:: https://quay.io/repository/biocontainers/imods/status
   :target: https://quay.io/repository/biocontainers/imods
.. _`imods/tags`: https://quay.io/repository/biocontainers/imods?tab=tags


.. raw:: html

    <script>
        var package = "imods";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imods/README.html