:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'patchify'
.. highlight: bash

patchify
========

.. conda:recipe:: patchify
   :replaces_section_title:
   :noindex:

   A library that helps you split image into small\, overlappable patches\, and merge patches back into the original image.

   :homepage: https://github.com/dovahcrow/patchify.py
   :license: MIT
   :recipe: /`patchify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patchify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patchify/meta.yaml>`_

   


.. conda:package:: patchify

   |downloads_patchify| |docker_patchify|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends on numpy: ``>=1.0.0,<2.0.0``
   :depends on python: ``>=3.7.0,<4.0.0``

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

    pixi global install patchify

to add into an existing workspace instead, run::

    pixi add patchify

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install patchify

Alternatively, to install into a new environment, run::

    conda create -n envname patchify

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/patchify:<tag>

(see `patchify/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_patchify| image:: https://img.shields.io/conda/dn/bioconda/patchify.svg?style=flat
   :target: https://anaconda.org/bioconda/patchify
   :alt:   (downloads)
.. |docker_patchify| image:: https://quay.io/repository/biocontainers/patchify/status
   :target: https://quay.io/repository/biocontainers/patchify
.. _`patchify/tags`: https://quay.io/repository/biocontainers/patchify?tab=tags


.. raw:: html

    <script>
        var package = "patchify";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/patchify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/patchify/README.html