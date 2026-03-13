:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nolb'
.. highlight: bash

nolb
====

.. conda:recipe:: nolb
   :replaces_section_title:
   :noindex:

   NOn\-Linear rigid Block NMA approach \(NOLB\) is a conceptually simple and computationally efficient method for non\-linear normal mode analysis.

   :homepage: https://team.inria.fr/nano-d/software/nolb-normal-modes/
   :license: All rights reserved. The academic version is free.
   :recipe: /`nolb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nolb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nolb/meta.yaml>`_

   The key observation of the method is that the angular velocity of a residue can be interpreted as the result of an implicit force\, such that the motion of the residue can be considered as a pure rotation about a certain center.


.. conda:package:: nolb

   |downloads_nolb| |docker_nolb|

   :versions:
      
      

      ``1.9-0``

      

   

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

    pixi global install nolb

to add into an existing workspace instead, run::

    pixi add nolb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nolb

Alternatively, to install into a new environment, run::

    conda create -n envname nolb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nolb:<tag>

(see `nolb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nolb| image:: https://img.shields.io/conda/dn/bioconda/nolb.svg?style=flat
   :target: https://anaconda.org/bioconda/nolb
   :alt:   (downloads)
.. |docker_nolb| image:: https://quay.io/repository/biocontainers/nolb/status
   :target: https://quay.io/repository/biocontainers/nolb
.. _`nolb/tags`: https://quay.io/repository/biocontainers/nolb?tab=tags


.. raw:: html

    <script>
        var package = "nolb";
        var versions = ["1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nolb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nolb/README.html