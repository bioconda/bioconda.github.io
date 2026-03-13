:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pisces'
.. highlight: bash

pisces
======

.. conda:recipe:: pisces
   :replaces_section_title:
   :noindex:

   Somatic and germline variant caller for amplicon data. Recommended caller for tumor\-only workflows.

   :homepage: https://github.com/Illumina/Pisces
   :license: GPLv3
   :recipe: /`pisces <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pisces>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pisces/meta.yaml>`_

   


.. conda:package:: pisces

   |downloads_pisces| |docker_pisces|

   :versions:
      
      

      ``5.2.10.49-1``,  ``5.2.10.49-0``,  ``5.2.9.122-0``,  ``5.2.7.47-2``,  ``5.2.7.47-1``,  ``5.2.7.47-0``

      

   

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

    pixi global install pisces

to add into an existing workspace instead, run::

    pixi add pisces

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pisces

Alternatively, to install into a new environment, run::

    conda create -n envname pisces

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pisces:<tag>

(see `pisces/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pisces| image:: https://img.shields.io/conda/dn/bioconda/pisces.svg?style=flat
   :target: https://anaconda.org/bioconda/pisces
   :alt:   (downloads)
.. |docker_pisces| image:: https://quay.io/repository/biocontainers/pisces/status
   :target: https://quay.io/repository/biocontainers/pisces
.. _`pisces/tags`: https://quay.io/repository/biocontainers/pisces?tab=tags


.. raw:: html

    <script>
        var package = "pisces";
        var versions = ["5.2.10.49","5.2.10.49","5.2.9.122","5.2.7.47","5.2.7.47"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pisces/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pisces/README.html