:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biskit'
.. highlight: bash

biskit
======

.. conda:recipe:: biskit
   :replaces_section_title:
   :noindex:

   A Python platform for structural bioinformatics.

   :homepage: https://biskit.pasteur.fr
   :developer docs: https://github.com/graik/biskit
   :license: LGPL / GPL-3.0-or-later
   :recipe: /`biskit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit/meta.yaml>`_

   Biskit is a modular\, object\-oriented Python library for structural bioinformatics research.


.. conda:package:: biskit

   |downloads_biskit| |docker_biskit|

   :versions:
      
      

      ``3.0.1-0``,  ``2.5.1-0``,  ``2.4.3-1``,  ``2.4.3-0``

      

   
   :depends on biopython: 
   :depends on numpy: 
   :depends on parmed: 
   :depends on python: 
   :depends on scipy: 

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

    pixi global install biskit

to add into an existing workspace instead, run::

    pixi add biskit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biskit

Alternatively, to install into a new environment, run::

    conda create -n envname biskit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biskit:<tag>

(see `biskit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biskit| image:: https://img.shields.io/conda/dn/bioconda/biskit.svg?style=flat
   :target: https://anaconda.org/bioconda/biskit
   :alt:   (downloads)
.. |docker_biskit| image:: https://quay.io/repository/biocontainers/biskit/status
   :target: https://quay.io/repository/biocontainers/biskit
.. _`biskit/tags`: https://quay.io/repository/biocontainers/biskit?tab=tags


.. raw:: html

    <script>
        var package = "biskit";
        var versions = ["3.0.1","2.5.1","2.4.3","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biskit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biskit/README.html