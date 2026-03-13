:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igfinder'
.. highlight: bash

igfinder
========

.. conda:recipe:: igfinder
   :replaces_section_title:
   :noindex:

   A tool to extract Igh and Igl\/Igk gene sequences from assembled transcripts

   :homepage: https://tx.bioreg.kyushu-u.ac.jp/igfinder
   :license: MIT
   :recipe: /`igfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igfinder/meta.yaml>`_

   


.. conda:package:: igfinder

   |downloads_igfinder| |docker_igfinder|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on biopython: 
   :depends on numpy: 
   :depends on python: ``2.7.*``

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

    pixi global install igfinder

to add into an existing workspace instead, run::

    pixi add igfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igfinder

Alternatively, to install into a new environment, run::

    conda create -n envname igfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igfinder:<tag>

(see `igfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igfinder| image:: https://img.shields.io/conda/dn/bioconda/igfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/igfinder
   :alt:   (downloads)
.. |docker_igfinder| image:: https://quay.io/repository/biocontainers/igfinder/status
   :target: https://quay.io/repository/biocontainers/igfinder
.. _`igfinder/tags`: https://quay.io/repository/biocontainers/igfinder?tab=tags


.. raw:: html

    <script>
        var package = "igfinder";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igfinder/README.html