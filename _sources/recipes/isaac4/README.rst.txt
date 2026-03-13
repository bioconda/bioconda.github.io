:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isaac4'
.. highlight: bash

isaac4
======

.. conda:recipe:: isaac4
   :replaces_section_title:
   :noindex:

   Ultra\-fast whole\-genome alignment for Illumina sequencing platforms.

   :homepage: https://github.com/Illumina/Isaac4
   :license: GPL-3.0-only
   :recipe: /`isaac4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isaac4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isaac4/meta.yaml>`_
   :links: biotools: :biotools:`isaac`, doi: :doi:`10.1093/bioinformatics/btt314`

   


.. conda:package:: isaac4

   |downloads_isaac4| |docker_isaac4|

   :versions:
      
      

      ``04.18.11.09-0``

      

   
   :depends on gnuplot: ``>=4.0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on libxml2: ``>=2.9.10,<2.10.0a0``
   :depends on libxslt: ``>=1.1.31``
   :depends on libxslt: ``>=1.1.33,<2.0a0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install isaac4

to add into an existing workspace instead, run::

    pixi add isaac4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isaac4

Alternatively, to install into a new environment, run::

    conda create -n envname isaac4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isaac4:<tag>

(see `isaac4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isaac4| image:: https://img.shields.io/conda/dn/bioconda/isaac4.svg?style=flat
   :target: https://anaconda.org/bioconda/isaac4
   :alt:   (downloads)
.. |docker_isaac4| image:: https://quay.io/repository/biocontainers/isaac4/status
   :target: https://quay.io/repository/biocontainers/isaac4
.. _`isaac4/tags`: https://quay.io/repository/biocontainers/isaac4?tab=tags


.. raw:: html

    <script>
        var package = "isaac4";
        var versions = ["04.18.11.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isaac4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isaac4/README.html