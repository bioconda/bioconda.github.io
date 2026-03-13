:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'happer'
.. highlight: bash

happer
======

.. conda:recipe:: happer
   :replaces_section_title:
   :noindex:

   Minimal Python library for generating haplotype sequences.

   :homepage: https://github.com/bioforensics/happer/
   :license: BSD / BSD License
   :recipe: /`happer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happer/meta.yaml>`_

   


.. conda:package:: happer

   |downloads_happer| |docker_happer|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on python: ``>=3``

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

    pixi global install happer

to add into an existing workspace instead, run::

    pixi add happer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install happer

Alternatively, to install into a new environment, run::

    conda create -n envname happer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/happer:<tag>

(see `happer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_happer| image:: https://img.shields.io/conda/dn/bioconda/happer.svg?style=flat
   :target: https://anaconda.org/bioconda/happer
   :alt:   (downloads)
.. |docker_happer| image:: https://quay.io/repository/biocontainers/happer/status
   :target: https://quay.io/repository/biocontainers/happer
.. _`happer/tags`: https://quay.io/repository/biocontainers/happer?tab=tags


.. raw:: html

    <script>
        var package = "happer";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/happer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/happer/README.html