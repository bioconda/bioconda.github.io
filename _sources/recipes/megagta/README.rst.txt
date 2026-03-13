:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megagta'
.. highlight: bash

megagta
=======

.. conda:recipe:: megagta
   :replaces_section_title:
   :noindex:

   HMM\-guided metagenomic gene\-targeted assembler using iterative de Bruijn graphs

   :homepage: https://github.com/HKU-BAL/megagta
   :license: GNU General Public License v3 (GPLv3
   :recipe: /`megagta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megagta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megagta/meta.yaml>`_

   


.. conda:package:: megagta

   |downloads_megagta| |docker_megagta|

   :versions:
      
      

      ``0.1_alpha-0``

      

   
   :depends on hmmer: ``>=3.1b2``
   :depends on libgcc: 
   :depends on python: ``>=2.7,<3``
   :depends on zlib: 

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

    pixi global install megagta

to add into an existing workspace instead, run::

    pixi add megagta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install megagta

Alternatively, to install into a new environment, run::

    conda create -n envname megagta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/megagta:<tag>

(see `megagta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_megagta| image:: https://img.shields.io/conda/dn/bioconda/megagta.svg?style=flat
   :target: https://anaconda.org/bioconda/megagta
   :alt:   (downloads)
.. |docker_megagta| image:: https://quay.io/repository/biocontainers/megagta/status
   :target: https://quay.io/repository/biocontainers/megagta
.. _`megagta/tags`: https://quay.io/repository/biocontainers/megagta?tab=tags


.. raw:: html

    <script>
        var package = "megagta";
        var versions = ["0.1_alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megagta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megagta/README.html