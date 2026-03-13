:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blosum'
.. highlight: bash

blosum
======

.. conda:recipe:: blosum
   :replaces_section_title:
   :noindex:

   A small module for easy access to BLOSUM matrices without dependencies.

   :homepage: https://github.com/not-a-feature/blosum
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`blosum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blosum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blosum/meta.yaml>`_

   The BLOcks SUbstitution Matrices \(BLOSUM\) are used to score alignments between protein sequences and are therefore mainly used in bioinformatics. Reading such matrices is not particularly difficult\, yet most off the shelf packages are overloaded with strange dependencies. And why do we need to implement the same reader again if there is a simple module for that. blosum offers a robust and easy\-to\-expand implementation without relying on third\-party libraries.



.. conda:package:: blosum

   |downloads_blosum| |docker_blosum|

   :versions:
      
      

      ``2.2.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``

      

   
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

    pixi global install blosum

to add into an existing workspace instead, run::

    pixi add blosum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blosum

Alternatively, to install into a new environment, run::

    conda create -n envname blosum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blosum:<tag>

(see `blosum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blosum| image:: https://img.shields.io/conda/dn/bioconda/blosum.svg?style=flat
   :target: https://anaconda.org/bioconda/blosum
   :alt:   (downloads)
.. |docker_blosum| image:: https://quay.io/repository/biocontainers/blosum/status
   :target: https://quay.io/repository/biocontainers/blosum
.. _`blosum/tags`: https://quay.io/repository/biocontainers/blosum?tab=tags


.. raw:: html

    <script>
        var package = "blosum";
        var versions = ["2.2.0","2.0.3","2.0.2","2.0.1","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blosum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blosum/README.html