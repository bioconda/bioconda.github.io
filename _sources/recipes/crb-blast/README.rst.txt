:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crb-blast'
.. highlight: bash

crb-blast
=========

.. conda:recipe:: crb-blast
   :replaces_section_title:
   :noindex:

   Conditional Reciprocal Best BLAST \- high confidence ortholog assignment.

   :homepage: https://github.com/cboursnell/crb-blast
   :license: MIT
   :recipe: /`crb-blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crb-blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crb-blast/meta.yaml>`_

   


.. conda:package:: crb-blast

   |downloads_crb-blast| |docker_crb-blast|

   :versions:
      
      

      ``0.6.9-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``

      

   
   :depends on blast: 
   :depends on ruby: ``>=2.4.4``

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

    pixi global install crb-blast

to add into an existing workspace instead, run::

    pixi add crb-blast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crb-blast

Alternatively, to install into a new environment, run::

    conda create -n envname crb-blast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crb-blast:<tag>

(see `crb-blast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crb-blast| image:: https://img.shields.io/conda/dn/bioconda/crb-blast.svg?style=flat
   :target: https://anaconda.org/bioconda/crb-blast
   :alt:   (downloads)
.. |docker_crb-blast| image:: https://quay.io/repository/biocontainers/crb-blast/status
   :target: https://quay.io/repository/biocontainers/crb-blast
.. _`crb-blast/tags`: https://quay.io/repository/biocontainers/crb-blast?tab=tags


.. raw:: html

    <script>
        var package = "crb-blast";
        var versions = ["0.6.9","0.6.6","0.6.6","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crb-blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crb-blast/README.html