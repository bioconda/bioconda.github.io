:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longtrack'
.. highlight: bash

longtrack
=========

.. conda:recipe:: longtrack
   :replaces_section_title:
   :noindex:

   Track FMT strains using long\-read metagenomic assemblies.

   :homepage: https://github.com/fanglab/LongTrack
   :license: MIT / MIT
   :recipe: /`longtrack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longtrack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longtrack/meta.yaml>`_

   


.. conda:package:: longtrack

   |downloads_longtrack| |docker_longtrack|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bowtie2: 
   :depends on htseq: ``>=0.5.3p9``
   :depends on matplotlib-base: ``>=1.0.0``
   :depends on numpy: ``>=1.7.1``
   :depends on pandas: ``>=0.7.3``
   :depends on python: ``2.7.*``
   :depends on seaborn: ``>=0.5.0``

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

    pixi global install longtrack

to add into an existing workspace instead, run::

    pixi add longtrack

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longtrack

Alternatively, to install into a new environment, run::

    conda create -n envname longtrack

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longtrack:<tag>

(see `longtrack/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longtrack| image:: https://img.shields.io/conda/dn/bioconda/longtrack.svg?style=flat
   :target: https://anaconda.org/bioconda/longtrack
   :alt:   (downloads)
.. |docker_longtrack| image:: https://quay.io/repository/biocontainers/longtrack/status
   :target: https://quay.io/repository/biocontainers/longtrack
.. _`longtrack/tags`: https://quay.io/repository/biocontainers/longtrack?tab=tags


.. raw:: html

    <script>
        var package = "longtrack";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longtrack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longtrack/README.html