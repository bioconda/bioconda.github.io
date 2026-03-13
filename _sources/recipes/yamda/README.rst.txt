:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yamda'
.. highlight: bash

yamda
=====

.. conda:recipe:: yamda
   :replaces_section_title:
   :noindex:

   A highly scalable GPU\-accelerated de novo motif discovery software package

   :homepage: https://github.com/daquang/YAMDA
   :license: MIT
   :recipe: /`yamda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yamda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yamda/meta.yaml>`_
   :links: biotools: :biotools:`yamda`

   


.. conda:package:: yamda

   |downloads_yamda| |docker_yamda|

   :versions:
      
      

      ``0.1.00e9c9d-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on numpy: 
   :depends on pyfaidx: 
   :depends on python: ``>=3``
   :depends on pytorch: 
   :depends on scipy: 
   :depends on torchvision: 
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

    pixi global install yamda

to add into an existing workspace instead, run::

    pixi add yamda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yamda

Alternatively, to install into a new environment, run::

    conda create -n envname yamda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yamda:<tag>

(see `yamda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yamda| image:: https://img.shields.io/conda/dn/bioconda/yamda.svg?style=flat
   :target: https://anaconda.org/bioconda/yamda
   :alt:   (downloads)
.. |docker_yamda| image:: https://quay.io/repository/biocontainers/yamda/status
   :target: https://quay.io/repository/biocontainers/yamda
.. _`yamda/tags`: https://quay.io/repository/biocontainers/yamda?tab=tags


.. raw:: html

    <script>
        var package = "yamda";
        var versions = ["0.1.00e9c9d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yamda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yamda/README.html