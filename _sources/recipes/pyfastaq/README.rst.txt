:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastaq'
.. highlight: bash

pyfastaq
========

.. conda:recipe:: pyfastaq
   :replaces_section_title:
   :noindex:

   Script to manipulate FASTA and FASTQ files\, plus API for developers.

   :homepage: https://github.com/sanger-pathogens/Fastaq
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyfastaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastaq/meta.yaml>`_

   


.. conda:package:: pyfastaq

   |downloads_pyfastaq| |docker_pyfastaq|

   :versions:
      
      

      ``3.18.0-0``,  ``3.17.0-2``,  ``3.17.0-1``,  ``3.17.0-0``,  ``3.14.0-0``,  ``3.11.0-1``,  ``3.11.0-0``

      

   
   :depends on python: ``>=3.8``

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

    pixi global install pyfastaq

to add into an existing workspace instead, run::

    pixi add pyfastaq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyfastaq

Alternatively, to install into a new environment, run::

    conda create -n envname pyfastaq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyfastaq:<tag>

(see `pyfastaq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyfastaq| image:: https://img.shields.io/conda/dn/bioconda/pyfastaq.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastaq
   :alt:   (downloads)
.. |docker_pyfastaq| image:: https://quay.io/repository/biocontainers/pyfastaq/status
   :target: https://quay.io/repository/biocontainers/pyfastaq
.. _`pyfastaq/tags`: https://quay.io/repository/biocontainers/pyfastaq?tab=tags


.. raw:: html

    <script>
        var package = "pyfastaq";
        var versions = ["3.18.0","3.17.0","3.17.0","3.17.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastaq/README.html