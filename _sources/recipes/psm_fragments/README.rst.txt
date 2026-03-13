:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psm_fragments'
.. highlight: bash

psm_fragments
=============

.. conda:recipe:: psm_fragments
   :replaces_section_title:
   :noindex:

   PSM validation against ion fragmentation 

   :homepage: https://github.com/galaxyproteomics/psm_fragments
   :license: MIT
   :recipe: /`psm_fragments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm_fragments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm_fragments/meta.yaml>`_

   


.. conda:package:: psm_fragments

   |downloads_psm_fragments| |docker_psm_fragments|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on lxml: 
   :depends on numpy: 
   :depends on plotly: 
   :depends on pyteomics: 
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

    pixi global install psm_fragments

to add into an existing workspace instead, run::

    pixi add psm_fragments

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psm_fragments

Alternatively, to install into a new environment, run::

    conda create -n envname psm_fragments

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psm_fragments:<tag>

(see `psm_fragments/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psm_fragments| image:: https://img.shields.io/conda/dn/bioconda/psm_fragments.svg?style=flat
   :target: https://anaconda.org/bioconda/psm_fragments
   :alt:   (downloads)
.. |docker_psm_fragments| image:: https://quay.io/repository/biocontainers/psm_fragments/status
   :target: https://quay.io/repository/biocontainers/psm_fragments
.. _`psm_fragments/tags`: https://quay.io/repository/biocontainers/psm_fragments?tab=tags


.. raw:: html

    <script>
        var package = "psm_fragments";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psm_fragments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psm_fragments/README.html