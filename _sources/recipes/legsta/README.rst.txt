:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'legsta'
.. highlight: bash

legsta
======

.. conda:recipe:: legsta
   :replaces_section_title:
   :noindex:

   In silico Legionella pneumophila Sequence Based Typing

   :homepage: https://github.com/tseemann/legsta
   :license: GPL-3.0
   :recipe: /`legsta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/legsta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/legsta/meta.yaml>`_

   


.. conda:package:: legsta

   |downloads_legsta| |docker_legsta|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.3.7-0``,  ``0.3.3-0``

      

   
   :depends on any2fasta: 
   :depends on ispcr: 
   :depends on perl: 

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

    pixi global install legsta

to add into an existing workspace instead, run::

    pixi add legsta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install legsta

Alternatively, to install into a new environment, run::

    conda create -n envname legsta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/legsta:<tag>

(see `legsta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_legsta| image:: https://img.shields.io/conda/dn/bioconda/legsta.svg?style=flat
   :target: https://anaconda.org/bioconda/legsta
   :alt:   (downloads)
.. |docker_legsta| image:: https://quay.io/repository/biocontainers/legsta/status
   :target: https://quay.io/repository/biocontainers/legsta
.. _`legsta/tags`: https://quay.io/repository/biocontainers/legsta?tab=tags


.. raw:: html

    <script>
        var package = "legsta";
        var versions = ["0.5.2","0.5.1","0.5.1","0.5.1","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/legsta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/legsta/README.html