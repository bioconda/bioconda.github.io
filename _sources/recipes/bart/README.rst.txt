:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bart'
.. highlight: bash

bart
====

.. conda:recipe:: bart
   :replaces_section_title:
   :noindex:

   bart \- a bacterial read type

   :homepage: https://github.com/tomdstanton/bart
   :license: MIT
   :recipe: /`bart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bart/meta.yaml>`_

   


.. conda:package:: bart

   |downloads_bart| |docker_bart|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on kma: 
   :depends on python: ``>=3.7,<=3.10``
   :depends on refseq_masher: 

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

    pixi global install bart

to add into an existing workspace instead, run::

    pixi add bart

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bart

Alternatively, to install into a new environment, run::

    conda create -n envname bart

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bart:<tag>

(see `bart/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bart| image:: https://img.shields.io/conda/dn/bioconda/bart.svg?style=flat
   :target: https://anaconda.org/bioconda/bart
   :alt:   (downloads)
.. |docker_bart| image:: https://quay.io/repository/biocontainers/bart/status
   :target: https://quay.io/repository/biocontainers/bart
.. _`bart/tags`: https://quay.io/repository/biocontainers/bart?tab=tags


.. raw:: html

    <script>
        var package = "bart";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bart/README.html