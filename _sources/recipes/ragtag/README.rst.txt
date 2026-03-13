:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ragtag'
.. highlight: bash

ragtag
======

.. conda:recipe:: ragtag
   :replaces_section_title:
   :noindex:

   Fast reference\-guided genome assembly scaffolding

   :homepage: https://github.com/malonge/RagTag
   :documentation: https://github.com/malonge/RagTag/wiki
   
   :license: MIT / MIT
   :recipe: /`ragtag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragtag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragtag/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3887139`

   


.. conda:package:: ragtag

   |downloads_ragtag| |docker_ragtag|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on intervaltree: 
   :depends on minimap2: 
   :depends on mummer: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>3``

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

    pixi global install ragtag

to add into an existing workspace instead, run::

    pixi add ragtag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ragtag

Alternatively, to install into a new environment, run::

    conda create -n envname ragtag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ragtag:<tag>

(see `ragtag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ragtag| image:: https://img.shields.io/conda/dn/bioconda/ragtag.svg?style=flat
   :target: https://anaconda.org/bioconda/ragtag
   :alt:   (downloads)
.. |docker_ragtag| image:: https://quay.io/repository/biocontainers/ragtag/status
   :target: https://quay.io/repository/biocontainers/ragtag
.. _`ragtag/tags`: https://quay.io/repository/biocontainers/ragtag?tab=tags


.. raw:: html

    <script>
        var package = "ragtag";
        var versions = ["2.1.0","2.0.1","2.0.0","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ragtag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ragtag/README.html