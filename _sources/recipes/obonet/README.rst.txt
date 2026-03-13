:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'obonet'
.. highlight: bash

obonet
======

.. conda:recipe:: obonet
   :replaces_section_title:
   :noindex:

   Parse OBO formatted ontologies into networkx

   :homepage: https://github.com/dhimmel/obonet
   :documentation: https://github.com/dhimmel/obonet/README.md
   
   :license: BSD / BSD-2-Clause-Patent
   :recipe: /`obonet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obonet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obonet/meta.yaml>`_

   


.. conda:package:: obonet

   |downloads_obonet| |docker_obonet|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.3-0``

      

   
   :depends on networkx: 
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

    pixi global install obonet

to add into an existing workspace instead, run::

    pixi add obonet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install obonet

Alternatively, to install into a new environment, run::

    conda create -n envname obonet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/obonet:<tag>

(see `obonet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_obonet| image:: https://img.shields.io/conda/dn/bioconda/obonet.svg?style=flat
   :target: https://anaconda.org/bioconda/obonet
   :alt:   (downloads)
.. |docker_obonet| image:: https://quay.io/repository/biocontainers/obonet/status
   :target: https://quay.io/repository/biocontainers/obonet
.. _`obonet/tags`: https://quay.io/repository/biocontainers/obonet?tab=tags


.. raw:: html

    <script>
        var package = "obonet";
        var versions = ["1.1.1","1.1.0","1.0.0","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/obonet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/obonet/README.html