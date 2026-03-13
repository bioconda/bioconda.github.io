:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genonets'
.. highlight: bash

genonets
========

.. conda:recipe:: genonets
   :replaces_section_title:
   :noindex:

   Framework for creating and analyzing genotype networks from data.

   :homepage: https://github.com/fkhalid/genonets
   :license: MIT / MIT License
   :recipe: /`genonets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genonets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genonets/meta.yaml>`_
   :links: biotools: :biotools:`genonets`, doi: :doi:`10.1093/nar/gkw313`

   


.. conda:package:: genonets

   |downloads_genonets| |docker_genonets|

   :versions:
      
      

      ``2.0-0``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``

      

   
   :depends on numpy: ``>=1.19``
   :depends on python: 
   :depends on python-igraph: ``>=0.8.2``
   :depends on tqdm: ``>=4.49.0``

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

    pixi global install genonets

to add into an existing workspace instead, run::

    pixi add genonets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genonets

Alternatively, to install into a new environment, run::

    conda create -n envname genonets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genonets:<tag>

(see `genonets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genonets| image:: https://img.shields.io/conda/dn/bioconda/genonets.svg?style=flat
   :target: https://anaconda.org/bioconda/genonets
   :alt:   (downloads)
.. |docker_genonets| image:: https://quay.io/repository/biocontainers/genonets/status
   :target: https://quay.io/repository/biocontainers/genonets
.. _`genonets/tags`: https://quay.io/repository/biocontainers/genonets?tab=tags


.. raw:: html

    <script>
        var package = "genonets";
        var versions = ["2.0","1.1.10","1.1.8","1.1.6","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genonets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genonets/README.html