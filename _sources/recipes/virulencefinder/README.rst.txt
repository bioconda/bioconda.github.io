:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virulencefinder'
.. highlight: bash

virulencefinder
===============

.. conda:recipe:: virulencefinder
   :replaces_section_title:
   :noindex:

   VirulenceFinder identifies virulence genes in total or partial sequenced isolates of bacteria

   :homepage: https://bitbucket.org/genomicepidemiology/virulencefinder
   :license: APACHE / Apache-2.0
   :recipe: /`virulencefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulencefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulencefinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/JCM.03617-13`

   


.. conda:package:: virulencefinder

   |downloads_virulencefinder| |docker_virulencefinder|

   :versions:
      
      

      ``3.2.0-0``,  ``3.1.0-0``,  ``2.0.4-1``,  ``2.0.4-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on blast: 
   :depends on cgecore: ``>=2.0.0``
   :depends on git: 
   :depends on kma: 
   :depends on pandas: ``>=1.4.2``
   :depends on python: ``>=3.10``
   :depends on tabulate: ``>=0.8.9``
   :depends on wget: 

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

    pixi global install virulencefinder

to add into an existing workspace instead, run::

    pixi add virulencefinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virulencefinder

Alternatively, to install into a new environment, run::

    conda create -n envname virulencefinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virulencefinder:<tag>

(see `virulencefinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virulencefinder| image:: https://img.shields.io/conda/dn/bioconda/virulencefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/virulencefinder
   :alt:   (downloads)
.. |docker_virulencefinder| image:: https://quay.io/repository/biocontainers/virulencefinder/status
   :target: https://quay.io/repository/biocontainers/virulencefinder
.. _`virulencefinder/tags`: https://quay.io/repository/biocontainers/virulencefinder?tab=tags


.. raw:: html

    <script>
        var package = "virulencefinder";
        var versions = ["3.2.0","3.1.0","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virulencefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virulencefinder/README.html