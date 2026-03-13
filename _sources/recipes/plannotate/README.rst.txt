:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plannotate'
.. highlight: bash

plannotate
==========

.. conda:recipe:: plannotate
   :replaces_section_title:
   :noindex:

   Webserver and command line tool for annotating engineered plasmids.

   :homepage: https://github.com/mmcguffi/pLannotate
   :documentation: https://github.com/mmcguffi/pLannotate/blob/v1.2.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`plannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plannotate/meta.yaml>`_
   :links: biotools: :biotools:`plannotate`

   


.. conda:package:: plannotate

   |downloads_plannotate| |docker_plannotate|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on altair: ``4.2.*``
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.10.1``
   :depends on bokeh: ``2.4.1.*``
   :depends on click: 
   :depends on curl: 
   :depends on diamond: ``>=2.0.13``
   :depends on numpy: 
   :depends on pandas: ``>=1.3.5,<2.0.0``
   :depends on protobuf: ``3.20.*``
   :depends on python: ``>=3.9,<3.13``
   :depends on ripgrep: ``>=13.0.0``
   :depends on streamlit: ``1.8.1.*``
   :depends on tabulate: ``>=0.8.9``
   :depends on trnascan-se: ``>=2.0.7``

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

    pixi global install plannotate

to add into an existing workspace instead, run::

    pixi add plannotate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plannotate

Alternatively, to install into a new environment, run::

    conda create -n envname plannotate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plannotate:<tag>

(see `plannotate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plannotate| image:: https://img.shields.io/conda/dn/bioconda/plannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/plannotate
   :alt:   (downloads)
.. |docker_plannotate| image:: https://quay.io/repository/biocontainers/plannotate/status
   :target: https://quay.io/repository/biocontainers/plannotate
.. _`plannotate/tags`: https://quay.io/repository/biocontainers/plannotate?tab=tags


.. raw:: html

    <script>
        var package = "plannotate";
        var versions = ["1.2.4","1.2.3","1.2.2","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plannotate/README.html