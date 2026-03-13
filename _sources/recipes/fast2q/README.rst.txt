:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast2q'
.. highlight: bash

fast2q
======

.. conda:recipe:: fast2q
   :replaces_section_title:
   :noindex:

   A Python3 program that counts sequence occurrences in FASTQ files.

   :homepage: https://github.com/afombravo/2FAST2Q
   :license: GPL3 / GPL-3.0-only
   :recipe: /`fast2q <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast2q>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast2q/meta.yaml>`_

   


.. conda:package:: fast2q

   |downloads_fast2q| |docker_fast2q|

   :versions:
      
      

      ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.8-0``,  ``2.7.7-0``,  ``2.7.4-0``,  ``2.7.2-0``

      

   
   :depends on colorama: 
   :depends on dataclasses: 
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: 
   :depends on psutil: 
   :depends on python: 
   :depends on tqdm: 

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

    pixi global install fast2q

to add into an existing workspace instead, run::

    pixi add fast2q

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fast2q

Alternatively, to install into a new environment, run::

    conda create -n envname fast2q

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fast2q:<tag>

(see `fast2q/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fast2q| image:: https://img.shields.io/conda/dn/bioconda/fast2q.svg?style=flat
   :target: https://anaconda.org/bioconda/fast2q
   :alt:   (downloads)
.. |docker_fast2q| image:: https://quay.io/repository/biocontainers/fast2q/status
   :target: https://quay.io/repository/biocontainers/fast2q
.. _`fast2q/tags`: https://quay.io/repository/biocontainers/fast2q?tab=tags


.. raw:: html

    <script>
        var package = "fast2q";
        var versions = ["2.8.1","2.8.0","2.7.8","2.7.7","2.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast2q/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast2q/README.html