:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tin-score-calculation'
.. highlight: bash

tin-score-calculation
=====================

.. conda:recipe:: tin-score-calculation
   :replaces_section_title:
   :noindex:

   Given a set of BAM files and a gene annotation BED file\, calculates the Transcript Integrity Number \(TIN\) for each transcript.

   :homepage: The package home page
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`tin-score-calculation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tin-score-calculation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tin-score-calculation/meta.yaml>`_

   


.. conda:package:: tin-score-calculation

   |downloads_tin-score-calculation| |docker_tin-score-calculation|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends on bx-python: ``>=0.8.10``
   :depends on guppy3: ``>=3``
   :depends on matplotlib-base: 
   :depends on pandas: ``>=0.25``
   :depends on psutil: ``>=5.8.0``
   :depends on pysam: ``>=0.16``
   :depends on python: 
   :depends on rseqc: ``>=3``

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

    pixi global install tin-score-calculation

to add into an existing workspace instead, run::

    pixi add tin-score-calculation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tin-score-calculation

Alternatively, to install into a new environment, run::

    conda create -n envname tin-score-calculation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tin-score-calculation:<tag>

(see `tin-score-calculation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tin-score-calculation| image:: https://img.shields.io/conda/dn/bioconda/tin-score-calculation.svg?style=flat
   :target: https://anaconda.org/bioconda/tin-score-calculation
   :alt:   (downloads)
.. |docker_tin-score-calculation| image:: https://quay.io/repository/biocontainers/tin-score-calculation/status
   :target: https://quay.io/repository/biocontainers/tin-score-calculation
.. _`tin-score-calculation/tags`: https://quay.io/repository/biocontainers/tin-score-calculation?tab=tags


.. raw:: html

    <script>
        var package = "tin-score-calculation";
        var versions = ["0.6.3","0.6.2","0.6.0","0.5.1","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tin-score-calculation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tin-score-calculation/README.html