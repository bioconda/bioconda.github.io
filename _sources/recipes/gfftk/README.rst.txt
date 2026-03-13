:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfftk'
.. highlight: bash

gfftk
=====

.. conda:recipe:: gfftk
   :replaces_section_title:
   :noindex:

   GFFtk\: genome annotation GFF3 tool kit

   :homepage: https://github.com/nextgenusfs/gfftk
   :license: BSD / BSD-2-Clause
   :recipe: /`gfftk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfftk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfftk/meta.yaml>`_

   


.. conda:package:: gfftk

   |downloads_gfftk| |docker_gfftk|

   :versions:
      
      

      ``26.2.12-0``,  ``25.6.10-0``,  ``25.4.17-0``,  ``24.10.30-0``,  ``24.2.4-0``,  ``23.12.5-0``,  ``23.9.6-0``

      

   
   :depends on gb-io: ``>=0.3.2``
   :depends on natsort: 
   :depends on numpy: 
   :depends on python: ``>=3.6``
   :depends on requests: 
   :depends on table2asn: 

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

    pixi global install gfftk

to add into an existing workspace instead, run::

    pixi add gfftk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gfftk

Alternatively, to install into a new environment, run::

    conda create -n envname gfftk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gfftk:<tag>

(see `gfftk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gfftk| image:: https://img.shields.io/conda/dn/bioconda/gfftk.svg?style=flat
   :target: https://anaconda.org/bioconda/gfftk
   :alt:   (downloads)
.. |docker_gfftk| image:: https://quay.io/repository/biocontainers/gfftk/status
   :target: https://quay.io/repository/biocontainers/gfftk
.. _`gfftk/tags`: https://quay.io/repository/biocontainers/gfftk?tab=tags


.. raw:: html

    <script>
        var package = "gfftk";
        var versions = ["26.2.12","25.6.10","25.4.17","24.10.30","24.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfftk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfftk/README.html