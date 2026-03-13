:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blend-bio'
.. highlight: bash

blend-bio
=========

.. conda:recipe:: blend-bio
   :replaces_section_title:
   :noindex:

   BLEND is a Fast\, Memory\-Efficient\, and Accurate Mechanism to Find Fuzzy Seed Matches in Genome Analysis

   :homepage: https://github.com/CMU-SAFARI/BLEND
   :license: MIT
   :recipe: /`blend-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blend-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blend-bio/meta.yaml>`_

   


.. conda:package:: blend-bio

   |downloads_blend-bio| |docker_blend-bio|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install blend-bio

to add into an existing workspace instead, run::

    pixi add blend-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blend-bio

Alternatively, to install into a new environment, run::

    conda create -n envname blend-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blend-bio:<tag>

(see `blend-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blend-bio| image:: https://img.shields.io/conda/dn/bioconda/blend-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/blend-bio
   :alt:   (downloads)
.. |docker_blend-bio| image:: https://quay.io/repository/biocontainers/blend-bio/status
   :target: https://quay.io/repository/biocontainers/blend-bio
.. _`blend-bio/tags`: https://quay.io/repository/biocontainers/blend-bio?tab=tags


.. raw:: html

    <script>
        var package = "blend-bio";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blend-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blend-bio/README.html