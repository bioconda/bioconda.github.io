:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proovframe'
.. highlight: bash

proovframe
==========

.. conda:recipe:: proovframe
   :replaces_section_title:
   :noindex:

   frame\-shift correction for long read \(meta\)genomics

   :homepage: https://github.com/thackl/proovframe
   :license: MIT / MIT
   :recipe: /`proovframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proovframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proovframe/meta.yaml>`_

   Gene prediction on long reads\, aka PacBio and Nanopore\, is often impaired by indels causing frameshift. 
   Proovframe detects and corrects frameshifts in coding sequences from raw long reads or long\-read derived assemblies.



.. conda:package:: proovframe

   |downloads_proovframe| |docker_proovframe|

   :versions:
      
      

      ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends on diamond: ``>=2.0.3``
   :depends on minimap2: 
   :depends on perl: 
   :depends on perl-data-dumper: 
   :depends on perl-file-path: 
   :depends on perl-findbin: 
   :depends on perl-getopt-long: 
   :depends on perl-text-wrap: 
   :depends on seqkit: 

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

    pixi global install proovframe

to add into an existing workspace instead, run::

    pixi add proovframe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proovframe

Alternatively, to install into a new environment, run::

    conda create -n envname proovframe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proovframe:<tag>

(see `proovframe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proovframe| image:: https://img.shields.io/conda/dn/bioconda/proovframe.svg?style=flat
   :target: https://anaconda.org/bioconda/proovframe
   :alt:   (downloads)
.. |docker_proovframe| image:: https://quay.io/repository/biocontainers/proovframe/status
   :target: https://quay.io/repository/biocontainers/proovframe
.. _`proovframe/tags`: https://quay.io/repository/biocontainers/proovframe?tab=tags


.. raw:: html

    <script>
        var package = "proovframe";
        var versions = ["0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proovframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proovframe/README.html