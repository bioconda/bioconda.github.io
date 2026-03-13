:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylextract'
.. highlight: bash

methylextract
=============

.. conda:recipe:: methylextract
   :replaces_section_title:
   :noindex:

   High\-Quality methylation maps and SNV calling from whole genome bisulfite sequencing data

   :homepage: http://bioinfo2.ugr.es/MethylExtract/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`methylextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylextract/meta.yaml>`_

   


.. conda:package:: methylextract

   |downloads_methylextract| |docker_methylextract|

   :versions:
      
      

      ``1.9.1-1``,  ``1.9.1-0``

      

   
   :depends on perl: 
   :depends on samtools: 

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

    pixi global install methylextract

to add into an existing workspace instead, run::

    pixi add methylextract

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install methylextract

Alternatively, to install into a new environment, run::

    conda create -n envname methylextract

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/methylextract:<tag>

(see `methylextract/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_methylextract| image:: https://img.shields.io/conda/dn/bioconda/methylextract.svg?style=flat
   :target: https://anaconda.org/bioconda/methylextract
   :alt:   (downloads)
.. |docker_methylextract| image:: https://quay.io/repository/biocontainers/methylextract/status
   :target: https://quay.io/repository/biocontainers/methylextract
.. _`methylextract/tags`: https://quay.io/repository/biocontainers/methylextract?tab=tags


.. raw:: html

    <script>
        var package = "methylextract";
        var versions = ["1.9.1","1.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylextract/README.html