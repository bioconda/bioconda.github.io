:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fingerprintscan'
.. highlight: bash

fingerprintscan
===============

.. conda:recipe:: fingerprintscan
   :replaces_section_title:
   :noindex:

   Search against FingerPRINTScan with a protein query sequence to identify the closest matching PRINTS sequence motif fingerprints in a protein sequence.

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: GPL
   :recipe: /`fingerprintscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fingerprintscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fingerprintscan/meta.yaml>`_

   


.. conda:package:: fingerprintscan

   |downloads_fingerprintscan| |docker_fingerprintscan|

   :versions:
      
      

      ``3_597-5``,  ``3_597-4``,  ``3_597-3``,  ``3_597-2``,  ``3_597-1``,  ``3_597-0``

      

   
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

    pixi global install fingerprintscan

to add into an existing workspace instead, run::

    pixi add fingerprintscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fingerprintscan

Alternatively, to install into a new environment, run::

    conda create -n envname fingerprintscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fingerprintscan:<tag>

(see `fingerprintscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fingerprintscan| image:: https://img.shields.io/conda/dn/bioconda/fingerprintscan.svg?style=flat
   :target: https://anaconda.org/bioconda/fingerprintscan
   :alt:   (downloads)
.. |docker_fingerprintscan| image:: https://quay.io/repository/biocontainers/fingerprintscan/status
   :target: https://quay.io/repository/biocontainers/fingerprintscan
.. _`fingerprintscan/tags`: https://quay.io/repository/biocontainers/fingerprintscan?tab=tags


.. raw:: html

    <script>
        var package = "fingerprintscan";
        var versions = ["3_597","3_597","3_597","3_597","3_597"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fingerprintscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fingerprintscan/README.html