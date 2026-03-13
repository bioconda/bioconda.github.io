:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meningotype'
.. highlight: bash

meningotype
===========

.. conda:recipe:: meningotype
   :replaces_section_title:
   :noindex:

   In silico serotyping and finetyping \(porA and fetA\) of Neisseria meningitidis

   :homepage: https://github.com/MDU-PHL/meningotype
   :license: GPL-3.0
   :recipe: /`meningotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meningotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meningotype/meta.yaml>`_

   


.. conda:package:: meningotype

   |downloads_meningotype| |docker_meningotype|

   :versions:
      
      

      ``0.8.6b-0``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-1``,  ``0.8.4-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on ispcr: 
   :depends on mlst: 
   :depends on python: ``>=3.12``

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

    pixi global install meningotype

to add into an existing workspace instead, run::

    pixi add meningotype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install meningotype

Alternatively, to install into a new environment, run::

    conda create -n envname meningotype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/meningotype:<tag>

(see `meningotype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_meningotype| image:: https://img.shields.io/conda/dn/bioconda/meningotype.svg?style=flat
   :target: https://anaconda.org/bioconda/meningotype
   :alt:   (downloads)
.. |docker_meningotype| image:: https://quay.io/repository/biocontainers/meningotype/status
   :target: https://quay.io/repository/biocontainers/meningotype
.. _`meningotype/tags`: https://quay.io/repository/biocontainers/meningotype?tab=tags


.. raw:: html

    <script>
        var package = "meningotype";
        var versions = ["0.8.6b","0.8.5","0.8.5","0.8.4","0.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meningotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meningotype/README.html