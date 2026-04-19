:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplirust'
.. highlight: bash

amplirust
=========

.. conda:recipe:: amplirust
   :replaces_section_title:
   :noindex:

   In\-silico PCR primer matching and product extraction tool

   :homepage: https://github.com/erdikilic/amplirust
   :license: MIT / MIT
   :recipe: /`amplirust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplirust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplirust/meta.yaml>`_

   Amplirust is a high\-performance in\-silico PCR tool written in Rust that
   performs primer matching and PCR product extraction from FASTA sequences.
   Features include SIMD\-accelerated approximate matching\, IUPAC ambiguity
   code support\, circular genome handling\, and multi\-threaded processing.



.. conda:package:: amplirust

   |downloads_amplirust| |docker_amplirust|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.2-0``

      

   
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

    pixi global install amplirust

to add into an existing workspace instead, run::

    pixi add amplirust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amplirust

Alternatively, to install into a new environment, run::

    conda create -n envname amplirust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amplirust:<tag>

(see `amplirust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amplirust| image:: https://img.shields.io/conda/dn/bioconda/amplirust.svg?style=flat
   :target: https://anaconda.org/bioconda/amplirust
   :alt:   (downloads)
.. |docker_amplirust| image:: https://quay.io/repository/biocontainers/amplirust/status
   :target: https://quay.io/repository/biocontainers/amplirust
.. _`amplirust/tags`: https://quay.io/repository/biocontainers/amplirust?tab=tags


.. raw:: html

    <script>
        var package = "amplirust";
        var versions = ["0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplirust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplirust/README.html