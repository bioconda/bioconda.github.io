:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nxtrim'
.. highlight: bash

nxtrim
======

.. conda:recipe:: nxtrim
   :replaces_section_title:
   :noindex:

   Software to remove Nextera Mate Pair adapters and categorise reads according to the orientation implied by the adapter location.

   :homepage: https://github.com/sequencing/NxTrim
   :license: BSD-2-Clause
   :recipe: /`nxtrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nxtrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nxtrim/meta.yaml>`_
   :links: biotools: :biotools:`nxtrim`, doi: :doi:`10.1093/bioinformatics/btv057`

   


.. conda:package:: nxtrim

   |downloads_nxtrim| |docker_nxtrim|

   :versions:
      
      

      ``0.4.3-5``,  ``0.4.3-4``,  ``0.4.3-3``,  ``0.4.3-2``,  ``0.4.3-1``,  ``0.4.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install nxtrim

to add into an existing workspace instead, run::

    pixi add nxtrim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nxtrim

Alternatively, to install into a new environment, run::

    conda create -n envname nxtrim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nxtrim:<tag>

(see `nxtrim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nxtrim| image:: https://img.shields.io/conda/dn/bioconda/nxtrim.svg?style=flat
   :target: https://anaconda.org/bioconda/nxtrim
   :alt:   (downloads)
.. |docker_nxtrim| image:: https://quay.io/repository/biocontainers/nxtrim/status
   :target: https://quay.io/repository/biocontainers/nxtrim
.. _`nxtrim/tags`: https://quay.io/repository/biocontainers/nxtrim?tab=tags


.. raw:: html

    <script>
        var package = "nxtrim";
        var versions = ["0.4.3","0.4.3","0.4.3","0.4.3","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nxtrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nxtrim/README.html