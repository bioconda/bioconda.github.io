:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast-pype'
.. highlight: bash

beast-pype
==========

.. conda:recipe:: beast-pype
   :replaces_section_title:
   :noindex:

   A package of BEAST 2 pipelines for phylodynamics.

   :homepage: https://github.com/m-d-grunnill/BEAST_pype
   :license: GPL-2.0-only
   :recipe: /`beast-pype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast-pype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast-pype/meta.yaml>`_

   


.. conda:package:: beast-pype

   |downloads_beast-pype| |docker_beast-pype|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.2-0``

      

   
   :depends on arviz: ``>=0.23.0``
   :depends on bash_kernel: ``>=0.10.0``
   :depends on beast2: ``>=2.6.3``
   :depends on beast2-xml: ``>=1.5.0``
   :depends on biopython: ``>=1.86``
   :depends on click: ``>=8.3.1``
   :depends on dark-matter: ``>=5.1.2``
   :depends on ete3: ``>=3.1.1``
   :depends on ipykernel: ``>=4.3.1``
   :depends on ipywidgets: ``>=8.1.8``
   :depends on iqtree: ``>=3.0.1``
   :depends on jupyter: ``>=1.1.1``
   :depends on matplotlib-base: ``>=3.10.8``
   :depends on nbconvert: ``>=7.16.6``
   :depends on nbformat: ``>=5.10.4``
   :depends on numpy: ``>=2.4.0``
   :depends on pandas: ``>=2.3.3``
   :depends on papermill: ``>=2.6.0``
   :depends on parallel: ``>=2051122``
   :depends on python: ``>=3.10``
   :depends on python-dateutil: ``>=2.9.0``
   :depends on pyyaml: ``>=6.0.3``
   :depends on scipy: ``>=1.16.3``
   :depends on seaborn: ``>=0.13.2``
   :depends on seqkit: ``>=2.12.0``
   :depends on treetime: ``>=0.11.4``
   :depends on xarray: ``>=2025.12.0``

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

    pixi global install beast-pype

to add into an existing workspace instead, run::

    pixi add beast-pype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beast-pype

Alternatively, to install into a new environment, run::

    conda create -n envname beast-pype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beast-pype:<tag>

(see `beast-pype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beast-pype| image:: https://img.shields.io/conda/dn/bioconda/beast-pype.svg?style=flat
   :target: https://anaconda.org/bioconda/beast-pype
   :alt:   (downloads)
.. |docker_beast-pype| image:: https://quay.io/repository/biocontainers/beast-pype/status
   :target: https://quay.io/repository/biocontainers/beast-pype
.. _`beast-pype/tags`: https://quay.io/repository/biocontainers/beast-pype?tab=tags


.. raw:: html

    <script>
        var package = "beast-pype";
        var versions = ["0.2.3","0.2.2","0.2.1","0.2.0","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast-pype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast-pype/README.html