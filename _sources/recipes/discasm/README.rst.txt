:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discasm'
.. highlight: bash

discasm
=======

.. conda:recipe:: discasm
   :replaces_section_title:
   :noindex:

   DISCASM aims to extract reads that map to reference genomes in a discordant fashion and optionally include reads that do not map to the genome at all\, and perform a de novo transcriptome assembly of these reads. DISCASM relies on the output from STAR \(as run via STAR\-Fusion\)\, and supports de novo transcriptome assembly using Trinity or Oases. \- https\:\/\/github.com\/DISCASM\/DISCASM\/wiki

   :homepage: https://github.com/DISCASM/DISCASM
   :license: BSD-3-Clause
   :recipe: /`discasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm/meta.yaml>`_

   


.. conda:package:: discasm

   |downloads_discasm| |docker_discasm|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends on oases: ``>=0.2``
   :depends on perl: 
   :depends on pysam: ``>=0.10.0``
   :depends on python: ``<3``
   :depends on star: ``>=2.4``
   :depends on trinity: ``>=2.4``

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

    pixi global install discasm

to add into an existing workspace instead, run::

    pixi add discasm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install discasm

Alternatively, to install into a new environment, run::

    conda create -n envname discasm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/discasm:<tag>

(see `discasm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_discasm| image:: https://img.shields.io/conda/dn/bioconda/discasm.svg?style=flat
   :target: https://anaconda.org/bioconda/discasm
   :alt:   (downloads)
.. |docker_discasm| image:: https://quay.io/repository/biocontainers/discasm/status
   :target: https://quay.io/repository/biocontainers/discasm
.. _`discasm/tags`: https://quay.io/repository/biocontainers/discasm?tab=tags


.. raw:: html

    <script>
        var package = "discasm";
        var versions = ["0.1.3","0.1.3","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discasm/README.html