:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extracthifi'
.. highlight: bash

extracthifi
===========

.. conda:recipe:: extracthifi
   :replaces_section_title:
   :noindex:

   PacBio utility to extract HiFi reads from CCS reads

   :homepage: https://github.com/PacificBiosciences/extracthifi
   :license: BSD-3-Clause-Clear
   :recipe: /`extracthifi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extracthifi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extracthifi/meta.yaml>`_

   


.. conda:package:: extracthifi

   |downloads_extracthifi| |docker_extracthifi|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on pbtk: 

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

    pixi global install extracthifi

to add into an existing workspace instead, run::

    pixi add extracthifi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install extracthifi

Alternatively, to install into a new environment, run::

    conda create -n envname extracthifi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/extracthifi:<tag>

(see `extracthifi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_extracthifi| image:: https://img.shields.io/conda/dn/bioconda/extracthifi.svg?style=flat
   :target: https://anaconda.org/bioconda/extracthifi
   :alt:   (downloads)
.. |docker_extracthifi| image:: https://quay.io/repository/biocontainers/extracthifi/status
   :target: https://quay.io/repository/biocontainers/extracthifi
.. _`extracthifi/tags`: https://quay.io/repository/biocontainers/extracthifi?tab=tags


.. raw:: html

    <script>
        var package = "extracthifi";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extracthifi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extracthifi/README.html