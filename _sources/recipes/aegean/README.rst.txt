:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aegean'
.. highlight: bash

aegean
======

.. conda:recipe:: aegean
   :replaces_section_title:
   :noindex:

   The AEGeAn Toolkit provides a bundle of software tools for evaluating gene structure annotations and genome organization. The software is implemented in C and Python.

   :homepage: https://github.com/BrendelGroup/AEGeAn
   :license: ISC License
   :recipe: /`aegean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aegean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aegean/meta.yaml>`_

   


.. conda:package:: aegean

   |downloads_aegean| |docker_aegean|

   :versions:
      
      

      ``0.16.0-5``,  ``0.16.0-4``,  ``0.16.0-3``,  ``0.16.0-2``,  ``0.16.0-1``,  ``0.16.0-0``

      

   
   :depends on cairo: ``>=1.18.2,<2.0a0``
   :depends on genometools-genometools: ``>=1.6.5,<2.0a0``
   :depends on git: 
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pango: ``>=1.54.0,<2.0a0``

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

    pixi global install aegean

to add into an existing workspace instead, run::

    pixi add aegean

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aegean

Alternatively, to install into a new environment, run::

    conda create -n envname aegean

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aegean:<tag>

(see `aegean/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aegean| image:: https://img.shields.io/conda/dn/bioconda/aegean.svg?style=flat
   :target: https://anaconda.org/bioconda/aegean
   :alt:   (downloads)
.. |docker_aegean| image:: https://quay.io/repository/biocontainers/aegean/status
   :target: https://quay.io/repository/biocontainers/aegean
.. _`aegean/tags`: https://quay.io/repository/biocontainers/aegean?tab=tags


.. raw:: html

    <script>
        var package = "aegean";
        var versions = ["0.16.0","0.16.0","0.16.0","0.16.0","0.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aegean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aegean/README.html