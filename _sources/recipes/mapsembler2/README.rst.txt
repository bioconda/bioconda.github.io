:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapsembler2'
.. highlight: bash

mapsembler2
===========

.. conda:recipe:: mapsembler2
   :replaces_section_title:
   :noindex:

   Targeted assembly software

   :homepage: https://colibread.inria.fr/software/mapsembler2/
   :license: GNU Affero General Public License
   :recipe: /`mapsembler2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsembler2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsembler2/meta.yaml>`_

   


.. conda:package:: mapsembler2

   |downloads_mapsembler2| |docker_mapsembler2|

   :versions:
      
      

      ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``

      

   
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install mapsembler2

to add into an existing workspace instead, run::

    pixi add mapsembler2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mapsembler2

Alternatively, to install into a new environment, run::

    conda create -n envname mapsembler2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mapsembler2:<tag>

(see `mapsembler2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mapsembler2| image:: https://img.shields.io/conda/dn/bioconda/mapsembler2.svg?style=flat
   :target: https://anaconda.org/bioconda/mapsembler2
   :alt:   (downloads)
.. |docker_mapsembler2| image:: https://quay.io/repository/biocontainers/mapsembler2/status
   :target: https://quay.io/repository/biocontainers/mapsembler2
.. _`mapsembler2/tags`: https://quay.io/repository/biocontainers/mapsembler2?tab=tags


.. raw:: html

    <script>
        var package = "mapsembler2";
        var versions = ["2.2.4","2.2.4","2.2.4","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapsembler2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapsembler2/README.html