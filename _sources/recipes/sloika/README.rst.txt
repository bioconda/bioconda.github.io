:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sloika'
.. highlight: bash

sloika
======

.. conda:recipe:: sloika
   :replaces_section_title:
   :noindex:

   Sloika is Oxford Nanopore Technologies\' software for training neural network models for base calling

   :homepage: https://github.com/nanoporetech/sloika
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`sloika <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sloika>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sloika/meta.yaml>`_

   


.. conda:package:: sloika

   |downloads_sloika| |docker_sloika|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends on biopython: ``>=1.63``
   :depends on h5py: ``>=2.2.1,<=2.6.0``
   :depends on hdf5: ``1.8.17*``
   :depends on libgcc: 
   :depends on numpy: ``1.12*``
   :depends on theano: ``0.8.2``

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

    pixi global install sloika

to add into an existing workspace instead, run::

    pixi add sloika

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sloika

Alternatively, to install into a new environment, run::

    conda create -n envname sloika

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sloika:<tag>

(see `sloika/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sloika| image:: https://img.shields.io/conda/dn/bioconda/sloika.svg?style=flat
   :target: https://anaconda.org/bioconda/sloika
   :alt:   (downloads)
.. |docker_sloika| image:: https://quay.io/repository/biocontainers/sloika/status
   :target: https://quay.io/repository/biocontainers/sloika
.. _`sloika/tags`: https://quay.io/repository/biocontainers/sloika?tab=tags


.. raw:: html

    <script>
        var package = "sloika";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sloika/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sloika/README.html