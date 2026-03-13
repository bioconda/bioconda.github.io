:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paragraph'
.. highlight: bash

paragraph
=========

.. conda:recipe:: paragraph
   :replaces_section_title:
   :noindex:

   Graph realignment tools for structural variants

   :homepage: https://github.com/Illumina/paragraph
   :license: Apache License 2.0
   :recipe: /`paragraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragraph/meta.yaml>`_

   


.. conda:package:: paragraph

   |downloads_paragraph| |docker_paragraph|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2b-0``,  ``2.2a-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.10.2,<1.24.0a0``
   :depends on intervaltree: 
   :depends on jsonschema: 
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on pysam: 
   :depends on python: ``>=3``
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

    pixi global install paragraph

to add into an existing workspace instead, run::

    pixi add paragraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paragraph

Alternatively, to install into a new environment, run::

    conda create -n envname paragraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paragraph:<tag>

(see `paragraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paragraph| image:: https://img.shields.io/conda/dn/bioconda/paragraph.svg?style=flat
   :target: https://anaconda.org/bioconda/paragraph
   :alt:   (downloads)
.. |docker_paragraph| image:: https://quay.io/repository/biocontainers/paragraph/status
   :target: https://quay.io/repository/biocontainers/paragraph
.. _`paragraph/tags`: https://quay.io/repository/biocontainers/paragraph?tab=tags


.. raw:: html

    <script>
        var package = "paragraph";
        var versions = ["2.3","2.3","2.2b","2.2a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paragraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paragraph/README.html