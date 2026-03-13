:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hat-phasing'
.. highlight: bash

hat-phasing
===========

.. conda:recipe:: hat-phasing
   :replaces_section_title:
   :noindex:

   HAT\:‌  Haplotype assembly tool that use both long and short reads to reconstruct haplotypes

   :homepage: https://github.com/AbeelLab/hat/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hat-phasing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hat-phasing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hat-phasing/meta.yaml>`_

   


.. conda:package:: hat-phasing

   |downloads_hat-phasing| |docker_hat-phasing|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.1-0``

      

   
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22.3``
   :depends on pysam: ``>=0.19.0``
   :depends on python: 
   :depends on seaborn: 

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

    pixi global install hat-phasing

to add into an existing workspace instead, run::

    pixi add hat-phasing

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hat-phasing

Alternatively, to install into a new environment, run::

    conda create -n envname hat-phasing

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hat-phasing:<tag>

(see `hat-phasing/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hat-phasing| image:: https://img.shields.io/conda/dn/bioconda/hat-phasing.svg?style=flat
   :target: https://anaconda.org/bioconda/hat-phasing
   :alt:   (downloads)
.. |docker_hat-phasing| image:: https://quay.io/repository/biocontainers/hat-phasing/status
   :target: https://quay.io/repository/biocontainers/hat-phasing
.. _`hat-phasing/tags`: https://quay.io/repository/biocontainers/hat-phasing?tab=tags


.. raw:: html

    <script>
        var package = "hat-phasing";
        var versions = ["0.1.8","0.1.7","0.1.6","0.1.5","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hat-phasing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hat-phasing/README.html