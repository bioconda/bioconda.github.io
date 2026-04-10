:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coatran'
.. highlight: bash

coatran
=======

.. conda:recipe:: coatran
   :replaces_section_title:
   :noindex:

   Coalescent tree simulation along a transmission network

   :homepage: https://github.com/niemasd/CoaTran
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`coatran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coatran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coatran/meta.yaml>`_
   :links: biotools: :biotools:`coatran`, doi: :doi:`10.1101/2020.11.10.377499`

   


.. conda:package:: coatran

   |downloads_coatran| |docker_coatran|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install coatran

to add into an existing workspace instead, run::

    pixi add coatran

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coatran

Alternatively, to install into a new environment, run::

    conda create -n envname coatran

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coatran:<tag>

(see `coatran/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coatran| image:: https://img.shields.io/conda/dn/bioconda/coatran.svg?style=flat
   :target: https://anaconda.org/bioconda/coatran
   :alt:   (downloads)
.. |docker_coatran| image:: https://quay.io/repository/biocontainers/coatran/status
   :target: https://quay.io/repository/biocontainers/coatran
.. _`coatran/tags`: https://quay.io/repository/biocontainers/coatran?tab=tags


.. raw:: html

    <script>
        var package = "coatran";
        var versions = ["0.0.4","0.0.4","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coatran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coatran/README.html