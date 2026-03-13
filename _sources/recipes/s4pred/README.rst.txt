:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 's4pred'
.. highlight: bash

s4pred
======

.. conda:recipe:: s4pred
   :replaces_section_title:
   :noindex:

   Accurate prediction of a protein\'s secondary structure from its amino acid sequence

   :homepage: https://github.com/psipred/s4pred
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`s4pred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/s4pred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/s4pred/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab491`

   


.. conda:package:: s4pred

   |downloads_s4pred| |docker_s4pred|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on python: ``>=3.7``
   :depends on pytorch: ``2.6.0.*``

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

    pixi global install s4pred

to add into an existing workspace instead, run::

    pixi add s4pred

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install s4pred

Alternatively, to install into a new environment, run::

    conda create -n envname s4pred

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/s4pred:<tag>

(see `s4pred/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_s4pred| image:: https://img.shields.io/conda/dn/bioconda/s4pred.svg?style=flat
   :target: https://anaconda.org/bioconda/s4pred
   :alt:   (downloads)
.. |docker_s4pred| image:: https://quay.io/repository/biocontainers/s4pred/status
   :target: https://quay.io/repository/biocontainers/s4pred
.. _`s4pred/tags`: https://quay.io/repository/biocontainers/s4pred?tab=tags


.. raw:: html

    <script>
        var package = "s4pred";
        var versions = ["1.2.1","1.2.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/s4pred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/s4pred/README.html