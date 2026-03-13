:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jolytree'
.. highlight: bash

jolytree
========

.. conda:recipe:: jolytree
   :replaces_section_title:
   :noindex:

   Fast alignment\-free phylogenetic reconstruction from genome sequences

   :homepage: https://research.pasteur.fr/fr/software/jolytree/
   :license: GPL / GPLv3
   :recipe: /`jolytree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jolytree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jolytree/meta.yaml>`_

   


.. conda:package:: jolytree

   |downloads_jolytree| |docker_jolytree|

   :versions:
      
      

      ``2.1-0``,  ``1.1b-1``,  ``1.1b-0``

      

   
   :depends on fastme: ``>=2.1.5``
   :depends on gawk: ``>=4.1.3``
   :depends on mash: ``>=1.0.2``
   :depends on req: ``>=1.2``

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

    pixi global install jolytree

to add into an existing workspace instead, run::

    pixi add jolytree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jolytree

Alternatively, to install into a new environment, run::

    conda create -n envname jolytree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jolytree:<tag>

(see `jolytree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jolytree| image:: https://img.shields.io/conda/dn/bioconda/jolytree.svg?style=flat
   :target: https://anaconda.org/bioconda/jolytree
   :alt:   (downloads)
.. |docker_jolytree| image:: https://quay.io/repository/biocontainers/jolytree/status
   :target: https://quay.io/repository/biocontainers/jolytree
.. _`jolytree/tags`: https://quay.io/repository/biocontainers/jolytree?tab=tags


.. raw:: html

    <script>
        var package = "jolytree";
        var versions = ["2.1","1.1b","1.1b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jolytree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jolytree/README.html