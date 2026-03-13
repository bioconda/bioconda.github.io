:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pacini_typing'
.. highlight: bash

pacini_typing
=============

.. conda:recipe:: pacini_typing
   :replaces_section_title:
   :noindex:

   YAML\-based bacterial genotyping application

   :homepage: https://github.com/RIVM-bioinformatics/Pacini-typing
   :license: AGPL-3.0
   :recipe: /`pacini_typing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacini_typing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacini_typing/meta.yaml>`_

   


.. conda:package:: pacini_typing

   |downloads_pacini_typing| |docker_pacini_typing|

   :versions:
      
      

      ``3.0.1-0``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.1-0``

      

   
   :depends on blast: 
   :depends on kma: 
   :depends on pandas: 
   :depends on python: ``>=3.12``
   :depends on pyyaml: 

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

    pixi global install pacini_typing

to add into an existing workspace instead, run::

    pixi add pacini_typing

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pacini_typing

Alternatively, to install into a new environment, run::

    conda create -n envname pacini_typing

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pacini_typing:<tag>

(see `pacini_typing/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pacini_typing| image:: https://img.shields.io/conda/dn/bioconda/pacini_typing.svg?style=flat
   :target: https://anaconda.org/bioconda/pacini_typing
   :alt:   (downloads)
.. |docker_pacini_typing| image:: https://quay.io/repository/biocontainers/pacini_typing/status
   :target: https://quay.io/repository/biocontainers/pacini_typing
.. _`pacini_typing/tags`: https://quay.io/repository/biocontainers/pacini_typing?tab=tags


.. raw:: html

    <script>
        var package = "pacini_typing";
        var versions = ["3.0.1","2.0.2","2.0.0","1.6.4","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pacini_typing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pacini_typing/README.html