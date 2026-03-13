:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio_assembly_refinement'
.. highlight: bash

bio_assembly_refinement
=======================

.. conda:recipe:: bio_assembly_refinement
   :replaces_section_title:
   :noindex:

   Assembly refinement tools\, mostly useful for \(but not limited to\) pacbio bacterial assemblies

   :homepage: https://github.com/nds/bio_assembly_refinement
   :license: GPLv3
   :recipe: /`bio_assembly_refinement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_assembly_refinement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_assembly_refinement/meta.yaml>`_

   


.. conda:package:: bio_assembly_refinement

   |downloads_bio_assembly_refinement| |docker_bio_assembly_refinement|

   :versions:
      
      

      ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on pyfastaq: ``>=3.10.0``
   :depends on pymummer: 
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

    pixi global install bio_assembly_refinement

to add into an existing workspace instead, run::

    pixi add bio_assembly_refinement

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bio_assembly_refinement

Alternatively, to install into a new environment, run::

    conda create -n envname bio_assembly_refinement

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bio_assembly_refinement:<tag>

(see `bio_assembly_refinement/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bio_assembly_refinement| image:: https://img.shields.io/conda/dn/bioconda/bio_assembly_refinement.svg?style=flat
   :target: https://anaconda.org/bioconda/bio_assembly_refinement
   :alt:   (downloads)
.. |docker_bio_assembly_refinement| image:: https://quay.io/repository/biocontainers/bio_assembly_refinement/status
   :target: https://quay.io/repository/biocontainers/bio_assembly_refinement
.. _`bio_assembly_refinement/tags`: https://quay.io/repository/biocontainers/bio_assembly_refinement?tab=tags


.. raw:: html

    <script>
        var package = "bio_assembly_refinement";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio_assembly_refinement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio_assembly_refinement/README.html