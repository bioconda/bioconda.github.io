:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcoretools'
.. highlight: bash

pbcoretools
===========

.. conda:recipe:: pbcoretools
   :replaces_section_title:
   :noindex:

   CLI tools and add\-ons for PacBio\'s core APIs

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcoretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcoretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcoretools/meta.yaml>`_

   


.. conda:package:: pbcoretools

   |downloads_pbcoretools| |docker_pbcoretools|

   :versions:
      
      

      ``0.8.1-1``,  ``0.8.1-0``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
   :depends on numpy: ``>=1.17``
   :depends on pbcommand: ``>=2.1.1``
   :depends on pbcore: ``>=2.1.2``
   :depends on pysam: ``>=0.15.1``
   :depends on python: ``>=3.7,<3.8``
   :depends on setuptools: 

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

    pixi global install pbcoretools

to add into an existing workspace instead, run::

    pixi add pbcoretools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbcoretools

Alternatively, to install into a new environment, run::

    conda create -n envname pbcoretools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbcoretools:<tag>

(see `pbcoretools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbcoretools| image:: https://img.shields.io/conda/dn/bioconda/pbcoretools.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcoretools
   :alt:   (downloads)
.. |docker_pbcoretools| image:: https://quay.io/repository/biocontainers/pbcoretools/status
   :target: https://quay.io/repository/biocontainers/pbcoretools
.. _`pbcoretools/tags`: https://quay.io/repository/biocontainers/pbcoretools?tab=tags


.. raw:: html

    <script>
        var package = "pbcoretools";
        var versions = ["0.8.1","0.8.1","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcoretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcoretools/README.html