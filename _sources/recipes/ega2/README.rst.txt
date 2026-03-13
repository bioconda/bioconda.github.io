:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ega2'
.. highlight: bash

ega2
====

.. conda:recipe:: ega2
   :replaces_section_title:
   :noindex:

   EGA download client v2

   :homepage: https://ega-archive.org/download/downloader-quickguide-v2
   :license: unknown
   :recipe: /`ega2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega2/meta.yaml>`_

   The most up\-to\-date download client for EGA can be found in the pyega3
   package. However\, that tool does not download a fairly large chunk of EGA
   files \(those ending in .gpg rather than .cip\)\, which limits its generic
   usefulness. This package attempts to provide the v2 Java client in a more
   useful manner than a simple .jar.


.. conda:package:: ega2

   |downloads_ega2| |docker_ega2|

   :versions:
      
      

      ``2.2.2-1``,  ``2.2.2-0``

      

   
   :depends on openjdk: ``>=8``
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

    pixi global install ega2

to add into an existing workspace instead, run::

    pixi add ega2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ega2

Alternatively, to install into a new environment, run::

    conda create -n envname ega2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ega2:<tag>

(see `ega2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ega2| image:: https://img.shields.io/conda/dn/bioconda/ega2.svg?style=flat
   :target: https://anaconda.org/bioconda/ega2
   :alt:   (downloads)
.. |docker_ega2| image:: https://quay.io/repository/biocontainers/ega2/status
   :target: https://quay.io/repository/biocontainers/ega2
.. _`ega2/tags`: https://quay.io/repository/biocontainers/ega2?tab=tags


.. raw:: html

    <script>
        var package = "ega2";
        var versions = ["2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ega2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ega2/README.html