:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddprimer'
.. highlight: bash

ddprimer
========

.. conda:recipe:: ddprimer
   :replaces_section_title:
   :noindex:

   Pipeline for designing primers optimized for droplet digital PCR

   :homepage: https://github.com/globuzzz2000/ddPrimer
   :license: MIT
   :recipe: /`ddprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddprimer/meta.yaml>`_

   


.. conda:package:: ddprimer

   |downloads_ddprimer| |docker_ddprimer|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on bcftools: 
   :depends on biopython: ``>=1.78``
   :depends on blast: 
   :depends on colorama: ``>=0.4.4``
   :depends on htslib: 
   :depends on numpy: ``>=1.20``
   :depends on openpyxl: ``>=3.0.5``
   :depends on pandas: ``>=1.3``
   :depends on primer3-py: ``>=2.0.0``
   :depends on python: ``>=3.10``
   :depends on samtools: 
   :depends on tqdm: ``>=4.60.0``
   :depends on viennarna: ``>=2.7.0``
   :depends on wxpython: ``>=4.1.0``

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

    pixi global install ddprimer

to add into an existing workspace instead, run::

    pixi add ddprimer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ddprimer

Alternatively, to install into a new environment, run::

    conda create -n envname ddprimer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ddprimer:<tag>

(see `ddprimer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ddprimer| image:: https://img.shields.io/conda/dn/bioconda/ddprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/ddprimer
   :alt:   (downloads)
.. |docker_ddprimer| image:: https://quay.io/repository/biocontainers/ddprimer/status
   :target: https://quay.io/repository/biocontainers/ddprimer
.. _`ddprimer/tags`: https://quay.io/repository/biocontainers/ddprimer?tab=tags


.. raw:: html

    <script>
        var package = "ddprimer";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddprimer/README.html