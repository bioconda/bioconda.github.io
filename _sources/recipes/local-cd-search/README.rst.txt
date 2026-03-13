:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'local-cd-search'
.. highlight: bash

local-cd-search
===============

.. conda:recipe:: local-cd-search
   :replaces_section_title:
   :noindex:

   Protein annotation using local PSSM databases from CDD.

   :homepage: https://github.com/apcamargo/local-cd-search
   :license: MIT / MIT
   :recipe: /`local-cd-search <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/local-cd-search>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/local-cd-search/meta.yaml>`_

   


.. conda:package:: local-cd-search

   |downloads_local-cd-search| |docker_local-cd-search|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on blast: ``>=2.16.0,<3``
   :depends on click: ``>=8.3``
   :depends on python: ``>=3.10``
   :depends on rich: ``>=14.2``
   :depends on rich-click: ``>=1.9``
   :depends on rpsbproc: ``>=0.5,<0.6``

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

    pixi global install local-cd-search

to add into an existing workspace instead, run::

    pixi add local-cd-search

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install local-cd-search

Alternatively, to install into a new environment, run::

    conda create -n envname local-cd-search

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/local-cd-search:<tag>

(see `local-cd-search/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_local-cd-search| image:: https://img.shields.io/conda/dn/bioconda/local-cd-search.svg?style=flat
   :target: https://anaconda.org/bioconda/local-cd-search
   :alt:   (downloads)
.. |docker_local-cd-search| image:: https://quay.io/repository/biocontainers/local-cd-search/status
   :target: https://quay.io/repository/biocontainers/local-cd-search
.. _`local-cd-search/tags`: https://quay.io/repository/biocontainers/local-cd-search?tab=tags


.. raw:: html

    <script>
        var package = "local-cd-search";
        var versions = ["0.3.1","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/local-cd-search/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/local-cd-search/README.html