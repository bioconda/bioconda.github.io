:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'survindel2'
.. highlight: bash

survindel2
==========

.. conda:recipe:: survindel2
   :replaces_section_title:
   :noindex:

   A CNV caller for Illumina paired\-end WGS data.

   :homepage: https://github.com/kensung-lab/SurVIndel2
   :license: GPL3 / GPL-3.0-only
   :recipe: /`survindel2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/survindel2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/survindel2/meta.yaml>`_

   SurVIndel2 is a fast and accurate CNV caller for Illumina paired\-end WGS data.



.. conda:package:: survindel2

   |downloads_survindel2| |docker_survindel2|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: 
   :depends on pyfaidx: ``>=0.5.9.1``
   :depends on pysam: ``>=0.16.0.1``
   :depends on scikit-learn: ``>=1.2.2``

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

    pixi global install survindel2

to add into an existing workspace instead, run::

    pixi add survindel2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install survindel2

Alternatively, to install into a new environment, run::

    conda create -n envname survindel2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/survindel2:<tag>

(see `survindel2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_survindel2| image:: https://img.shields.io/conda/dn/bioconda/survindel2.svg?style=flat
   :target: https://anaconda.org/bioconda/survindel2
   :alt:   (downloads)
.. |docker_survindel2| image:: https://quay.io/repository/biocontainers/survindel2/status
   :target: https://quay.io/repository/biocontainers/survindel2
.. _`survindel2/tags`: https://quay.io/repository/biocontainers/survindel2?tab=tags


.. raw:: html

    <script>
        var package = "survindel2";
        var versions = ["1.1.4","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/survindel2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/survindel2/README.html