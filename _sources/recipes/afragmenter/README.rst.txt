:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afragmenter'
.. highlight: bash

afragmenter
===========

.. conda:recipe:: afragmenter
   :replaces_section_title:
   :noindex:

   Schema\-free\, tunable protein domain segmentation tool for AlphaFold structures

   :homepage: https://github.com/sverwimp/AFragmenter
   :license: MIT
   :recipe: /`afragmenter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afragmenter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afragmenter/meta.yaml>`_

   


.. conda:package:: afragmenter

   |downloads_afragmenter| |docker_afragmenter|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on biopython: ``>=1.76.0``
   :depends on matplotlib-base: ``>=3.9.2``
   :depends on numpy: ``>=2.0.0``
   :depends on python: ``>=3.9.0``
   :depends on python-igraph: ``>=0.10.3``
   :depends on requests: ``>=2.32.3``
   :depends on rich: ``>=13.8.1``
   :depends on rich-click: ``>=1.8.3``

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

    pixi global install afragmenter

to add into an existing workspace instead, run::

    pixi add afragmenter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install afragmenter

Alternatively, to install into a new environment, run::

    conda create -n envname afragmenter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/afragmenter:<tag>

(see `afragmenter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_afragmenter| image:: https://img.shields.io/conda/dn/bioconda/afragmenter.svg?style=flat
   :target: https://anaconda.org/bioconda/afragmenter
   :alt:   (downloads)
.. |docker_afragmenter| image:: https://quay.io/repository/biocontainers/afragmenter/status
   :target: https://quay.io/repository/biocontainers/afragmenter
.. _`afragmenter/tags`: https://quay.io/repository/biocontainers/afragmenter?tab=tags


.. raw:: html

    <script>
        var package = "afragmenter";
        var versions = ["0.0.6","0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afragmenter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afragmenter/README.html