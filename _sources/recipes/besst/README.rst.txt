:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'besst'
.. highlight: bash

besst
=====

.. conda:recipe:: besst
   :replaces_section_title:
   :noindex:

   Scaffolder for genomic assemblies.

   :homepage: https://github.com/ksahlin/BESST
   :license: GPL / GPL-3.0
   :recipe: /`besst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/besst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/besst/meta.yaml>`_
   :links: biotools: :biotools:`besst`, doi: :doi:`10.1186/1471-2105-15-281`

   


.. conda:package:: besst

   |downloads_besst| |docker_besst|

   :versions:
      
      

      ``2.2.8-3``,  ``2.2.8-2``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.3-0``

      

   
   :depends on mathstats: ``>=0.2.6``
   :depends on networkx: ``>=1.9``
   :depends on pysam: ``>=0.7``
   :depends on python: ``<3``
   :depends on scipy: ``>=0.9``

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

    pixi global install besst

to add into an existing workspace instead, run::

    pixi add besst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install besst

Alternatively, to install into a new environment, run::

    conda create -n envname besst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/besst:<tag>

(see `besst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_besst| image:: https://img.shields.io/conda/dn/bioconda/besst.svg?style=flat
   :target: https://anaconda.org/bioconda/besst
   :alt:   (downloads)
.. |docker_besst| image:: https://quay.io/repository/biocontainers/besst/status
   :target: https://quay.io/repository/biocontainers/besst
.. _`besst/tags`: https://quay.io/repository/biocontainers/besst?tab=tags


.. raw:: html

    <script>
        var package = "besst";
        var versions = ["2.2.8","2.2.8","2.2.8","2.2.7","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/besst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/besst/README.html