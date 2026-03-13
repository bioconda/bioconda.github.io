:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primalbedtools'
.. highlight: bash

primalbedtools
==============

.. conda:recipe:: primalbedtools
   :replaces_section_title:
   :noindex:

   A collection of tools for working with primer.bed files.

   :homepage: https://github.com/ChrisgKent/primalbedtools
   :license: MPL-2.0
   :recipe: /`primalbedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalbedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalbedtools/meta.yaml>`_

   


.. conda:package:: primalbedtools

   |downloads_primalbedtools| |docker_primalbedtools|

   :versions:
      
      

      ``1.0.0-0``,  ``0.11.1-0``,  ``0.10.1-0``,  ``0.9-0``,  ``0.8.1-0``,  ``0.6.2-0``

      

   
   :depends on python: ``>=3.9,<4``

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

    pixi global install primalbedtools

to add into an existing workspace instead, run::

    pixi add primalbedtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install primalbedtools

Alternatively, to install into a new environment, run::

    conda create -n envname primalbedtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/primalbedtools:<tag>

(see `primalbedtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_primalbedtools| image:: https://img.shields.io/conda/dn/bioconda/primalbedtools.svg?style=flat
   :target: https://anaconda.org/bioconda/primalbedtools
   :alt:   (downloads)
.. |docker_primalbedtools| image:: https://quay.io/repository/biocontainers/primalbedtools/status
   :target: https://quay.io/repository/biocontainers/primalbedtools
.. _`primalbedtools/tags`: https://quay.io/repository/biocontainers/primalbedtools?tab=tags


.. raw:: html

    <script>
        var package = "primalbedtools";
        var versions = ["1.0.0","0.11.1","0.10.1","0.9","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primalbedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primalbedtools/README.html