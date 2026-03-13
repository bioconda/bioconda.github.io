:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tesorter'
.. highlight: bash

tesorter
========

.. conda:recipe:: tesorter
   :replaces_section_title:
   :noindex:

   Lineage\-level classification of transposable elements using conserved protein domains.

   :homepage: https://github.com/zhangrengang/TEsorter
   :documentation: https://github.com/zhangrengang/TEsorter/blob/v1.5.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tesorter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesorter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesorter/meta.yaml>`_
   :links: doi: :doi:`10.1093/hr/uhac017`, biotools: :biotools:`TEsorter`

   


.. conda:package:: tesorter

   |downloads_tesorter| |docker_tesorter|

   :versions:
      
      

      ``1.5.1-0``,  ``1.4.7-1``,  ``1.4.7-0``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.3.0-0``,  ``1.2.5.2-0``

      

   
   :depends on biopython: 
   :depends on drmaa: 
   :depends on hmmer: 
   :depends on pp: 
   :depends on python: ``>=3``
   :depends on rmblast: 
   :depends on xopen: 

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

    pixi global install tesorter

to add into an existing workspace instead, run::

    pixi add tesorter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tesorter

Alternatively, to install into a new environment, run::

    conda create -n envname tesorter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tesorter:<tag>

(see `tesorter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tesorter| image:: https://img.shields.io/conda/dn/bioconda/tesorter.svg?style=flat
   :target: https://anaconda.org/bioconda/tesorter
   :alt:   (downloads)
.. |docker_tesorter| image:: https://quay.io/repository/biocontainers/tesorter/status
   :target: https://quay.io/repository/biocontainers/tesorter
.. _`tesorter/tags`: https://quay.io/repository/biocontainers/tesorter?tab=tags


.. raw:: html

    <script>
        var package = "tesorter";
        var versions = ["1.5.1","1.4.7","1.4.7","1.4.6","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tesorter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tesorter/README.html