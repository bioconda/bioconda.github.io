:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chexalign'
.. highlight: bash

chexalign
=========

.. conda:recipe:: chexalign
   :replaces_section_title:
   :noindex:

   ChExAlign is used for alignment and quantification of ChIP\-exo crosslinking patterns.

   :homepage: https://github.com/seqcode/chexalign
   :license: MIT
   :recipe: /`chexalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexalign/meta.yaml>`_

   ChExAlign is a computational framework that aligns ChIP\-exo crosslinking patterns from multiple proteins across a set of regulatory regions\, and which detects and quantifies protein\-DNA crosslinking events within the aligned profiles. The output of the alignment approach is a set of composite profiles that represent the crosslinking signatures of the complex across analyzed regulatory regions. We then use a probabilistic mixture model to deconvolve individual crosslinking events within the aligned ChIP\-exo profiles\, enabling consistent measurements of protein\-DNA crosslinking strengths across multiple proteins.


.. conda:package:: chexalign

   |downloads_chexalign| |docker_chexalign|

   :versions:
      
      

      ``0.12-1``,  ``0.12-0``,  ``0.11-0``

      

   
   :depends on openjdk: ``>=8``

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

    pixi global install chexalign

to add into an existing workspace instead, run::

    pixi add chexalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chexalign

Alternatively, to install into a new environment, run::

    conda create -n envname chexalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chexalign:<tag>

(see `chexalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chexalign| image:: https://img.shields.io/conda/dn/bioconda/chexalign.svg?style=flat
   :target: https://anaconda.org/bioconda/chexalign
   :alt:   (downloads)
.. |docker_chexalign| image:: https://quay.io/repository/biocontainers/chexalign/status
   :target: https://quay.io/repository/biocontainers/chexalign
.. _`chexalign/tags`: https://quay.io/repository/biocontainers/chexalign?tab=tags


.. raw:: html

    <script>
        var package = "chexalign";
        var versions = ["0.12","0.12","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chexalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chexalign/README.html