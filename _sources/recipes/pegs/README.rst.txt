:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegs'
.. highlight: bash

pegs
====

.. conda:recipe:: pegs
   :replaces_section_title:
   :noindex:

   Peak\-set Enrichment of Gene\-Sets \(PEGS\)

   :homepage: https://github.com/fls-bioinformatics-core/pegs
   :documentation: https://pegs.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegs/meta.yaml>`_

   


.. conda:package:: pegs

   |downloads_pegs| |docker_pegs|

   :versions:
      
      

      ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      

   
   :depends on matplotlib-base: ``3.3.4``
   :depends on numpy: ``1.19.5``
   :depends on pathlib2: 
   :depends on pillow: ``8.1.1``
   :depends on python: ``>=3.6``
   :depends on scipy: ``1.5``
   :depends on seaborn: ``0.11.1``
   :depends on xlsxwriter: ``>=0.8.4``

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

    pixi global install pegs

to add into an existing workspace instead, run::

    pixi add pegs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pegs

Alternatively, to install into a new environment, run::

    conda create -n envname pegs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pegs:<tag>

(see `pegs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pegs| image:: https://img.shields.io/conda/dn/bioconda/pegs.svg?style=flat
   :target: https://anaconda.org/bioconda/pegs
   :alt:   (downloads)
.. |docker_pegs| image:: https://quay.io/repository/biocontainers/pegs/status
   :target: https://quay.io/repository/biocontainers/pegs
.. _`pegs/tags`: https://quay.io/repository/biocontainers/pegs?tab=tags


.. raw:: html

    <script>
        var package = "pegs";
        var versions = ["0.6.6","0.6.5","0.6.4","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegs/README.html