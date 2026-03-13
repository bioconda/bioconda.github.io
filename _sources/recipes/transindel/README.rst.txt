:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transindel'
.. highlight: bash

transindel
==========

.. conda:recipe:: transindel
   :replaces_section_title:
   :noindex:

   transIndel is used to detect indels \(insertions and deletions\) from DNA\-seq or RNA\-seq data by parsing chimeric alignments from BWA\-MEM..

   :homepage: https://github.com/cauyrd/transIndel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`transindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transindel/meta.yaml>`_

   


.. conda:package:: transindel

   |downloads_transindel| |docker_transindel|

   :versions:
      
      

      ``2.0-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on htseq: ``>=0.6.1``
   :depends on pysam: ``>=0.13.0``
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.0``

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

    pixi global install transindel

to add into an existing workspace instead, run::

    pixi add transindel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install transindel

Alternatively, to install into a new environment, run::

    conda create -n envname transindel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/transindel:<tag>

(see `transindel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_transindel| image:: https://img.shields.io/conda/dn/bioconda/transindel.svg?style=flat
   :target: https://anaconda.org/bioconda/transindel
   :alt:   (downloads)
.. |docker_transindel| image:: https://quay.io/repository/biocontainers/transindel/status
   :target: https://quay.io/repository/biocontainers/transindel
.. _`transindel/tags`: https://quay.io/repository/biocontainers/transindel?tab=tags


.. raw:: html

    <script>
        var package = "transindel";
        var versions = ["2.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transindel/README.html