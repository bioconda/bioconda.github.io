:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomonsv'
.. highlight: bash

nanomonsv
=========

.. conda:recipe:: nanomonsv
   :replaces_section_title:
   :noindex:

   Python tools for detecting structural variation from nanopore sequence data.

   :homepage: https://github.com/friend1ws/nanomonsv
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanomonsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomonsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomonsv/meta.yaml>`_

   


.. conda:package:: nanomonsv

   |downloads_nanomonsv| |docker_nanomonsv|

   :versions:
      
      

      ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends on bedtools: ``>=2.30.0``
   :depends on bwa: ``>=0.7.17``
   :depends on htslib: 
   :depends on mafft: ``>=7.407``
   :depends on minimap2: ``>=2.24``
   :depends on numpy: ``>=1.23.0``
   :depends on parasail-python: ``>=1.2.4``
   :depends on pysam: ``>=0.19.1``
   :depends on python: ``>=3.6``
   :depends on racon: ``>=1.4.3``
   :depends on repeatmasker: ``>=4.1.1``

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

    pixi global install nanomonsv

to add into an existing workspace instead, run::

    pixi add nanomonsv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanomonsv

Alternatively, to install into a new environment, run::

    conda create -n envname nanomonsv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanomonsv:<tag>

(see `nanomonsv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanomonsv| image:: https://img.shields.io/conda/dn/bioconda/nanomonsv.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomonsv
   :alt:   (downloads)
.. |docker_nanomonsv| image:: https://quay.io/repository/biocontainers/nanomonsv/status
   :target: https://quay.io/repository/biocontainers/nanomonsv
.. _`nanomonsv/tags`: https://quay.io/repository/biocontainers/nanomonsv?tab=tags


.. raw:: html

    <script>
        var package = "nanomonsv";
        var versions = ["0.8.2","0.8.1","0.8.0","0.7.2","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomonsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomonsv/README.html