:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bifidoannotator'
.. highlight: bash

bifidoannotator
===============

.. conda:recipe:: bifidoannotator
   :replaces_section_title:
   :noindex:

   Fine\-grained annotation of bifidobacterial enzymes involved in human\-milk glycan \(HMG\) utilization

   :homepage: https://github.com/nicholaspucci/bifidoAnnotator
   :license: MIT
   :recipe: /`bifidoannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifidoannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifidoannotator/meta.yaml>`_

   bifidoAnnotator performs hierarchical annotation of enzymes involved in human\-milk glycan \(HMG\) utilization using MMseqs2\,
   generates data matrices\, and creates publication\-ready heatmaps.



.. conda:package:: bifidoannotator

   |downloads_bifidoannotator| |docker_bifidoannotator|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on matplotlib-base: ``>=3.3.0``
   :depends on mmseqs2: 
   :depends on numpy: ``>=1.18.0``
   :depends on pandas: ``>=1.0.0``
   :depends on python: ``>=3.10``
   :depends on scipy: ``>=1.5.0``
   :depends on seaborn: ``>=0.11.0``

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

    pixi global install bifidoannotator

to add into an existing workspace instead, run::

    pixi add bifidoannotator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bifidoannotator

Alternatively, to install into a new environment, run::

    conda create -n envname bifidoannotator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bifidoannotator:<tag>

(see `bifidoannotator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bifidoannotator| image:: https://img.shields.io/conda/dn/bioconda/bifidoannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/bifidoannotator
   :alt:   (downloads)
.. |docker_bifidoannotator| image:: https://quay.io/repository/biocontainers/bifidoannotator/status
   :target: https://quay.io/repository/biocontainers/bifidoannotator
.. _`bifidoannotator/tags`: https://quay.io/repository/biocontainers/bifidoannotator?tab=tags


.. raw:: html

    <script>
        var package = "bifidoannotator";
        var versions = ["1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bifidoannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bifidoannotator/README.html