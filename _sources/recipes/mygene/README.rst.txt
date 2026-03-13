:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mygene'
.. highlight: bash

mygene
======

.. conda:recipe:: mygene
   :replaces_section_title:
   :noindex:

   Python Client for MyGene.Info services.

   :homepage: https://github.com/suLab/mygene.py
   :license: BSD / BSD License
   :recipe: /`mygene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mygene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mygene/meta.yaml>`_

   


.. conda:package:: mygene

   |downloads_mygene| |docker_mygene|

   :versions:
      
      

      ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-2``,  ``3.0.0-0``,  ``2.2.0-0``

      

   
   :depends on biothings_client: ``>=0.2.0``
   :depends on python: 

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

    pixi global install mygene

to add into an existing workspace instead, run::

    pixi add mygene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mygene

Alternatively, to install into a new environment, run::

    conda create -n envname mygene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mygene:<tag>

(see `mygene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mygene| image:: https://img.shields.io/conda/dn/bioconda/mygene.svg?style=flat
   :target: https://anaconda.org/bioconda/mygene
   :alt:   (downloads)
.. |docker_mygene| image:: https://quay.io/repository/biocontainers/mygene/status
   :target: https://quay.io/repository/biocontainers/mygene
.. _`mygene/tags`: https://quay.io/repository/biocontainers/mygene?tab=tags


.. raw:: html

    <script>
        var package = "mygene";
        var versions = ["3.2.2","3.2.1","3.2.0","3.1.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mygene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mygene/README.html