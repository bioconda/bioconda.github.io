:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debreak'
.. highlight: bash

debreak
=======

.. conda:recipe:: debreak
   :replaces_section_title:
   :noindex:

   DeBreak\, Deciphering the exact breakpoints of structural variations using long sequencing reads

   :homepage: https://github.com/ChongLab/DeBreak
   :license: MIT / MIT
   :recipe: /`debreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debreak/meta.yaml>`_

   


.. conda:package:: debreak

   |downloads_debreak| |docker_debreak|

   :versions:
      
      

      ``1.3-0``,  ``1.0.2-0``

      

   
   :depends on minimap2: ``2.15.*``
   :depends on pysam: ``0.19.0.*``
   :depends on python: ``>=3``
   :depends on samtools: ``1.9.*``
   :depends on wtdbg: ``2.5.*``

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

    pixi global install debreak

to add into an existing workspace instead, run::

    pixi add debreak

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install debreak

Alternatively, to install into a new environment, run::

    conda create -n envname debreak

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/debreak:<tag>

(see `debreak/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_debreak| image:: https://img.shields.io/conda/dn/bioconda/debreak.svg?style=flat
   :target: https://anaconda.org/bioconda/debreak
   :alt:   (downloads)
.. |docker_debreak| image:: https://quay.io/repository/biocontainers/debreak/status
   :target: https://quay.io/repository/biocontainers/debreak
.. _`debreak/tags`: https://quay.io/repository/biocontainers/debreak?tab=tags


.. raw:: html

    <script>
        var package = "debreak";
        var versions = ["1.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debreak/README.html