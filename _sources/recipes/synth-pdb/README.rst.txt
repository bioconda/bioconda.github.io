:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'synth-pdb'
.. highlight: bash

synth-pdb
=========

.. conda:recipe:: synth-pdb
   :replaces_section_title:
   :noindex:

   Realistic Protein Structure Generator

   :homepage: https://github.com/elkins/synth-pdb
   :license: MIT / MIT
   :recipe: /`synth-pdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synth-pdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synth-pdb/meta.yaml>`_

   


.. conda:package:: synth-pdb

   |downloads_synth-pdb| |docker_synth-pdb|

   :versions:
      
      

      ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.9.0-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.6.3-0``

      

   
   :depends on biotite: ``>=0.35.0``
   :depends on numpy: ``>=1.20``
   :depends on openmm: 
   :depends on python: ``>=3.8``

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

    pixi global install synth-pdb

to add into an existing workspace instead, run::

    pixi add synth-pdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install synth-pdb

Alternatively, to install into a new environment, run::

    conda create -n envname synth-pdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/synth-pdb:<tag>

(see `synth-pdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_synth-pdb| image:: https://img.shields.io/conda/dn/bioconda/synth-pdb.svg?style=flat
   :target: https://anaconda.org/bioconda/synth-pdb
   :alt:   (downloads)
.. |docker_synth-pdb| image:: https://quay.io/repository/biocontainers/synth-pdb/status
   :target: https://quay.io/repository/biocontainers/synth-pdb
.. _`synth-pdb/tags`: https://quay.io/repository/biocontainers/synth-pdb?tab=tags


.. raw:: html

    <script>
        var package = "synth-pdb";
        var versions = ["1.16.0","1.15.0","1.14.1","1.9.0","1.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/synth-pdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/synth-pdb/README.html