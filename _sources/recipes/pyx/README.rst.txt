:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyx'
.. highlight: bash

pyx
===

.. conda:recipe:: pyx
   :replaces_section_title:
   :noindex:

   Python package for the generation of PostScript\, PDF\, and SVG files

   :homepage: http://pyx.sourceforge.net/
   :license: GNU General Public License (GPL)
   :recipe: /`pyx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyx/meta.yaml>`_

   


.. conda:package:: pyx

   |downloads_pyx| |docker_pyx|

   :versions:
      
      

      ``0.14.1-1``,  ``0.14.1-0``,  ``0.12.1-1``,  ``0.12.1-0``

      

   
   :depends on python: ``>=3.6,<3.7.0a0``

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

    pixi global install pyx

to add into an existing workspace instead, run::

    pixi add pyx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyx

Alternatively, to install into a new environment, run::

    conda create -n envname pyx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyx:<tag>

(see `pyx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyx| image:: https://img.shields.io/conda/dn/bioconda/pyx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyx
   :alt:   (downloads)
.. |docker_pyx| image:: https://quay.io/repository/biocontainers/pyx/status
   :target: https://quay.io/repository/biocontainers/pyx
.. _`pyx/tags`: https://quay.io/repository/biocontainers/pyx?tab=tags


.. raw:: html

    <script>
        var package = "pyx";
        var versions = ["0.14.1","0.14.1","0.12.1","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyx/README.html