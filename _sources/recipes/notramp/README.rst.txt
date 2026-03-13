:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'notramp'
.. highlight: bash

notramp
=======

.. conda:recipe:: notramp
   :replaces_section_title:
   :noindex:

   Super\-fast Normalization and Trimming for Amplicon Sequencing Data \(Long\- and Short\-read\)

   :homepage: https://github.com/simakro/NoTrAmp.git
   :documentation: https://github.com/simakro/NoTrAmp/blob/main/README.md
   
   :license: BSD / BSD-2
   :recipe: /`notramp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/notramp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/notramp/meta.yaml>`_

   NoTrAmp is a Tool for super fast trimming and read\-depth normalization of amplicon reads. It is designed to be used in amplicon\-tiling panels \(or similar multiplexed amplicon sequencing approaches\) to cap coverage of each amplicon \(if desired\) and to trim amplicons to their appropriate length removing barcodes\, adpaters and primers \(if desired\) in a single clipping step.

   NoTrAmp is suitable for use with both long \(e.g. ONT\/PacBio\) and short reads \(e.g Illumina\). When using reads that are significantly shorter than amplicon sizes\, you should adjust the minimum required alignment length using the \-\-set\_min\_len argument.

   See the projects \[home\]\(https\:\/\/github.com\/simakro\/NoTrAmp\) for usage and additional documentation.


.. conda:package:: notramp

   |downloads_notramp| |docker_notramp|

   :versions:
      
      

      ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.0.5-0``

      

   
   :depends on minimap2: 
   :depends on psutil: 
   :depends on python: 

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

    pixi global install notramp

to add into an existing workspace instead, run::

    pixi add notramp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install notramp

Alternatively, to install into a new environment, run::

    conda create -n envname notramp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/notramp:<tag>

(see `notramp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_notramp| image:: https://img.shields.io/conda/dn/bioconda/notramp.svg?style=flat
   :target: https://anaconda.org/bioconda/notramp
   :alt:   (downloads)
.. |docker_notramp| image:: https://quay.io/repository/biocontainers/notramp/status
   :target: https://quay.io/repository/biocontainers/notramp
.. _`notramp/tags`: https://quay.io/repository/biocontainers/notramp?tab=tags


.. raw:: html

    <script>
        var package = "notramp";
        var versions = ["1.1.9","1.1.8","1.1.7","1.1.6","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/notramp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/notramp/README.html