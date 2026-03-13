:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-sv-prep'
.. highlight: bash

hmftools-sv-prep
================

.. conda:recipe:: hmftools-sv-prep
   :replaces_section_title:
   :noindex:

   SV Prep generates a maximally filtered SV BAM file by identifying candidate SV junctions and extracting all reads that may provide support to that junction.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/sv-prep
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-sv-prep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sv-prep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-sv-prep/meta.yaml>`_

   


.. conda:package:: hmftools-sv-prep

   |downloads_hmftools-sv-prep| |docker_hmftools-sv-prep|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0.1-0``

      

   
   :depends on gridss: ``2.13.2 h50ea8bc_3``
   :depends on openjdk: ``>=8``
   :depends on zlib: 

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

    pixi global install hmftools-sv-prep

to add into an existing workspace instead, run::

    pixi add hmftools-sv-prep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-sv-prep

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-sv-prep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-sv-prep:<tag>

(see `hmftools-sv-prep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-sv-prep| image:: https://img.shields.io/conda/dn/bioconda/hmftools-sv-prep.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-sv-prep
   :alt:   (downloads)
.. |docker_hmftools-sv-prep| image:: https://quay.io/repository/biocontainers/hmftools-sv-prep/status
   :target: https://quay.io/repository/biocontainers/hmftools-sv-prep
.. _`hmftools-sv-prep/tags`: https://quay.io/repository/biocontainers/hmftools-sv-prep?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-sv-prep";
        var versions = ["1.2.4","1.2.3","1.2.3","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-sv-prep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-sv-prep/README.html