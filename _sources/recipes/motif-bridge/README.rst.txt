:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motif-bridge'
.. highlight: bash

motif-bridge
============

.. conda:recipe:: motif-bridge
   :replaces_section_title:
   :noindex:

   Bidirectional converter between MEME and HOMER motif formats

   :homepage: https://github.com/zengyuanzhao/motif-bridge
   :license: MIT
   :recipe: /`motif-bridge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motif-bridge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motif-bridge/meta.yaml>`_

   Cross\-language toolkit \(Perl\/Python\/Rust\) for converting transcription
   factor binding motifs between MEME and HOMER formats\, enabling seamless
   interoperability in ChIP\-seq analysis pipelines.



.. conda:package:: motif-bridge

   |downloads_motif-bridge| |docker_motif-bridge|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``

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

    pixi global install motif-bridge

to add into an existing workspace instead, run::

    pixi add motif-bridge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install motif-bridge

Alternatively, to install into a new environment, run::

    conda create -n envname motif-bridge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/motif-bridge:<tag>

(see `motif-bridge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_motif-bridge| image:: https://img.shields.io/conda/dn/bioconda/motif-bridge.svg?style=flat
   :target: https://anaconda.org/bioconda/motif-bridge
   :alt:   (downloads)
.. |docker_motif-bridge| image:: https://quay.io/repository/biocontainers/motif-bridge/status
   :target: https://quay.io/repository/biocontainers/motif-bridge
.. _`motif-bridge/tags`: https://quay.io/repository/biocontainers/motif-bridge?tab=tags


.. raw:: html

    <script>
        var package = "motif-bridge";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motif-bridge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motif-bridge/README.html