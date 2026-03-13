:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinker'
.. highlight: bash

clinker
=======

.. conda:recipe:: clinker
   :replaces_section_title:
   :noindex:

   Clinker is a bioinformatics pipeline that generates a superTranscriptome from popular fusion finder outputs \(JAFFA\, tophatFusion\, SOAP\, deFUSE\, Pizzly\, etc\)\, that can be then be either viewed in genome viewers such as IGV or through the included plotting feature developed with GViz.

   :homepage: https://github.com/Oshlack/Clinker
   :license: MIT
   :recipe: /`clinker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker/meta.yaml>`_

   


.. conda:package:: clinker

   |downloads_clinker| |docker_clinker|

   :versions:
      
      

      ``1.33-0``,  ``1.32-2``,  ``1.32-1``,  ``1.32-0``

      

   
   :depends on bioconductor-biomart: 
   :depends on bioconductor-gviz: 
   :depends on bpipe: 
   :depends on python: ``2.7.*``
   :depends on samtools: 
   :depends on star: ``>=2.5.3a``

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

    pixi global install clinker

to add into an existing workspace instead, run::

    pixi add clinker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clinker

Alternatively, to install into a new environment, run::

    conda create -n envname clinker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clinker:<tag>

(see `clinker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clinker| image:: https://img.shields.io/conda/dn/bioconda/clinker.svg?style=flat
   :target: https://anaconda.org/bioconda/clinker
   :alt:   (downloads)
.. |docker_clinker| image:: https://quay.io/repository/biocontainers/clinker/status
   :target: https://quay.io/repository/biocontainers/clinker
.. _`clinker/tags`: https://quay.io/repository/biocontainers/clinker?tab=tags


.. raw:: html

    <script>
        var package = "clinker";
        var versions = ["1.33","1.32","1.32","1.32"];
    </script>





Notes
-----
Wrapper script provided to indicate clinker is a bpipe pipeline\, provide example command from wiki\, and also a passthrough option.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinker/README.html