:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis'
.. highlight: bash

mantis
======

.. conda:recipe:: mantis
   :replaces_section_title:
   :noindex:

   Mantis\: A Fast\, Small\, and Exact Large\-Scale Sequence\-Search Index.

   :homepage: https://github.com/splatlab/mantis
   :license: BSD / BSD-3-Clause
   :recipe: /`mantis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.021`, biotools: :biotools:`mantis_index`

   


.. conda:package:: mantis

   |downloads_mantis| |docker_mantis|

   :versions:
      
      

      ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.6.0,<4.0a0``
   :depends on sdsl-lite: 

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

    pixi global install mantis

to add into an existing workspace instead, run::

    pixi add mantis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mantis

Alternatively, to install into a new environment, run::

    conda create -n envname mantis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mantis:<tag>

(see `mantis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mantis| image:: https://img.shields.io/conda/dn/bioconda/mantis.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis
   :alt:   (downloads)
.. |docker_mantis| image:: https://quay.io/repository/biocontainers/mantis/status
   :target: https://quay.io/repository/biocontainers/mantis
.. _`mantis/tags`: https://quay.io/repository/biocontainers/mantis?tab=tags


.. raw:: html

    <script>
        var package = "mantis";
        var versions = ["0.2","0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis/README.html