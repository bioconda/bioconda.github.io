:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samhaplotag'
.. highlight: bash

samhaplotag
===========

.. conda:recipe:: samhaplotag
   :replaces_section_title:
   :noindex:

   Processes haplotag barcodes in SAM format.

   :homepage: https://github.com/wtsi-hpag/SamHaplotag
   :license: MIT / MIT
   :recipe: /`samhaplotag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samhaplotag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samhaplotag/meta.yaml>`_

   Converts BC\/QT barcode SAM tags into haplotag RX\, QX and BX tags. Also contains a tool for converting barcodes from haplotag to 10x in fastq format. 


.. conda:package:: samhaplotag

   |downloads_samhaplotag| |docker_samhaplotag|

   :versions:
      
      

      ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install samhaplotag

to add into an existing workspace instead, run::

    pixi add samhaplotag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samhaplotag

Alternatively, to install into a new environment, run::

    conda create -n envname samhaplotag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samhaplotag:<tag>

(see `samhaplotag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samhaplotag| image:: https://img.shields.io/conda/dn/bioconda/samhaplotag.svg?style=flat
   :target: https://anaconda.org/bioconda/samhaplotag
   :alt:   (downloads)
.. |docker_samhaplotag| image:: https://quay.io/repository/biocontainers/samhaplotag/status
   :target: https://quay.io/repository/biocontainers/samhaplotag
.. _`samhaplotag/tags`: https://quay.io/repository/biocontainers/samhaplotag?tab=tags


.. raw:: html

    <script>
        var package = "samhaplotag";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samhaplotag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samhaplotag/README.html