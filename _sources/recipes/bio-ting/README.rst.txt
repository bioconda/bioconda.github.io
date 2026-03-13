:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-ting'
.. highlight: bash

bio-ting
========

.. conda:recipe:: bio-ting
   :replaces_section_title:
   :noindex:

   ting is a tool clustering large scale T cell receptor repertoires by antigen\-specificity

   :homepage: https://github.com/FelixMoelder/ting
   :license: MIT
   :recipe: /`bio-ting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ting/meta.yaml>`_

   


.. conda:package:: bio-ting

   |downloads_bio-ting| |docker_bio-ting|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on numpy: ``>=1.17,<=1.19``
   :depends on python: ``>=3.7``
   :depends on scipy: ``>=1.3,<=1.5``

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

    pixi global install bio-ting

to add into an existing workspace instead, run::

    pixi add bio-ting

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bio-ting

Alternatively, to install into a new environment, run::

    conda create -n envname bio-ting

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bio-ting:<tag>

(see `bio-ting/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bio-ting| image:: https://img.shields.io/conda/dn/bioconda/bio-ting.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-ting
   :alt:   (downloads)
.. |docker_bio-ting| image:: https://quay.io/repository/biocontainers/bio-ting/status
   :target: https://quay.io/repository/biocontainers/bio-ting
.. _`bio-ting/tags`: https://quay.io/repository/biocontainers/bio-ting?tab=tags


.. raw:: html

    <script>
        var package = "bio-ting";
        var versions = ["1.1.0","1.0.2","1.0.1"];
    </script>





Notes
-----
The tool is available as command \`ting\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-ting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-ting/README.html