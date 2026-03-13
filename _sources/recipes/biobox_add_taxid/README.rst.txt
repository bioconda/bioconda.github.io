:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobox_add_taxid'
.. highlight: bash

biobox_add_taxid
================

.. conda:recipe:: biobox_add_taxid
   :replaces_section_title:
   :noindex:

   CAMI amber utility script for adding the taxid output from GTDB and BAT

   :homepage: https://github.com/SantaMcCloud/biobox_add_taxid
   :license: MIT / MIT
   :recipe: /`biobox_add_taxid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobox_add_taxid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobox_add_taxid/meta.yaml>`_

   


.. conda:package:: biobox_add_taxid

   |downloads_biobox_add_taxid| |docker_biobox_add_taxid|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``

      

   
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

    pixi global install biobox_add_taxid

to add into an existing workspace instead, run::

    pixi add biobox_add_taxid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobox_add_taxid

Alternatively, to install into a new environment, run::

    conda create -n envname biobox_add_taxid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobox_add_taxid:<tag>

(see `biobox_add_taxid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobox_add_taxid| image:: https://img.shields.io/conda/dn/bioconda/biobox_add_taxid.svg?style=flat
   :target: https://anaconda.org/bioconda/biobox_add_taxid
   :alt:   (downloads)
.. |docker_biobox_add_taxid| image:: https://quay.io/repository/biocontainers/biobox_add_taxid/status
   :target: https://quay.io/repository/biocontainers/biobox_add_taxid
.. _`biobox_add_taxid/tags`: https://quay.io/repository/biocontainers/biobox_add_taxid?tab=tags


.. raw:: html

    <script>
        var package = "biobox_add_taxid";
        var versions = ["1.2","1.1","1.0","0.6","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobox_add_taxid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobox_add_taxid/README.html