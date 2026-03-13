:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prosic'
.. highlight: bash

prosic
======

.. conda:recipe:: prosic
   :replaces_section_title:
   :noindex:

   A highly sensitive and accurate Bayesian caller for somatic insertions and deletions.

   :homepage: https://prosic.github.io
   :license: GPLv3
   :recipe: /`prosic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosic/meta.yaml>`_

   


.. conda:package:: prosic

   |downloads_prosic| |docker_prosic|

   :versions:
      
      

      ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gsl: ``>=2.6,<2.7.0a0``
   :depends on libcblas: ``>=3.8.0,<4.0a0``
   :depends on xz: ``>=5.2.5,<5.3.0a0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install prosic

to add into an existing workspace instead, run::

    pixi add prosic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prosic

Alternatively, to install into a new environment, run::

    conda create -n envname prosic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prosic:<tag>

(see `prosic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prosic| image:: https://img.shields.io/conda/dn/bioconda/prosic.svg?style=flat
   :target: https://anaconda.org/bioconda/prosic
   :alt:   (downloads)
.. |docker_prosic| image:: https://quay.io/repository/biocontainers/prosic/status
   :target: https://quay.io/repository/biocontainers/prosic
.. _`prosic/tags`: https://quay.io/repository/biocontainers/prosic?tab=tags


.. raw:: html

    <script>
        var package = "prosic";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosic/README.html