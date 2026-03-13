:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqstr'
.. highlight: bash

seqstr
======

.. conda:recipe:: seqstr
   :replaces_section_title:
   :noindex:

   Lightweight tool to compile simple string input into long genomic sequences

   :homepage: https://github.com/jzhoulab/Seqstr
   :license: MIT
   :recipe: /`seqstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstr/meta.yaml>`_

   Seqstr is designed to provide a concise and flexible way to specify long genomic sequences that can be used for downstream analysis. For example\, it can be used by web servers to avoid transferring long genomic sequences. Seqstr is also a format specification\, which can be implemented in different languages. We also provide a test suite for verifying an implementation.



.. conda:package:: seqstr

   |downloads_seqstr| |docker_seqstr|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on pyfaidx: ``>=0.6.3``
   :depends on python: ``>=3.7``
   :depends on requests: ``>=2.25.0``

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

    pixi global install seqstr

to add into an existing workspace instead, run::

    pixi add seqstr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqstr

Alternatively, to install into a new environment, run::

    conda create -n envname seqstr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqstr:<tag>

(see `seqstr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqstr| image:: https://img.shields.io/conda/dn/bioconda/seqstr.svg?style=flat
   :target: https://anaconda.org/bioconda/seqstr
   :alt:   (downloads)
.. |docker_seqstr| image:: https://quay.io/repository/biocontainers/seqstr/status
   :target: https://quay.io/repository/biocontainers/seqstr
.. _`seqstr/tags`: https://quay.io/repository/biocontainers/seqstr?tab=tags


.. raw:: html

    <script>
        var package = "seqstr";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqstr/README.html