:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagra'
.. highlight: bash

tagra
=====

.. conda:recipe:: tagra
   :replaces_section_title:
   :noindex:

   TaGra\: TAbular data preprocessing to GRAph representation.

   :homepage: https://github.com/davidetorre92/TaGra
   :license: MIT / MIT
   :recipe: /`tagra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagra/meta.yaml>`_

   


.. conda:package:: tagra

   |downloads_tagra| |docker_tagra|

   :versions:
      
      

      ``0.2.5-0``

      

   
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>=3.10``
   :depends on scikit-learn: 

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

    pixi global install tagra

to add into an existing workspace instead, run::

    pixi add tagra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tagra

Alternatively, to install into a new environment, run::

    conda create -n envname tagra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tagra:<tag>

(see `tagra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tagra| image:: https://img.shields.io/conda/dn/bioconda/tagra.svg?style=flat
   :target: https://anaconda.org/bioconda/tagra
   :alt:   (downloads)
.. |docker_tagra| image:: https://quay.io/repository/biocontainers/tagra/status
   :target: https://quay.io/repository/biocontainers/tagra
.. _`tagra/tags`: https://quay.io/repository/biocontainers/tagra?tab=tags


.. raw:: html

    <script>
        var package = "tagra";
        var versions = ["0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagra/README.html