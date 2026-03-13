:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gopeaks'
.. highlight: bash

gopeaks
=======

.. conda:recipe:: gopeaks
   :replaces_section_title:
   :noindex:

   Peak caller for CUT\&TAG data

   :homepage: https://github.com/maxsonBraunLab/gopeaks
   :license: MIT / MIT
   :recipe: /`gopeaks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gopeaks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gopeaks/meta.yaml>`_

   GoPeaks is a peak caller designed for CUT\&TAG\/CUT\&RUN sequencing data. GoPeaks by default works best with narrow peaks such as H3K4me3 and transcription factors. However\, broad epigenetic marks like H3K27Ac\/H3K4me1 require different the step\, slide\, and minwidth parameters. We encourage users to explore the parameters of GoPeaks to analyze their data.


.. conda:package:: gopeaks

   |downloads_gopeaks| |docker_gopeaks|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install gopeaks

to add into an existing workspace instead, run::

    pixi add gopeaks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gopeaks

Alternatively, to install into a new environment, run::

    conda create -n envname gopeaks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gopeaks:<tag>

(see `gopeaks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gopeaks| image:: https://img.shields.io/conda/dn/bioconda/gopeaks.svg?style=flat
   :target: https://anaconda.org/bioconda/gopeaks
   :alt:   (downloads)
.. |docker_gopeaks| image:: https://quay.io/repository/biocontainers/gopeaks/status
   :target: https://quay.io/repository/biocontainers/gopeaks
.. _`gopeaks/tags`: https://quay.io/repository/biocontainers/gopeaks?tab=tags


.. raw:: html

    <script>
        var package = "gopeaks";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gopeaks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gopeaks/README.html