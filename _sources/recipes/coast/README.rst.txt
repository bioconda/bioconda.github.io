:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coast'
.. highlight: bash

coast
=====

.. conda:recipe:: coast
   :replaces_section_title:
   :noindex:

   Alignment search tool that identifies similar proteomes.

   :homepage: https://gitlab.com/coast_tool/COAST
   :license: MIT / MIT
   :recipe: /`coast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coast/meta.yaml>`_

   Alignment search tool that identifies similar proteomes.



.. conda:package:: coast

   |downloads_coast| |docker_coast|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.10``
   :depends on bokeh: ``>=2.4.0``
   :depends on jinja2: ``>=3.0.0``
   :depends on pandas: ``>=1.2.0``
   :depends on python: 
   :depends on requests: ``>=2.25.1``
   :depends on seaborn: ``>=0.11.1``
   :depends on tabulate: ``>=0.8.9``

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

    pixi global install coast

to add into an existing workspace instead, run::

    pixi add coast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coast

Alternatively, to install into a new environment, run::

    conda create -n envname coast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coast:<tag>

(see `coast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coast| image:: https://img.shields.io/conda/dn/bioconda/coast.svg?style=flat
   :target: https://anaconda.org/bioconda/coast
   :alt:   (downloads)
.. |docker_coast| image:: https://quay.io/repository/biocontainers/coast/status
   :target: https://quay.io/repository/biocontainers/coast
.. _`coast/tags`: https://quay.io/repository/biocontainers/coast?tab=tags


.. raw:: html

    <script>
        var package = "coast";
        var versions = ["0.2.2","0.2.1","0.2.0","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coast/README.html