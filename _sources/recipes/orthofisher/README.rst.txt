:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthofisher'
.. highlight: bash

orthofisher
===========

.. conda:recipe:: orthofisher
   :replaces_section_title:
   :noindex:

   Orthofisher is a broadly applicable tool for automated gene identification and retrieval.

   :homepage: https://github.com/JLSteenwyk/orthofisher.git
   :documentation: https://jlsteenwyk.com/orthofisher/
   
   :license: MIT / MIT
   :recipe: /`orthofisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofisher/meta.yaml>`_
   :links: doi: :doi:`10.1093/g3journal/jkab250`

   


.. conda:package:: orthofisher

   |downloads_orthofisher| |docker_orthofisher|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on numpy: ``>=1.24.0``
   :depends on python: ``>=3.9``
   :depends on tqdm: ``>=4.66.1``

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

    pixi global install orthofisher

to add into an existing workspace instead, run::

    pixi add orthofisher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orthofisher

Alternatively, to install into a new environment, run::

    conda create -n envname orthofisher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orthofisher:<tag>

(see `orthofisher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orthofisher| image:: https://img.shields.io/conda/dn/bioconda/orthofisher.svg?style=flat
   :target: https://anaconda.org/bioconda/orthofisher
   :alt:   (downloads)
.. |docker_orthofisher| image:: https://quay.io/repository/biocontainers/orthofisher/status
   :target: https://quay.io/repository/biocontainers/orthofisher
.. _`orthofisher/tags`: https://quay.io/repository/biocontainers/orthofisher?tab=tags


.. raw:: html

    <script>
        var package = "orthofisher";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthofisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthofisher/README.html