:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platypus-conquistador'
.. highlight: bash

platypus-conquistador
=====================

.. conda:recipe:: platypus-conquistador
   :replaces_section_title:
   :noindex:

   Platypus Conquistador\: Confirming specific taxonomic groups within your metagenomic samples.

   :homepage: https://github.com/biocore/Platypus-Conquistador
   :license: BSD / BSD-3-Clause
   :recipe: /`platypus-conquistador <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-conquistador>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-conquistador/meta.yaml>`_

   


.. conda:package:: platypus-conquistador

   |downloads_platypus-conquistador| |docker_platypus-conquistador|

   :versions:
      
      

      ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends on click: 
   :depends on python: ``<3``
   :depends on scikit-bio: ``>=0.2.1,<0.3.0``

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

    pixi global install platypus-conquistador

to add into an existing workspace instead, run::

    pixi add platypus-conquistador

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install platypus-conquistador

Alternatively, to install into a new environment, run::

    conda create -n envname platypus-conquistador

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/platypus-conquistador:<tag>

(see `platypus-conquistador/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_platypus-conquistador| image:: https://img.shields.io/conda/dn/bioconda/platypus-conquistador.svg?style=flat
   :target: https://anaconda.org/bioconda/platypus-conquistador
   :alt:   (downloads)
.. |docker_platypus-conquistador| image:: https://quay.io/repository/biocontainers/platypus-conquistador/status
   :target: https://quay.io/repository/biocontainers/platypus-conquistador
.. _`platypus-conquistador/tags`: https://quay.io/repository/biocontainers/platypus-conquistador?tab=tags


.. raw:: html

    <script>
        var package = "platypus-conquistador";
        var versions = ["0.9.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platypus-conquistador/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platypus-conquistador/README.html