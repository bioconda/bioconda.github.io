:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apt-probeset-summarize'
.. highlight: bash

apt-probeset-summarize
======================

.. conda:recipe:: apt-probeset-summarize
   :replaces_section_title:
   :noindex:

   From Affymetrix Power Tools package. apt\-probeset\-summarize is program for analyzing expression arrays including 3\' IVT and exon arrays. Supports background correction \(MAS5\,RMA\)\, normalization \(linear scaling\, quantile\, sketch\)\, and summarization \(PLIER\, RMA\, MAS5\) methods.

   :homepage: https://downloads.thermofisher.com
   :license: GNU GENERAL PUBLIC LICENSE Version 2
   :recipe: /`apt-probeset-summarize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apt-probeset-summarize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apt-probeset-summarize/meta.yaml>`_

   


.. conda:package:: apt-probeset-summarize

   |downloads_apt-probeset-summarize| |docker_apt-probeset-summarize|

   :versions:
      
      

      ``2.10.0-6``,  ``2.10.0-5``,  ``2.10.0-4``,  ``2.10.0-3``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``

      

   
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

    pixi global install apt-probeset-summarize

to add into an existing workspace instead, run::

    pixi add apt-probeset-summarize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install apt-probeset-summarize

Alternatively, to install into a new environment, run::

    conda create -n envname apt-probeset-summarize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/apt-probeset-summarize:<tag>

(see `apt-probeset-summarize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_apt-probeset-summarize| image:: https://img.shields.io/conda/dn/bioconda/apt-probeset-summarize.svg?style=flat
   :target: https://anaconda.org/bioconda/apt-probeset-summarize
   :alt:   (downloads)
.. |docker_apt-probeset-summarize| image:: https://quay.io/repository/biocontainers/apt-probeset-summarize/status
   :target: https://quay.io/repository/biocontainers/apt-probeset-summarize
.. _`apt-probeset-summarize/tags`: https://quay.io/repository/biocontainers/apt-probeset-summarize?tab=tags


.. raw:: html

    <script>
        var package = "apt-probeset-summarize";
        var versions = ["2.10.0","2.10.0","2.10.0","2.10.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apt-probeset-summarize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apt-probeset-summarize/README.html