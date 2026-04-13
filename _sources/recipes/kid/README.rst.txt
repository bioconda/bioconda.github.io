:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kid'
.. highlight: bash

kid
===

.. conda:recipe:: kid
   :replaces_section_title:
   :noindex:

   A simple and pythonic XML template language

   :homepage: https://pypi.python.org/pypi/kid
   :license: MIT
   :recipe: /`kid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kid/meta.yaml>`_

   


.. conda:package:: kid

   |downloads_kid| |docker_kid|

   :versions:
      
      

      ``0.9.6-2``,  ``0.9.6-1``

      

   
   :depends on python: ``>=2.7,<2.8.0a0``

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

    pixi global install kid

to add into an existing workspace instead, run::

    pixi add kid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kid

Alternatively, to install into a new environment, run::

    conda create -n envname kid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kid:<tag>

(see `kid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kid| image:: https://img.shields.io/conda/dn/bioconda/kid.svg?style=flat
   :target: https://anaconda.org/bioconda/kid
   :alt:   (downloads)
.. |docker_kid| image:: https://quay.io/repository/biocontainers/kid/status
   :target: https://quay.io/repository/biocontainers/kid
.. _`kid/tags`: https://quay.io/repository/biocontainers/kid?tab=tags


.. raw:: html

    <script>
        var package = "kid";
        var versions = ["0.9.6","0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kid/README.html