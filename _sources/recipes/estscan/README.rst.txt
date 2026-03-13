:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'estscan'
.. highlight: bash

estscan
=======

.. conda:recipe:: estscan/3.0
   :replaces_section_title:
   :noindex:

   Detects coding regions in DNA sequences even if they are of low quality

   :homepage: http://estscan.sourceforge.net
   :license: open source
   :recipe: /`estscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan>`_/`3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan/3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan/3.0/meta.yaml>`_

   


.. conda:package:: estscan

   |downloads_estscan| |docker_estscan|

   :versions:
      
      

      ``3.0-8``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install estscan

to add into an existing workspace instead, run::

    pixi add estscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install estscan

Alternatively, to install into a new environment, run::

    conda create -n envname estscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/estscan:<tag>

(see `estscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_estscan| image:: https://img.shields.io/conda/dn/bioconda/estscan.svg?style=flat
   :target: https://anaconda.org/bioconda/estscan
   :alt:   (downloads)
.. |docker_estscan| image:: https://quay.io/repository/biocontainers/estscan/status
   :target: https://quay.io/repository/biocontainers/estscan
.. _`estscan/tags`: https://quay.io/repository/biocontainers/estscan?tab=tags


.. raw:: html

    <script>
        var package = "estscan";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/estscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/estscan/README.html