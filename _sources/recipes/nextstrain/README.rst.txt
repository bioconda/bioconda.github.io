:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextstrain'
.. highlight: bash

nextstrain
==========

.. conda:recipe:: nextstrain
   :replaces_section_title:
   :noindex:

   Nextstrain toolchain \(meta\-package\)

   :homepage: https://nextstrain.org
   :documentation: https://docs.nextstrain.org/
   
   :developer docs: https://github.com/nextstrain/
   :license: The license for this meta-package is MIT; individual tools vary.

   :recipe: /`nextstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty407`

   Nextstrain is an open\-source project to harness the scientific and public health potential of pathogen genome data.  It includes a collection of open\-source tools to aid in our understanding of pathogen spread and evolution\, especially in outbreak scenarios.  These tools are designed to be used with a wide range of data sources and designed to be modular so they can be replaced with your own tooling when necessary.



.. conda:package:: nextstrain

   |downloads_nextstrain| |docker_nextstrain|

   :versions:
      
      

      ``20200304-2``,  ``20200304-1``,  ``20200304-0``

      

   
   :depends on augur: 
   :depends on auspice: 
   :depends on awscli: 
   :depends on git: 
   :depends on nextclade: 
   :depends on nextstrain-cli: 
   :depends on pip: 

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

    pixi global install nextstrain

to add into an existing workspace instead, run::

    pixi add nextstrain

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextstrain

Alternatively, to install into a new environment, run::

    conda create -n envname nextstrain

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextstrain:<tag>

(see `nextstrain/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextstrain| image:: https://img.shields.io/conda/dn/bioconda/nextstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/nextstrain
   :alt:   (downloads)
.. |docker_nextstrain| image:: https://quay.io/repository/biocontainers/nextstrain/status
   :target: https://quay.io/repository/biocontainers/nextstrain
.. _`nextstrain/tags`: https://quay.io/repository/biocontainers/nextstrain?tab=tags


.. raw:: html

    <script>
        var package = "nextstrain";
        var versions = ["20200304","20200304","20200304"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextstrain/README.html