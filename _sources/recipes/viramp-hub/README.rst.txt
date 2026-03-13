:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viramp-hub'
.. highlight: bash

viramp-hub
==========

.. conda:recipe:: viramp-hub
   :replaces_section_title:
   :noindex:

   VirAmp\-Hub lets you manipulate\/convert viral amplicon\/primer scheme information.

   :homepage: https://github.com/wm75/viramp-hub
   :license: MIT / MIT
   :recipe: /`viramp-hub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viramp-hub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viramp-hub/meta.yaml>`_

   


.. conda:package:: viramp-hub

   |downloads_viramp-hub| |docker_viramp-hub|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on python: ``>=3.6``

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

    pixi global install viramp-hub

to add into an existing workspace instead, run::

    pixi add viramp-hub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viramp-hub

Alternatively, to install into a new environment, run::

    conda create -n envname viramp-hub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viramp-hub:<tag>

(see `viramp-hub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viramp-hub| image:: https://img.shields.io/conda/dn/bioconda/viramp-hub.svg?style=flat
   :target: https://anaconda.org/bioconda/viramp-hub
   :alt:   (downloads)
.. |docker_viramp-hub| image:: https://quay.io/repository/biocontainers/viramp-hub/status
   :target: https://quay.io/repository/biocontainers/viramp-hub
.. _`viramp-hub/tags`: https://quay.io/repository/biocontainers/viramp-hub?tab=tags


.. raw:: html

    <script>
        var package = "viramp-hub";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viramp-hub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viramp-hub/README.html