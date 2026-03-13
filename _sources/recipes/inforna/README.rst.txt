:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'inforna'
.. highlight: bash

inforna
=======

.. conda:recipe:: inforna
   :replaces_section_title:
   :noindex:

   A server for the design of RNA sequences that fold into a given pseudo\-knot free RNA secondary structure.

   :homepage: https://github.com/BackofenLab/INFO-RNA
   :license: MIT-like
   :recipe: /`inforna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inforna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inforna/meta.yaml>`_
   :links: biotools: :biotools:`inforna`

   


.. conda:package:: inforna

   |downloads_inforna| |docker_inforna|

   :versions:
      
      

      ``2.1.2-6``,  ``2.1.2-5``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on viennarna: ``>=2.5.1,<2.6.0a0``

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

    pixi global install inforna

to add into an existing workspace instead, run::

    pixi add inforna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install inforna

Alternatively, to install into a new environment, run::

    conda create -n envname inforna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/inforna:<tag>

(see `inforna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_inforna| image:: https://img.shields.io/conda/dn/bioconda/inforna.svg?style=flat
   :target: https://anaconda.org/bioconda/inforna
   :alt:   (downloads)
.. |docker_inforna| image:: https://quay.io/repository/biocontainers/inforna/status
   :target: https://quay.io/repository/biocontainers/inforna
.. _`inforna/tags`: https://quay.io/repository/biocontainers/inforna?tab=tags


.. raw:: html

    <script>
        var package = "inforna";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inforna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inforna/README.html