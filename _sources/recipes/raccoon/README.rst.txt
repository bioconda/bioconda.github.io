:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raccoon'
.. highlight: bash

raccoon
=======

.. conda:recipe:: raccoon
   :replaces_section_title:
   :noindex:

   Raccoon \- Rigorous Alignment Curation\: Cleanup Of Outliers and Noise.

   :homepage: https://github.com/artic-network/raccoon
   :documentation: https://github.com/artic-network/raccoon/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`raccoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raccoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raccoon/meta.yaml>`_

   


.. conda:package:: raccoon

   |downloads_raccoon| |docker_raccoon|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends on baltic: 
   :depends on biopython: ``>=1.79``
   :depends on jinja2: ``>=3.1.0``
   :depends on matplotlib-base: ``>=3.3.1``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on plotly: ``>=5.0.0``
   :depends on python: ``>=3.10``
   :depends on scipy: 
   :depends on seaborn: 
   :depends on unidecode: ``>=1.3.0``

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

    pixi global install raccoon

to add into an existing workspace instead, run::

    pixi add raccoon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install raccoon

Alternatively, to install into a new environment, run::

    conda create -n envname raccoon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/raccoon:<tag>

(see `raccoon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_raccoon| image:: https://img.shields.io/conda/dn/bioconda/raccoon.svg?style=flat
   :target: https://anaconda.org/bioconda/raccoon
   :alt:   (downloads)
.. |docker_raccoon| image:: https://quay.io/repository/biocontainers/raccoon/status
   :target: https://quay.io/repository/biocontainers/raccoon
.. _`raccoon/tags`: https://quay.io/repository/biocontainers/raccoon?tab=tags


.. raw:: html

    <script>
        var package = "raccoon";
        var versions = ["1.0.2","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raccoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raccoon/README.html