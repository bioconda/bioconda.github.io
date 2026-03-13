:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis-msi'
.. highlight: bash

mantis-msi
==========

.. conda:recipe:: mantis-msi
   :replaces_section_title:
   :noindex:

   MANTIS is a program developed for detecting microsatellite instability from paired\-end BAM files

   :homepage: https://github.com/OSU-SRLab/MANTIS/
   :license: GPL / GPL-3
   :recipe: /`mantis-msi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi/meta.yaml>`_

   MANTIS \(Microsatellite Analysis for Normal\-Tumor InStability\) is a program developed for detecting microsatellite instability from paired\-end BAM files. To perform analysis\, the program needs a tumor BAM and a matched normal BAM file \(produced using the same pipeline\) to determine the instability score between the two samples within the pair. Longer reads \(ideally\, 100 bp or longer\) are recommended\, as shorter reads are unlikely to entirely cover the microsatellite loci\, and will be discarded after failing the quality control filters.



.. conda:package:: mantis-msi

   |downloads_mantis-msi| |docker_mantis-msi|

   :versions:
      
      

      ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numpy: ``>=1.11``
   :depends on pysam: ``>=0.13``
   :depends on python: ``>=3.6``

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

    pixi global install mantis-msi

to add into an existing workspace instead, run::

    pixi add mantis-msi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mantis-msi

Alternatively, to install into a new environment, run::

    conda create -n envname mantis-msi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mantis-msi:<tag>

(see `mantis-msi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mantis-msi| image:: https://img.shields.io/conda/dn/bioconda/mantis-msi.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis-msi
   :alt:   (downloads)
.. |docker_mantis-msi| image:: https://quay.io/repository/biocontainers/mantis-msi/status
   :target: https://quay.io/repository/biocontainers/mantis-msi
.. _`mantis-msi/tags`: https://quay.io/repository/biocontainers/mantis-msi?tab=tags


.. raw:: html

    <script>
        var package = "mantis-msi";
        var versions = ["1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis-msi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis-msi/README.html