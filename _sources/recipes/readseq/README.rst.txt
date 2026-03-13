:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readseq'
.. highlight: bash

readseq
=======

.. conda:recipe:: readseq
   :replaces_section_title:
   :noindex:

   Read \& reformat biosequences\, Java command\-line version

   :homepage: http://iubio.bio.indiana.edu/soft/molbio/readseq/java/
   :license: PUBLIC DOMAIN
   :recipe: /`readseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readseq/meta.yaml>`_

   


.. conda:package:: readseq

   |downloads_readseq| |docker_readseq|

   :versions:
      
      

      ``2.1.30-1``,  ``2.1.30-0``

      

   
   :depends on openjdk: 

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

    pixi global install readseq

to add into an existing workspace instead, run::

    pixi add readseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install readseq

Alternatively, to install into a new environment, run::

    conda create -n envname readseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/readseq:<tag>

(see `readseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_readseq| image:: https://img.shields.io/conda/dn/bioconda/readseq.svg?style=flat
   :target: https://anaconda.org/bioconda/readseq
   :alt:   (downloads)
.. |docker_readseq| image:: https://quay.io/repository/biocontainers/readseq/status
   :target: https://quay.io/repository/biocontainers/readseq
.. _`readseq/tags`: https://quay.io/repository/biocontainers/readseq?tab=tags


.. raw:: html

    <script>
        var package = "readseq";
        var versions = ["2.1.30","2.1.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readseq/README.html