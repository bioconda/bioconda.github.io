:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucdiff'
.. highlight: bash

nucdiff
=======

.. conda:recipe:: nucdiff
   :replaces_section_title:
   :noindex:

   NucDiff locates and categorizes differences between two closely related nucleotide sequences.

   :homepage: https://github.com/uio-cels/NucDiff
   :license: MPL-2.0
   :recipe: /`nucdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucdiff/meta.yaml>`_

   


.. conda:package:: nucdiff

   |downloads_nucdiff| |docker_nucdiff|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-0``,  ``0.1.1-0``

      

   
   :depends on biopython: 
   :depends on mummer: 
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

    pixi global install nucdiff

to add into an existing workspace instead, run::

    pixi add nucdiff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nucdiff

Alternatively, to install into a new environment, run::

    conda create -n envname nucdiff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nucdiff:<tag>

(see `nucdiff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nucdiff| image:: https://img.shields.io/conda/dn/bioconda/nucdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/nucdiff
   :alt:   (downloads)
.. |docker_nucdiff| image:: https://quay.io/repository/biocontainers/nucdiff/status
   :target: https://quay.io/repository/biocontainers/nucdiff
.. _`nucdiff/tags`: https://quay.io/repository/biocontainers/nucdiff?tab=tags


.. raw:: html

    <script>
        var package = "nucdiff";
        var versions = ["2.0.3","2.0.3","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucdiff/README.html