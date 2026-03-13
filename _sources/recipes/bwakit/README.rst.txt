:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwakit'
.. highlight: bash

bwakit
======

.. conda:recipe:: bwakit
   :replaces_section_title:
   :noindex:

   A self\-consistent installation\-free package of scripts and precompiled binaries\, providing an end\-to\-end solution to read mapping

   :homepage: https://github.com/lh3/bwa/tree/master/bwakit
   :license: GPLv3
   :recipe: /`bwakit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwakit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwakit/meta.yaml>`_

   


.. conda:package:: bwakit

   |downloads_bwakit| |docker_bwakit|

   :versions:
      
      

      ``0.7.18.dev1-0``,  ``0.7.17.dev1-1``,  ``0.7.17.dev1-0``,  ``0.7.15-3``,  ``0.7.15-2``,  ``0.7.15-1``,  ``0.7.15-0``,  ``0.7.12-0``

      

   
   :depends on bwa: ``0.7.18``
   :depends on fermi2: ``r170``
   :depends on htsbox: ``r315``
   :depends on k8: 
   :depends on perl: 
   :depends on ropebwt2: ``r187``
   :depends on samblaster: ``0.1.20``
   :depends on samtools: ``>=1.3``
   :depends on seqtk: ``r82``
   :depends on trimadap: ``r2``

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

    pixi global install bwakit

to add into an existing workspace instead, run::

    pixi add bwakit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bwakit

Alternatively, to install into a new environment, run::

    conda create -n envname bwakit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bwakit:<tag>

(see `bwakit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bwakit| image:: https://img.shields.io/conda/dn/bioconda/bwakit.svg?style=flat
   :target: https://anaconda.org/bioconda/bwakit
   :alt:   (downloads)
.. |docker_bwakit| image:: https://quay.io/repository/biocontainers/bwakit/status
   :target: https://quay.io/repository/biocontainers/bwakit
.. _`bwakit/tags`: https://quay.io/repository/biocontainers/bwakit?tab=tags


.. raw:: html

    <script>
        var package = "bwakit";
        var versions = ["0.7.18.dev1","0.7.17.dev1","0.7.17.dev1","0.7.15","0.7.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwakit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwakit/README.html