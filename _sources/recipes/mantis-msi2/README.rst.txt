:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis-msi2'
.. highlight: bash

mantis-msi2
===========

.. conda:recipe:: mantis-msi2
   :replaces_section_title:
   :noindex:

   MANTIS2 is a program developed for detecting microsatellite instability from paired\-end BAM files.

   :homepage: https://github.com/nh13/MANTIS2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mantis-msi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi2/meta.yaml>`_

   MANTIS2 \(Microsatellite Analysis for Normal\-Tumor InStability\) is a program developed for detecting microsatellite instability from paired\-end BAM files. To perform analysis\, the program needs a tumor BAM and a matched normal BAM file \(produced using the same pipeline\) to determine the instability score between the two samples within the pair. Longer reads \(ideally\, 100 bp or longer\) are recommended\, as shorter reads are unlikely to entirely cover the microsatellite loci\, and will be discarded after failing the quality control filters.  Originally developed and maintained here\: https\:\/\/github.com\/OSU\-SRLab\/MANTIS.



.. conda:package:: mantis-msi2

   |downloads_mantis-msi2| |docker_mantis-msi2|

   :versions:
      
      

      ``2.0.0-3``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.19.0``
   :depends on pysam: ``>=0.23.0``
   :depends on python: ``>=3.6,<3.10``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install mantis-msi2

to add into an existing workspace instead, run::

    pixi add mantis-msi2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mantis-msi2

Alternatively, to install into a new environment, run::

    conda create -n envname mantis-msi2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mantis-msi2:<tag>

(see `mantis-msi2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mantis-msi2| image:: https://img.shields.io/conda/dn/bioconda/mantis-msi2.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis-msi2
   :alt:   (downloads)
.. |docker_mantis-msi2| image:: https://quay.io/repository/biocontainers/mantis-msi2/status
   :target: https://quay.io/repository/biocontainers/mantis-msi2
.. _`mantis-msi2/tags`: https://quay.io/repository/biocontainers/mantis-msi2?tab=tags


.. raw:: html

    <script>
        var package = "mantis-msi2";
        var versions = ["2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis-msi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis-msi2/README.html