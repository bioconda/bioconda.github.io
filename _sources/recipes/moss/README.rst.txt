:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moss'
.. highlight: bash

moss
====

.. conda:recipe:: moss
   :replaces_section_title:
   :noindex:

   A multi\-sample somatic SNV caller

   :homepage: https://github.com/elkebir-group/Moss
   :license: MIT
   :recipe: /`moss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moss/meta.yaml>`_

   


.. conda:package:: moss

   |downloads_moss| |docker_moss|

   :versions:
      
      

      ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install moss

to add into an existing workspace instead, run::

    pixi add moss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install moss

Alternatively, to install into a new environment, run::

    conda create -n envname moss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/moss:<tag>

(see `moss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_moss| image:: https://img.shields.io/conda/dn/bioconda/moss.svg?style=flat
   :target: https://anaconda.org/bioconda/moss
   :alt:   (downloads)
.. |docker_moss| image:: https://quay.io/repository/biocontainers/moss/status
   :target: https://quay.io/repository/biocontainers/moss
.. _`moss/tags`: https://quay.io/repository/biocontainers/moss?tab=tags


.. raw:: html

    <script>
        var package = "moss";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moss/README.html