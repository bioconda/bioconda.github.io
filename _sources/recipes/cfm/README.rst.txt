:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cfm'
.. highlight: bash

cfm
===

.. conda:recipe:: cfm
   :replaces_section_title:
   :noindex:

   Tools for applying Competitive Fragmentation Modeling \(CFM\) to spectrum prediction and metabolite identification tasks\, as well as a tools for fragment generation and peak annotation.

   :homepage: https://sourceforge.net/p/cfm-id/wiki/Home/
   :license: GPL-2
   :recipe: /`cfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm/meta.yaml>`_

   


.. conda:package:: cfm

   |downloads_cfm| |docker_cfm|

   :versions:
      
      

      ``33-7``,  ``33-6``,  ``33-5``,  ``33-4``,  ``33-3``,  ``33-2``,  ``33-1``,  ``33-0``

      

   
   :depends on boost-cpp: ``1.68.0.*``
   :depends on libgcc: ``>=13``
   :depends on liblbfgs: ``>=1.10,<1.11.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on lp_solve: ``5.5.*``
   :depends on mpich: ``>=4.2.3,<5.0a0``
   :depends on rdkit: ``2018.09.1``

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

    pixi global install cfm

to add into an existing workspace instead, run::

    pixi add cfm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cfm

Alternatively, to install into a new environment, run::

    conda create -n envname cfm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cfm:<tag>

(see `cfm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cfm| image:: https://img.shields.io/conda/dn/bioconda/cfm.svg?style=flat
   :target: https://anaconda.org/bioconda/cfm
   :alt:   (downloads)
.. |docker_cfm| image:: https://quay.io/repository/biocontainers/cfm/status
   :target: https://quay.io/repository/biocontainers/cfm
.. _`cfm/tags`: https://quay.io/repository/biocontainers/cfm?tab=tags


.. raw:: html

    <script>
        var package = "cfm";
        var versions = ["33","33","33","33","33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cfm/README.html