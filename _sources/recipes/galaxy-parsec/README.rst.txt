:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-parsec'
.. highlight: bash

galaxy-parsec
=============

.. conda:recipe:: galaxy-parsec
   :replaces_section_title:
   :noindex:

   Command\-line utilities to assist in interacting with Galaxy servers \(http\:\/\/galaxyproject.org\/\).

   :homepage: https://github.com/galaxy-iuc/parsec
   :license: MIT / MIT
   :recipe: /`galaxy-parsec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-parsec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-parsec/meta.yaml>`_

   


.. conda:package:: galaxy-parsec

   |downloads_galaxy-parsec| |docker_galaxy-parsec|

   :versions:
      
      

      ``1.16.0-0``,  ``1.15.0-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends on bioblend: 
   :depends on click: ``>=6.7``
   :depends on future: 
   :depends on justbackoff: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on wrapt: 
   :depends on xunit-wrapper: ``>=0.12``

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

    pixi global install galaxy-parsec

to add into an existing workspace instead, run::

    pixi add galaxy-parsec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-parsec

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-parsec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-parsec:<tag>

(see `galaxy-parsec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-parsec| image:: https://img.shields.io/conda/dn/bioconda/galaxy-parsec.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-parsec
   :alt:   (downloads)
.. |docker_galaxy-parsec| image:: https://quay.io/repository/biocontainers/galaxy-parsec/status
   :target: https://quay.io/repository/biocontainers/galaxy-parsec
.. _`galaxy-parsec/tags`: https://quay.io/repository/biocontainers/galaxy-parsec?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-parsec";
        var versions = ["1.16.0","1.15.0","1.13.0","1.13.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-parsec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-parsec/README.html