:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda2biocontainer'
.. highlight: bash

bioconda2biocontainer
=====================

.. conda:recipe:: bioconda2biocontainer
   :replaces_section_title:
   :noindex:

   BioContainers API client\: find biocontainer images for Bioconda packages

   :homepage: https://github.com/BioContainers/bioconda2biocontainer
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`bioconda2biocontainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda2biocontainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda2biocontainer/meta.yaml>`_

   


.. conda:package:: bioconda2biocontainer

   |downloads_bioconda2biocontainer| |docker_bioconda2biocontainer|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on python: ``>=3.5``
   :depends on requests: 

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

    pixi global install bioconda2biocontainer

to add into an existing workspace instead, run::

    pixi add bioconda2biocontainer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconda2biocontainer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconda2biocontainer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconda2biocontainer:<tag>

(see `bioconda2biocontainer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconda2biocontainer| image:: https://img.shields.io/conda/dn/bioconda/bioconda2biocontainer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda2biocontainer
   :alt:   (downloads)
.. |docker_bioconda2biocontainer| image:: https://quay.io/repository/biocontainers/bioconda2biocontainer/status
   :target: https://quay.io/repository/biocontainers/bioconda2biocontainer
.. _`bioconda2biocontainer/tags`: https://quay.io/repository/biocontainers/bioconda2biocontainer?tab=tags


.. raw:: html

    <script>
        var package = "bioconda2biocontainer";
        var versions = ["0.0.7","0.0.6","0.0.4","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda2biocontainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda2biocontainer/README.html