:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biodiff'
.. highlight: bash

biodiff
=======

.. conda:recipe:: biodiff
   :replaces_section_title:
   :noindex:

   exact comparison of biological sequences

   :homepage: https://gitlab.com/LPCDRP/biodiff
   :license: GPLv3+
   :recipe: /`biodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biodiff/meta.yaml>`_

   biodiff is a variant caller that determines the exact differences between two biological sequences. It can operate on DNA and protein sequences\, as long as they are in fasta format. The sequences to be compared must have the same fasta header \(up to the first whitespace\). If the reference and query each have only one sequence\, however\, the header need not match and the comparison will be done\, but a warning will be emitted. Output is in the Variant Call Format.


.. conda:package:: biodiff

   |downloads_biodiff| |docker_biodiff|

   :versions:
      
      

      ``0.2.2-6``,  ``0.2.2-5``,  ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: 

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

    pixi global install biodiff

to add into an existing workspace instead, run::

    pixi add biodiff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biodiff

Alternatively, to install into a new environment, run::

    conda create -n envname biodiff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biodiff:<tag>

(see `biodiff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biodiff| image:: https://img.shields.io/conda/dn/bioconda/biodiff.svg?style=flat
   :target: https://anaconda.org/bioconda/biodiff
   :alt:   (downloads)
.. |docker_biodiff| image:: https://quay.io/repository/biocontainers/biodiff/status
   :target: https://quay.io/repository/biocontainers/biodiff
.. _`biodiff/tags`: https://quay.io/repository/biocontainers/biodiff?tab=tags


.. raw:: html

    <script>
        var package = "biodiff";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biodiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biodiff/README.html