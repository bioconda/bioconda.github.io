:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stacks_summary'
.. highlight: bash

stacks_summary
==============

.. conda:recipe:: stacks_summary
   :replaces_section_title:
   :noindex:

   Stacks reports generator

   :homepage: https://github.com/mariabernard/galaxy_wrappers
   :license: GPL / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`stacks_summary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks_summary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks_summary/meta.yaml>`_

   


.. conda:package:: stacks_summary

   |downloads_stacks_summary| |docker_stacks_summary|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on numpy: 
   :depends on python: ``>=2.7,<2.8.0a0``

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

    pixi global install stacks_summary

to add into an existing workspace instead, run::

    pixi add stacks_summary

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stacks_summary

Alternatively, to install into a new environment, run::

    conda create -n envname stacks_summary

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stacks_summary:<tag>

(see `stacks_summary/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stacks_summary| image:: https://img.shields.io/conda/dn/bioconda/stacks_summary.svg?style=flat
   :target: https://anaconda.org/bioconda/stacks_summary
   :alt:   (downloads)
.. |docker_stacks_summary| image:: https://quay.io/repository/biocontainers/stacks_summary/status
   :target: https://quay.io/repository/biocontainers/stacks_summary
.. _`stacks_summary/tags`: https://quay.io/repository/biocontainers/stacks_summary?tab=tags


.. raw:: html

    <script>
        var package = "stacks_summary";
        var versions = ["1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stacks_summary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stacks_summary/README.html