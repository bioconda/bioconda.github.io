:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demuxem'
.. highlight: bash

demuxem
=======

.. conda:recipe:: demuxem
   :replaces_section_title:
   :noindex:

   DemuxEM is the demultiplexing module of Pegasus\, which works on cell\-hashing and nucleus\-hashing genomics data.

   :homepage: https://github.com/lilab-bcb/demuxEM
   :documentation: https://demuxEM.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`demuxem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxem/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-019-10756-2`

   


.. conda:package:: demuxem

   |downloads_demuxem| |docker_demuxem|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7.post1-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5.post1-0``

      

   
   :depends on docopt: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pegasusio: ``>=0.10.0``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 

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

    pixi global install demuxem

to add into an existing workspace instead, run::

    pixi add demuxem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install demuxem

Alternatively, to install into a new environment, run::

    conda create -n envname demuxem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/demuxem:<tag>

(see `demuxem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_demuxem| image:: https://img.shields.io/conda/dn/bioconda/demuxem.svg?style=flat
   :target: https://anaconda.org/bioconda/demuxem
   :alt:   (downloads)
.. |docker_demuxem| image:: https://quay.io/repository/biocontainers/demuxem/status
   :target: https://quay.io/repository/biocontainers/demuxem
.. _`demuxem/tags`: https://quay.io/repository/biocontainers/demuxem?tab=tags


.. raw:: html

    <script>
        var package = "demuxem";
        var versions = ["0.1.8","0.1.7.post1","0.1.7","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demuxem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demuxem/README.html