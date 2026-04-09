:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'camisim2'
.. highlight: bash

camisim2
========

.. conda:recipe:: camisim2
   :replaces_section_title:
   :noindex:

   CAMISIM models abundance distributions of microbial communities and simulates metagenome datasets.

   :homepage: https://github.com/CAMI-challenge/CAMISIM
   :license: APACHE / Apache-2.0
   :recipe: /`camisim2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/camisim2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/camisim2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-019-0633-6`, doi: :doi:`10.1038/nmeth.4458`

   


.. conda:package:: camisim2

   |downloads_camisim2| |docker_camisim2|

   :versions:
      
      

      ``2.0-0``

      

   
   :depends on conda: ``<25.3``
   :depends on gzip: 
   :depends on nextflow: ``<25``
   :depends on perl: 

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

    pixi global install camisim2

to add into an existing workspace instead, run::

    pixi add camisim2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install camisim2

Alternatively, to install into a new environment, run::

    conda create -n envname camisim2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/camisim2:<tag>

(see `camisim2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_camisim2| image:: https://img.shields.io/conda/dn/bioconda/camisim2.svg?style=flat
   :target: https://anaconda.org/bioconda/camisim2
   :alt:   (downloads)
.. |docker_camisim2| image:: https://quay.io/repository/biocontainers/camisim2/status
   :target: https://quay.io/repository/biocontainers/camisim2
.. _`camisim2/tags`: https://quay.io/repository/biocontainers/camisim2?tab=tags


.. raw:: html

    <script>
        var package = "camisim2";
        var versions = ["2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/camisim2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/camisim2/README.html