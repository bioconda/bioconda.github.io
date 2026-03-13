:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transposcope'
.. highlight: bash

transposcope
============

.. conda:recipe:: transposcope
   :replaces_section_title:
   :noindex:

   A package for visualizing read coverage in areas flanking mobile element insertions.

   :homepage: https://github.com/FenyoLab/transposcope
   :license: MIT / MIT License
   :recipe: /`transposcope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposcope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposcope/meta.yaml>`_

   


.. conda:package:: transposcope

   |downloads_transposcope| |docker_transposcope|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends on biopython: ``>=1.76``
   :depends on bowtie2: ``>=2.3.5``
   :depends on numpy: ``>=1.17.4``
   :depends on pandas: ``>=0.25.1``
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3``
   :depends on samtools: ``>=1.10``

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

    pixi global install transposcope

to add into an existing workspace instead, run::

    pixi add transposcope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install transposcope

Alternatively, to install into a new environment, run::

    conda create -n envname transposcope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/transposcope:<tag>

(see `transposcope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_transposcope| image:: https://img.shields.io/conda/dn/bioconda/transposcope.svg?style=flat
   :target: https://anaconda.org/bioconda/transposcope
   :alt:   (downloads)
.. |docker_transposcope| image:: https://quay.io/repository/biocontainers/transposcope/status
   :target: https://quay.io/repository/biocontainers/transposcope
.. _`transposcope/tags`: https://quay.io/repository/biocontainers/transposcope?tab=tags


.. raw:: html

    <script>
        var package = "transposcope";
        var versions = ["2.0.1","2.0.0","2.0.0","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transposcope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transposcope/README.html