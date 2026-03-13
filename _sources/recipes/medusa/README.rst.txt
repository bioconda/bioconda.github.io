:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medusa'
.. highlight: bash

medusa
======

.. conda:recipe:: medusa
   :replaces_section_title:
   :noindex:

   A draft genome scaffolder that uses multiple reference genomes in a graph\-based approach.

   :homepage: https://github.com/combogenomics/medusa
   :license: GPL >=3
   :recipe: /`medusa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa/meta.yaml>`_

   


.. conda:package:: medusa

   |downloads_medusa| |docker_medusa|

   :versions:
      
      

      ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends on biopython: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install medusa

to add into an existing workspace instead, run::

    pixi add medusa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install medusa

Alternatively, to install into a new environment, run::

    conda create -n envname medusa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/medusa:<tag>

(see `medusa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_medusa| image:: https://img.shields.io/conda/dn/bioconda/medusa.svg?style=flat
   :target: https://anaconda.org/bioconda/medusa
   :alt:   (downloads)
.. |docker_medusa| image:: https://quay.io/repository/biocontainers/medusa/status
   :target: https://quay.io/repository/biocontainers/medusa
.. _`medusa/tags`: https://quay.io/repository/biocontainers/medusa?tab=tags


.. raw:: html

    <script>
        var package = "medusa";
        var versions = ["1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medusa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medusa/README.html