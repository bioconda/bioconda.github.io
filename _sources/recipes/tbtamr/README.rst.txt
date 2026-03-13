:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbtamr'
.. highlight: bash

tbtamr
======

.. conda:recipe:: tbtamr
   :replaces_section_title:
   :noindex:

   A tool implementing TB\-Profiler for reporting of genomic DST for M. tuberculosis in a CPHL

   :homepage: https://github.com/MDU-PHL/tbtamr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tbtamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbtamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbtamr/meta.yaml>`_

   


.. conda:package:: tbtamr

   |downloads_tbtamr| |docker_tbtamr|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends on mutamr: 
   :depends on pandas: 
   :depends on python: ``>=3.10``
   :depends on setuptools: 
   :depends on tabulate: 
   :depends on unidecode: 

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

    pixi global install tbtamr

to add into an existing workspace instead, run::

    pixi add tbtamr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tbtamr

Alternatively, to install into a new environment, run::

    conda create -n envname tbtamr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tbtamr:<tag>

(see `tbtamr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tbtamr| image:: https://img.shields.io/conda/dn/bioconda/tbtamr.svg?style=flat
   :target: https://anaconda.org/bioconda/tbtamr
   :alt:   (downloads)
.. |docker_tbtamr| image:: https://quay.io/repository/biocontainers/tbtamr/status
   :target: https://quay.io/repository/biocontainers/tbtamr
.. _`tbtamr/tags`: https://quay.io/repository/biocontainers/tbtamr?tab=tags


.. raw:: html

    <script>
        var package = "tbtamr";
        var versions = ["1.0.3","1.0.2","1.0.2","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbtamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbtamr/README.html