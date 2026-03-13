:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primerclip'
.. highlight: bash

primerclip
==========

.. conda:recipe:: primerclip
   :replaces_section_title:
   :noindex:

   Swift Accel\-Amplicon primer trimming tool for fast alignment\-based primer trimming

   :homepage: https://github.com/swiftbiosciences/primerclip
   :license: OTHER / Copyright Swift Biosciences Inc. (c) 2017
   :recipe: /`primerclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerclip/meta.yaml>`_

   


.. conda:package:: primerclip

   |downloads_primerclip| |docker_primerclip|

   :versions:
      
      

      ``0.3.8-1``,  ``0.3.8-0``

      

   
   :depends on python: ``>=3``

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

    pixi global install primerclip

to add into an existing workspace instead, run::

    pixi add primerclip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install primerclip

Alternatively, to install into a new environment, run::

    conda create -n envname primerclip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/primerclip:<tag>

(see `primerclip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_primerclip| image:: https://img.shields.io/conda/dn/bioconda/primerclip.svg?style=flat
   :target: https://anaconda.org/bioconda/primerclip
   :alt:   (downloads)
.. |docker_primerclip| image:: https://quay.io/repository/biocontainers/primerclip/status
   :target: https://quay.io/repository/biocontainers/primerclip
.. _`primerclip/tags`: https://quay.io/repository/biocontainers/primerclip?tab=tags


.. raw:: html

    <script>
        var package = "primerclip";
        var versions = ["0.3.8","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primerclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primerclip/README.html