:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pal_finder'
.. highlight: bash

pal_finder
==========

.. conda:recipe:: pal_finder
   :replaces_section_title:
   :noindex:

   Find microsatellite repeat elements from sequencing reads and design PCR primers to amplify them

   :homepage: http://sourceforge.net/projects/palfinder/
   :license: GPLv3
   :recipe: /`pal_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal_finder/meta.yaml>`_

   Finds microsatellite repeat elements directly from raw 454
   or Illumina paired\-end sequencing reads\, and designs PCR primers
   to amplify these repeat loci in an automated fashion. Exact
   matches to repeats or 2\-\, 3\-\, 4\-\, 5\-\, and\/or 6\-mers are located
   and primer3 is then used to generate primer pairs to amplify
   regions containing microsatellite loci.


.. conda:package:: pal_finder

   |downloads_pal_finder| |docker_pal_finder|

   :versions:
      
      

      ``0.02.04-4``,  ``0.02.04-3``,  ``0.02.04-2``,  ``0.02.04-1``

      

   
   :depends on perl: 
   :depends on primer3: ``2.0.0a``

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

    pixi global install pal_finder

to add into an existing workspace instead, run::

    pixi add pal_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pal_finder

Alternatively, to install into a new environment, run::

    conda create -n envname pal_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pal_finder:<tag>

(see `pal_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pal_finder| image:: https://img.shields.io/conda/dn/bioconda/pal_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/pal_finder
   :alt:   (downloads)
.. |docker_pal_finder| image:: https://quay.io/repository/biocontainers/pal_finder/status
   :target: https://quay.io/repository/biocontainers/pal_finder
.. _`pal_finder/tags`: https://quay.io/repository/biocontainers/pal_finder?tab=tags


.. raw:: html

    <script>
        var package = "pal_finder";
        var versions = ["0.02.04","0.02.04","0.02.04","0.02.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pal_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pal_finder/README.html