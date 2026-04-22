:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kseqpp'
.. highlight: bash

kseqpp
======

.. conda:recipe:: kseqpp
   :replaces_section_title:
   :noindex:

   C\+\+11 re\-implementation of kseq by Heng Li

   :homepage: https://github.com/cartoonist/kseqpp
   :license: MIT / MIT
   :recipe: /`kseqpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kseqpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kseqpp/meta.yaml>`_

   The goal for re\-implementation of kseq is providing modern API and resource
   management while preserving its flexibility and performance. Like original
   kseq\, this parser is based on generic stream buffer and works with different
   file types.



.. conda:package:: kseqpp

   |downloads_kseqpp| |docker_kseqpp|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install kseqpp

to add into an existing workspace instead, run::

    pixi add kseqpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kseqpp

Alternatively, to install into a new environment, run::

    conda create -n envname kseqpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kseqpp:<tag>

(see `kseqpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kseqpp| image:: https://img.shields.io/conda/dn/bioconda/kseqpp.svg?style=flat
   :target: https://anaconda.org/bioconda/kseqpp
   :alt:   (downloads)
.. |docker_kseqpp| image:: https://quay.io/repository/biocontainers/kseqpp/status
   :target: https://quay.io/repository/biocontainers/kseqpp
.. _`kseqpp/tags`: https://quay.io/repository/biocontainers/kseqpp?tab=tags


.. raw:: html

    <script>
        var package = "kseqpp";
        var versions = ["1.1.2","1.1.2","1.1.1","1.1.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kseqpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kseqpp/README.html